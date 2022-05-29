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

1. Using AWS DynamoDB and its Javascript client library

* Design

* Cost-related issues and my solution

2. Using AWS Cognito and its Javascript client library - Amplify

* Cognito user pools and identity pools.

* Creating app client(s) and use them for dev testing/production.

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

Please type

        eb create --single

instead of

        eb create

if you're a cheapo like me and prefer to avoid using the ELB to save money. The command will ask you a few self-explanatory questions; just answer them. After that, voila, your environment is up and running, assuming your code is correct and configuration is correct. To check the health of your environment, go to EB management console on AWS website, or type

        eb status

If deployment fails, `eb create` will notify you about it. You could check why by SSH-ing into your instance

        ssh -i /path/to/your/key ec2-user@public-dns-of-ec2-instance-that-your-environment-create

[This document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) contains a guide on how to generate a SSH key pair for your EC2 instance. To know the DNS of the EC2 instance that your environment created, go to EC2 management console on AWS website and look around.

### Deploy website to that EB environment

Please type

        npm run build
        eb deploy

Now cross your fingers and pray you won't have to debug potential errors.

Things I learnt:

1. Build the application locally and deploy the built app. This offers 2 advantages:

    * Avoid an [extremely common permission error](https://github.com/fsevents/fsevents/issues/108) people face when they need to deploy a NodeJS application. The root cause of this error seems to be a dependency of many popular Node modules, [`fsevents`](https://github.com/fsevents/fsevents): its installation script tries to create a subfolder with a Bash command but misses a flag and encounters a permission error on AWS EC2 machine.

    * If you are a cheapo like me who opt for a t2.micro EC2 instance, installing dependencies and building a NextJS app on an instance with so little computing power will cost no small amount of time. It has just 1 virtual CPU and 1 GB of RAM. My guess is that installing dependencies and building your NextJS app will require your EC2 instance's virtual CPU to run at full speed for 30 minutes straight.

2. It is easy to start from a clean slate

    Deploying to an existing AWS application gives me more trouble than I thought. I'm not sure why I had so many problems - the EC2 instances keep crashing, and the EB env kept having to spin up new EC instances. It might have something to do with me modifying the `package.json` scripts in ways that I didn't understand and some answer online said it'll cause `npm` to enter an infinite loop. It might also have something to do with the fact that I deployed the first version of this website using EB console page and now try to deploy the second version with EB command-line utility. A few days later I said eff-it, killed the current application and the EB environment, delete the local `.elasticbeanstalk` folder and create a new application/environment.

    I followed the steps [here](https://medium.com/swlh/how-to-deploy-your-nextjs-project-on-elastic-beanstalk-in-5-minutes-7f6bbd8b05be) - this article was incredibly useful! One small thing I would add is to use `eb create --single` to create an EB environment to prevent it from spinning up an elastic load balancer (ELB), as ELB costs money.

3. Need to add an inbound rule for the EC2 instance that's running your webserver to allow HTTP traffic (port 80)

    * Select "Security Groups" on the vertical menu on the left of your EC2 management console.
    * Select your instance by clicking on the checkbox next to it. A box with more details of the instance's security group will pop up from below.
    * Go to "Inbound rules" section and select "Edit inbound rules".
    * Add a rule that allows HTTP traffic from any IP address (0.0.0.0/0). AWS seems to discourage specifying "any IP address" and claim that the best practice is specifying a range of IP addresses that can fetch pages from your web server. I'm not sure how to do this yet - is there a range of IP addresses that could match all those from Viet Nam and Singapore?

4. If the existing EC2 instance goes down and a different EC2 instance comes up, you'll highly likely need to re-generate the SSL/TLS cert files before you can successfully deploy your application.

5. To monitor the deployment process, SSH into the EC2 instance and tail the log file at `/var/log/eb-engine.log`

### Add TLS certificate to your website

If you've purchased and configured a custom domain name for your EB env, you can use HTTPS to allow users to connect to your web site securely. If you don't own a domain name, you can still use HTTPS with a self-signed certificate for development and testing purposes. HTTPS is a must for any application that transmits user data or login information.

EB uses nginx (default) or Apache HTTPD as the reverse proxy to map your application to your ELB load balancer on port 80.
EB provides a default proxy configuration that you can either extend or override completely with your own configuration.
You can place configuration files under `.ebextensions` folder to configure the proxy server that passes traffic to your application to terminate HTTPS connection.
This is useful if you want to use HTTPS with a single instance environment, or if you configure your load balancer to pass traffic through without decrypting it.
However, if your application uses Amazon Linux 2, configuration files are expected to be placed under `.platform/nginx/` instead and all files under `.ebextensions` will be ignored ([source](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.html), "Reverse proxy configuration" section).
EB also requires the `.platform/nginx` folder to have a very specific structure that mirrors the `/etc/nginx/` on your EC2 instance.
I only understand the reason behind this after I SSH-ed into my EC2 instance:

1. Upon deployment, EB takes the content of `.platform/nginx` and copy them to `/var/proxy/staging/nginx`, overwriting files with the same relative path with our files. E.g. if you have a file called `.platform/nginx/conf.d/00_application.conf`, that file will overwrite the file `/var/proxy/staging/nginx/conf.d/00_application.conf` on your EC2 instance if it exists.

2. EB then asks nginx to test if the files under `/var/proxy/staging/nginx` looks like a valid configuration. Essentially nginx just need to test 1 file, `/var/proxy/staging/nginx/nginx.conf` since all the files under `/var/proxy/staging/nginx` just get concatenated into that file using nginx `include` directive. Specifically the command EB uses is

        /bin/sh -c /usr/sbin/nginx -t -c /var/proxy/staging/nginx/nginx.conf

If this test fails, the running nginx instance won't be restarted with the new configuration. I figured this out by reading `/var/log/eb-engine.log` (which is a much better experience than calling `eb log` from your computer by the way).

3. If the nginx configuration we provide is valid, EB will copy them to `/etc/nginx/` (a.k.a. production configuration folder) and restart nginx.

To understand what to put under your `.platform/nginx` folder, I suggest you look at the `include` statements inside `/var/proxy/staging/nginx/nginx.conf` closely and think about what you need to achieve. For me, I need to add 2 HTTPS proxy servers that listen on port 443, and tell the default HTTP server to redirect all requests to one of the HTTPS server. To achieve the 1st point, I use `.platform/nginx/conf.d/https.conf`. To achieve the 2nd point, I use `.platform/nginx/conf.d/elasticbeanstalk/https.conf`.

By default, EB configures the proxy to forward requests to your application on port 8080. You can override the default port by setting the `PORT` environment property to the port on which your main application listens. Another way to do this is to set your application's port to `PORT` e.g. putting `next start -p $PORT` as your `start` script inside `package.json`.

A nginx server that serves HTTPS requests need to have a "certificate" and a "private key". You can generate them using [Let's Encrypt Certbot](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/). A tutorial with instructions specific to Amazon Linux 2 platform can be found [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt). After their successful generation, you need to do 2 things:

1. Add them to your nginx HTTPS server configuration.

2. Set up a cron job to automatically renew your certificate and private key when they expire. By default, the certificate and key expires after 90 days. The tutorial with Amazon Linux 2 instructions provides guidance on how to do this.

Sample config file for nginx proxy server of a NodeJS app could be found [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/https-singleinstance-nodejs.html). We'll then need to generate our server's certificate and private key. An X509 certificate for our application could be created with OpenSSL. We only need to create a certificate locally (can sign it ourselves using our own private key instead of having to submit the signing request to a third party for signing) if we want to use HTTPS in a single instance env.

### Problem with AWS Amplify library

After my website is deployed with HTTPS, I tried going to the URL that requires authentication and authorization and saw [an error](https://github.com/aws-amplify/amplify-js/discussions/5836) on my Javascript console. Luckily someone in the discussion thread has [the solution I need](https://github.com/aws-amplify/amplify-js/discussions/5836#discussioncomment-47721) (I ignored the last step because I got it correct during my dev testing). I suspect this is because there is an inconsistency between the version of Amplify I used when I develop the app and the version AWS currently supports. It's a relief the fix is that easy.

## Errors I encountered

### Cannot SSH into EC2 instance

I'm not sure under what condition this error arises; perhaps after the EC2 instance in my EB environment crashed and a new EC2 instance came up:
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:5qJB+pSwejZN8qyj/cFFm5TKw2KbFdrkmz8+ooz7RAQ.
Please contact your system administrator.
Add correct host key in /Users/leminhphuc/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/leminhphuc/.ssh/known_hosts:6
ECDSA host key for ec2-18-140-142-180.ap-southeast-1.compute.amazonaws.com has changed and you have requested strict checking.
Host key verification failed.
```

I thought someone was really eavesdropping on me, but it turns out the host key inside `~/.ssh/known_hosts` simply got outdated. Simply removing that outdated entry fixes this problem.

### Missing of SSL cert files after an instance crashes/shuts down and a new instance comes up

The instance in my EB environment shut down likely because I updated the Node platform version via the EB management console.
OR it could have been because I deployed the app without building it first and the heavy load from running `npm run build` was too much for the EC2 instance.
I don't really know.

What I know is true is that I have to regenerate all these cert files, which is a pain.
Follow the instruction [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt), 
and remember to use (`bacsidao.tmh` and `www.bacsidao.tmh`) instead of (`example.com` and `www.example.com`).
A note though: `certbot` requires a running Apache web server process,
but Apache web server can't be readily started on EC2 instance because the `/etc/httpd/conf.modules.d/00-mpm.conf` file was missing.
I had to manually add it like this:
```
# Select the MPM module which should be used by uncommenting exactly
# one of the following LoadModule lines.

# prefork MPM: Implements a non-threaded, pre-forking web server
# See: http://httpd.apache.org/docs/2.4/mod/prefork.html
#
# NOTE: If enabling prefork, the httpd_graceful_shutdown SELinux
# boolean should be enabled, to allow graceful stop/shutdown.
#
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so

# worker MPM: Multi-Processing Module implementing a hybrid
# multi-threaded multi-process web server
# See: http://httpd.apache.org/docs/2.4/mod/worker.html
#
#LoadModule mpm_worker_module modules/mod_mpm_worker.so

# event MPM: A variant of the worker MPM with the goal of consuming
# threads only for connections with active processing
# See: http://httpd.apache.org/docs/2.4/mod/event.html
#
#LoadModule mpm_event_module modules/mod_mpm_event.so
```

### The same EC2 instance cannot run both Apache and Nginx servers at the same time

Apache web server was running because `certbot` needs it to generate certificates. To check if Apache web server is running, type

        sudo systemctl status httpd

To turn off Apache web server, type

        sudo systemctl stop httpd

During certificate renewal, nginx server is running so Apache web server won't be able to start to serve certbot's challenges. Take the following steps:

        sudo systemctl stop nginx // stop the nginx process
        // modify the /etc/httpd/conf/httpd.conf file like indicated by the tutorial of setting up let's encrypt bot on Amazon Linux 2
        sudo systemctl restart httpd // start the Apache web server
        sudo certbot // run certbot program and answer its questions
        // should have been able to obtain the new certificate by now
        // apache web server is no longer needed
        sudo systemctl stop httpd
        sudo systemctl restart nginx // restart nginx server! done!

Phew, I really don't want to do this again. According to the message certbot printed after the `sudo certbot` command completed, I just need to run

        sudo certbot --certonly

to obtain new or tweaked version of the certificate I have right now. Most importantly, to non-interactively renew ALL of my certificates, I'll just need to run

        sudo certbot renew

### Integrating Messenger Chat Plugin

Different types of button for client's response:

- Postback button
- URL button
- Call button

Must include Facebook SDK for Javascript

Facebook does not allow whitelisting of localhost --> use ngrok to expose website running in localhost to the internet,
and provide a https url that we can use to test our FB features.

Usage of ngrok:
1. Download ngrok binary (or rather zipped package) from ngrok website and unzip it locally
2. Run this command

        ./ngrok authtoken 1yL5KlG9KsJX7MALH7PLoo3HbNk_7c231WbAJjC2CGqwsUPi4

to add your authtoken to the default `ngrok.yml` configuration file (located at `/Users/leminhphuc/.ngrok2/ngrok.yml`). This will grant you access to more features and longer session times. Running tunnels will be listed on the status page of the dashboard.
