import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Topics from '../../static/TopicsDefinition.json';
import { AMPLIFY_PARAMS } from '../../common/aws/Params';
import { getAuthenticatedDynamoDbClient } from '../../common/aws/DynamoDb';
import {
    deserializedArticlesFromStorage,
    epochToDatetime,
    toDynamoDBSchema,
    updateExistingArticle
} from '../../common/article/Utils';

// Without this configuration, withAuthenticator call below cannot work
// TODO What is Auth? A stateful singleton? What does Amplify.configure actually execute under the hood?
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(AMPLIFY_PARAMS);
Auth.configure();

const postToEdit = () => {
    const router = useRouter();
    const articleRouteName = router.query["article"];
    const year = router.query["year"];
    const [status, setStatus] = useState("loading");
    const now = Math.floor(Date.now().valueOf() / 1000)
    const [article, setArticle] = useState({
        CreatedTimestamp: now,
        CreatedDatetime: epochToDatetime(now),
        ArticleName: "",
        RouteName: "",
        HeadlineImage: "",
        Topic: "",
        Excerpt: "",
        Content: "",
    });

    const titleChangeHandler = (e) => { setArticle({ArticleName: e.target.value}); }
    const topicChangeHandler = (e) => { setArticle({Topic: e.target.value}); }
    const imgUrlChangeHandler = (e) => { setArticle({HeadlineImage: e.target.value}); }
    const contentChangeHandler = (e) => { setArticle({Content: e.target.value}); }

    //testing for form content
    const submitHandler = (e) => {
        e.preventDefault();

        Auth.currentAuthenticatedUser().then((cognitoUser) => {
            const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
            const dynamoDbClient = getAuthenticatedDynamoDbClient(cognitoUser);
            dynamoDbClient.send(new PutItemCommand({
                TableName: "BacSiDaoArticles",
                Item: toDynamoDBSchema(article),
                ReturnConsumedCapacity: "TOTAL",
            }), (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Submitted successfully!")
                    console.log(data.ConsumedCapacity);
                    // update session storage with content of this new/updated article
                    let allArticlesByYear = deserializedArticlesFromStorage();
                    if (status === "new") {
                        addNewArticle(allArticlesByYear, article)
                    } else if (status === "edit") {
                        updateExistingArticle(allArticlesByYear, article)
                    }
                    window.sessionStorage.setItem("AllArticles", JSON.stringify(allArticlesByYear));
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
                    <form className="singleEditPostContainer">
                        <div className="inputContainer">
                            <div>
                                <label>
                                    Tên bài viết
                                    <input placeholder="Post title" value={article.ArticleName} onChange={titleChangeHandler}>
                                    </input>
                                </label>
                                <label>
                                    Chủ đề
                                    <select value={article.Topic} onChange={topicChangeHandler}>
                                    {Topics.map((topic, index) => (
                                        <option value={topic.routeName} key={index}>{topic.displayName}</option>
                                    ))}
                                </select>
                                </label>
                                <label>
                                    Ảnh minh hoạ
                                    <input value={article.HeadlineImage} placeholder="web link tới ảnh minh hoạ" onChange={imgUrlChangeHandler}></input>
                                </label>
                            </div>

                            <div>
                                <label>
                                    Nội dung
                                    <textarea placeholder="Post content" value={article.Content} onChange={contentChangeHandler}></textarea>
                                </label>
                            </div>
                        </div>
                        <div className="form-button-container">
                            <button type="submit" className="btn btn-Green colorDarkBlue button-container-footer" onClick={submitHandler}>Submit</button>
                        </div>
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
                const allArticlesByYear = deserializedArticlesFromStorage();
                const singleYearArticles = allArticlesByYear[year];
                const articleOptional = singleYearArticles.filter(article => article.RouteName === articleRouteName);
                if (articleOptional.length) {
                    setStatus("edit");
                    setArticle(articleOptional[0]);
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
