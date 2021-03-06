# Deployment of this application on AWS Elastic Beanstalk

This is a NextJS application. Official documentation of NextJS suggests that I should deploy this application on Vercel, a Jamstack deployment platform. However, due to my existing free account on AWS and the ubiquity of AWS, I decided to deploy this application to AWS instead as AWS deployment knowledge might be useful for me in the future.

At first I thought deployment is just a chore and I wouldn't have to think too much, but I was wrong. I managed to get the first version of this website up and running after a day worth of tinkering, lots of googling and feeling frustrated, but it was not a pleasant experience. AWS is a complex system, and using it correctly requires serious learning, not just following the default checkboxes of an installation wizard (this was what I expected, how naive ...). I discovered in December that AWS even provides a suite of certifications for people who could master the AWS system. I spent a part of my one-week leave in December studying the AWS Developer certification, but didn't manage to take the exam before my leave was over and now I've forgotten almost everything. It is precisely because of this that when I need to deploy the second version of this website recently, which is different from the first version in major ways, I faced a lot of troubles. I'm typing this documentation with the hope that deployment of the third version of this website will be more smooth-sailing.

## Phases of deployment

The deployment happened in the following phases:

### Test the website locally

This step was trivial for the first version of this website, but was totally non-trivial after the addition of admin view which requires authentication. I want to list some of the challenges I faced here:

1. An application running on localhost need to somehow be authenticated and authorized to read from/write to a database table hosted on AWS. Specifically, I need a mechanism that allows a piece of Javascript code running on somebody's browser to get authenticated/authorized and use my AWS resources.

2. Some views require authentication and authorization while some views do not require authentication or authorization.

3. Minimize the data that the app read from/write to AWS DynamoDB. Reading/writing data costs money.

Some new stuff I learnt in the process:

1. Authentication and authorization are 2 different things! (to elaborate ...)

2.

### Installing EB CLI

1. If you already have Python 3 installed locally, perhaps due to your usage of Conda, do not run the `bundled_installer` script as recommended on EB CLI README.md page:

        ./aws-elastic-beanstalk-cli-setup/scripts/bundled_installer

The bundled installer will try to download its default version of python. You wouldn't want this since it bloats your machine. Instead, do this

        conda activate name-of-conda-env-with-python-whose-version-you-want-to-use
        python scripts/ebcli_installer.py --python-installation $CONDA_PREFIX/bin/python

An additional information is that as of recently, EB commands have been consolidated into the AWS CLI. Instead of typing

        eb create --single

you can now type

        aws elasticbeanstalk create-environment

(though I'm not sure how to specify `--single` with this method)

### Create an Elastic Beanstalk (EB) environment

### Deploy website to that EB environment

Things I learnt:

1. Build the application locally and deploy the built app. This offers 2 advantages:

    * Avoid an [extremely common permission error](https://github.com/fsevents/fsevents/issues/108) people face when they need to deploy a NodeJS application. The root cause of this error seems to be a dependency of many popular Node modules, [`fsevents`](https://github.com/fsevents/fsevents): its installation script tries to create a subfolder with a Bash command but misses a flag and encounters a permission error on AWS EC2 machine.

    * If you are a cheapo like me who opt for a t2.micro EC2 instance, installing dependencies and building a NextJS app on an instance with so little computing power will cost no small amount of time. It has just 1 virtual CPU and 1 GB of RAM. My guess is that installing dependencies and building your NextJS app will require your EC2 instance's virtual CPU to run at full speed for 30 minutes straight.

2. It is easy to start from a clean slate

    Deploying to an existing AWS application gives me more trouble than I thought. I'm not sure why I had so many problems - the EC2 instances keep crashing, and the EB env kept having to spin up new EC instances. It might have something to do with me modifying the `package.json` scripts in ways that I didn't understand and some answer online said it'll cause `npm` to enter an infinite loop. It might also have something to do with the fact that I deployed the first version of this website using EB console page and now try to deploy the second version with EB command-line utility. A few days later I said eff-it, killed the current application and the EB environment, delete the local `.elasticbeanstalk` folder and create a new application/environment.

    I followed the steps [here](https://medium.com/swlh/how-to-deploy-your-nextjs-project-on-elastic-beanstalk-in-5-minutes-7f6bbd8b05be) - this article was incredibly useful! One small thing I would add is to use `eb create --single` to create an EB environment to prevent it from spinning up an elastic load balancer (ELB), as ELB costs money.

### Add TLS certificate to your website

If you've purchased and configured a custom domain name for your EB env, you can use HTTPS to allow users to connect to your web site securely. If you don't own a domain name, you can still use HTTPS with a self-signed certificate for development and testing purposes. HTTPS is a must for any application that transmits user data or login information.

You can place configuration files under `.ebextensions` folder to configure the proxy server that passes traffic to your application to terminate HTTPS connection. This is useful if you want to use HTTPS with a single instance environment, or if you configure your load balancer to pass traffic through without decrypting it.

EB uses nginx (default) or Apache HTTPD as the reverse proxy to map your application to your ELB load balancer on port 80. EB provides a default proxy configuration that you can either extend or override completely with your own configuration.

By default, EB configures the proxy to forward requests to your application on port 8080. You can override the default port by setting the `PORT` environment property to the port on which your main application listens. Another way to do this is to set your application's port to `PORT` e.g. putting `next start -p $PORT` as your `start` script inside `package.json`.

Sample config file for nginx proxy server of a NodeJS app could be found [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/https-singleinstance-nodejs.html). We'll then need to generate our server's certificate and private key. An X509 certificate for our application could be created with OpenSSL. We only need to create a certificate locally (can sign it ourselves using our own private key instead of having to submit the signing request to a third party for signing) if we want to use HTTPS in a single instance env.