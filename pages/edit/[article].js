import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Topics from '../../static/TopicsDefinition.json';

// Without this configuration, withAuthenticator call below cannot work
// TODO What is Auth? A stateful singleton? What does Amplify.configure actually execute under the hood?
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
    Auth: {
        region: 'ap-southeast-1',
        userPoolId: 'ap-southeast-1_njLRxln6g',
        userPoolWebClientId: '6525vahirp3ojc70ltj0pi7u26',
        // enforce user authentication prior to accessing AWS resources
        mandatorySignIn: true,
    }
});
Auth.configure();

const postToEdit = () => {
    const router = useRouter();
    const articleRouteName = router.query["article"];
    const year = router.query["year"];
    const [status, setStatus] = useState("loading");
    const [newTitle, setNewTitle] = useState("");
    const [newTopic, setNewTopic] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [newContent, setNewContent] = useState("");
    const [article, setArticle] = useState({});
    const [allArticles, setAllArticles] = useState({});

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    }

    const topicChangeHandler = (e) => {
        setNewTopic(e.target.value);
    }

    const imgUrlChangeHandler = (e) => {
        setImgUrl(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setNewContent(e.target.value);
    }

    //testing for form content
    const submitHandler = (e) => {
        e.preventDefault();

        Auth.currentAuthenticatedUser().then((cognitoUser) => {
            const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
            const {
                fromCognitoIdentityPool,
            } = require("@aws-sdk/credential-provider-cognito-identity");
            const { DynamoDB, PutItemCommand } = require("@aws-sdk/client-dynamodb");

            const REGION = "ap-southeast-1";
            const IDENTITY_POOL_ID = "ap-southeast-1:fcf7590e-f838-4b74-b2b8-6e69e0fc1f84";

            const dynamoDbClient = new DynamoDB({
                region: REGION,
                credentials: fromCognitoIdentityPool({
                    client: new CognitoIdentityClient({ region: REGION }),
                    identityPoolId: IDENTITY_POOL_ID,
                    // If logins is not provided, dynamodb would complain that an unauthorized user
                    // is trying to access AWS DynamoDB service. This will lead to an error as it is
                    // defined in the identity pool we're using that unauthorized user has no access
                    // to DynamoDB services, while authorized user has full access to DynamoDB services.
                    logins: {
                        // name of Amazon Cognito identity provider has the following structure
                        // cognito-idp.<REGION>.amazonaws.com/<USER_POOL_ID>
                        "cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_njLRxln6g":
                            // TODO not sure why, but id token needs to be used here instead of access token
                            cognitoUser.getSignInUserSession().getIdToken().getJwtToken()
                    },
                }),
            });

            let newArticleSchema = {
                "CreatedTimestamp": {"N": (status === "new" ? Math.floor(Date.now().valueOf() / 1000).toString() : Math.floor(article.CreatedDatetime.valueOf() / 1000).toString())},
                "ArticleName": {"S": newTitle},
                "HeadlineImage": {"S": imgUrl},
                "Category": {"S": newTopic},
                "Excerpt": {"S": (newContent.slice(0,170) + "...")}, // TODO deprecate usage of this
                "Content": {"S": newContent},
            };
            console.log(newArticleSchema);

            // use PutItemCommand
            dynamoDbClient.send(new PutItemCommand({
                TableName: "BacSiDaoArticles",
                Item: newArticleSchema,
                ReturnConsumedCapacity: "TOTAL",
            }), (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Submitted successfully!")
                    console.log(data.ConsumedCapacity);
                    // update session storage with content of this new article
                    // might be a new article
                    let allArticlesCopy = Object.assign({}, allArticles);
                    let singleYearArticles = allArticlesCopy[year];
                    let article = singleYearArticles.filter(article => article.RouteName === articleRouteName)[0];
                    article.ArticleName = newTitle;
                    article.RouteName = article.ArticleName.toLowerCase().split(' ').join('-');
                    article.HeadlineImage = imgUrl;
                    article.Topic = newTopic;
                    article.Content = newContent;
                    article.Excerpt = newContent.slice(0,170) + "...";
                    window.sessionStorage.setItem("AllArticles", JSON.stringify(allArticlesCopy));
                }
            });
        });
    }

    let view;
    if (status === "loading") {
        view = (<p>Đang tải dữ liệu ...</p>);
    } else if (status === "failed") {
        view = (<p>Tải dữ liệu bị lỗi! Hãy thông báo với Phúc.</p>);
    } else {
        view = (
            <Layout>
                <section className="editPostsContainer">
                    <div>{article.ArticleName}</div>
                    <form className="singleEditPostContainer">
                        <label>
                            Tên bài viết
                            <input placeholder="Post title" value={newTitle} onChange={titleChangeHandler}>
                            </input>
                        </label>
                        <label>
                            Chủ đề
                            <select value={newTopic} onChange={topicChangeHandler}>
                            {Topics.map((topic, index) => (
                                <option value={topic.routeName} key={index}>{topic.displayName}</option>
                            ))}
                        </select>
                        </label>
                        <label>
                            Ảnh minh hoạ
                            <input value={imgUrl} placeholder="web link tới ảnh minh hoạ" onChange={imgUrlChangeHandler}></input>
                        </label>
                        <label>
                            Nội dung
                            <textarea placeholder="Post content" value={newContent} onChange={contentChangeHandler}></textarea>
                        </label>

                        <button type="submit" className="btn btn-Green colorDarkBlue button-container-footer" onClick={submitHandler}>Submit</button>
                    </form>
                </section>
            </Layout>
        );
    }

    // since the user is going to edit the text inputs and states will change,
    // we should only apply this effect once when the page is first loaded.
    // that is what the check (status === "loading") is for.
    useEffect(() => {
        if (status === "loading") {
            if (articleRouteName === "new") {
                console.log("Creating a new article!");
                setStatus("new");
            } else {
                const allArticles = JSON.parse(window.sessionStorage.getItem("AllArticles"));
                setAllArticles(allArticles);
                let years = Object.keys(allArticles).map(yearStr => parseInt(yearStr, 10));
                // TODO all this painful work is because Javascript's native Datetime module
                // does not have a way to turn an ISO-formatted datetime string into a
                // Datetime instance. Consider using an external library.
                for (let year of years) {
                    allArticles[year] = allArticles[year].map(article => {
                        let articleCopy = Object.assign({}, article);
                        articleCopy.CreatedDatetime = new Date(article.CreatedTimestamp * 1000);
                        return articleCopy;
                    });
                }
                const singleYearArticles = allArticles[year];
                const articleOptional = singleYearArticles.filter(article => article.RouteName === articleRouteName);
                if (articleOptional.length === 1) {
                    const article = articleOptional[0];
                    setStatus("edit");
                    setArticle(article);
                    setNewTitle(article.ArticleName);
                    setNewTopic(article.Topic);
                    setImgUrl(article.HeadlineImage);
                    setNewContent(article.Content);
                } else {
                    console.log("No article with this route name found among those that have been loaded locally");
                    setStatus("failed");
                }
            }
        }
    }, [])

    return view
}

// TODO why is useRouter in React functional component able to capture the sections
// of the link, but getInitialProps isn't? Does it have something to do with the
// fact that I used ? syntax in the link to pass more parameters?
// postToEdit.getInitialProps = ({query}) => {
//     return {
//         articleRouteName: query.article,
//         year: query.year
//     };
// }

// Wrapping the postToEdit view with withAuthenticator guarantees that user has to login before content
// of postToEdit page is rendered.
import { withAuthenticator } from '@aws-amplify/ui-react';
export default withAuthenticator(postToEdit);
