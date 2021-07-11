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
import marked from 'marked';

// Without this configuration, withAuthenticator call below cannot work
// TODO What is Auth? A stateful singleton? What does Amplify.configure actually execute under the hood?
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure(AMPLIFY_PARAMS);
Auth.configure();

const postToEdit = (props) => {
    const router = useRouter();
    // This will be used to matched against RouteName attribute of every article instance stored inside the
    // browser's session storage, which is encoded. Hence, this also needs to be encoded.
    const articleRouteName = encodeURIComponent(router.query["article"]);
    const year = router.query["year"];

    const [status, setStatus] = useState("loading");
    const now = Math.floor(Date.now().valueOf() / 1000)
    const [previewEditBtn, setPreviewEditBtn] = useState("Preview");
    const [textareaClass, setTextareaClass] = useState("");
    const [articleContentClass, setArticleContentClass] = useState("articleContentContainer hidden");
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

    // TODO a little hacky, review later
    const [successAlertStr, setSuccessAlertStr] = useState("alert alert-success hidden");
    const [errorAlertStr, setErrorAlertStr] = useState("alert alert-danger hidden");

    const titleChangeHandler = (e) => {
        let articleClone = Object.assign({}, article)
        articleClone.ArticleName = e.target.value
        setArticle(articleClone)
    }
    const topicChangeHandler = (e) => {
        let articleClone = Object.assign({}, article)
        articleClone.Topic = e.target.value
        setArticle(articleClone)
    }
    const imgUrlChangeHandler = (e) => {
        let articleClone = Object.assign({}, article)
        articleClone.HeadlineImage = e.target.value
        setArticle(articleClone)
    }
    const contentChangeHandler = (e) => {
        let articleClone = Object.assign({}, article)
        articleClone.Content = e.target.value
        setArticle(articleClone)
    }

    const previewEditBtnHandler = (e) => {
        e.preventDefault();
        if (previewEditBtn == "Preview") {
            setPreviewEditBtn("Edit");
            setArticleContentClass("articleContentContainer");
            setTextareaClass("hidden");
        } else {
            setPreviewEditBtn("Preview");
            setArticleContentClass("articleContentContainer hidden");
            setTextareaClass("");
        }
    }

    //testing for form content
    const submitHandler = (e) => {
        e.preventDefault();
        if (confirm("Xác nhận cập nhật bài viết?")) {
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
                        setSuccessAlertStr("alert alert-success hidden");
                        setErrorAlertStr("alert alert-danger");
                    } else {
                        console.log("Submitted successfully!");
                        setSuccessAlertStr("alert alert-success");
                        setErrorAlertStr("alert alert-danger hidden");
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
                                <div className={successAlertStr} role="alert">
                                    Bài viết đã được cập nhật!
                                </div>
                                <div className={errorAlertStr} role="alert">
                                    Lỗi khi cập nhật bài viết ...
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-Green colorDarkBlue button-container-footer" onClick={previewEditBtnHandler}>{previewEditBtn}</button>
                                <label>
                                    Nội dung
                                    <textarea className={textareaClass} placeholder="Post content" value={article.Content} onChange={contentChangeHandler}></textarea>
                                    <article className={articleContentClass} dangerouslySetInnerHTML={ { __html: marked(article.Content) } } />
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

export async function getServerSideProps(context) {
    return {
        props: {
            // This will be used to matched against RouteName attribute of every article instance stored inside the
            // browser's session storage, which is encoded. Hence, this also needs to be encoded.
            "articleRouteName": encodeURIComponent(context.query["article"]),
            "year": context.query["year"],
        }
    }
}

// Wrapping the postToEdit view with withAuthenticator guarantees that user has to login before content
// of postToEdit page is rendered.
import { withAuthenticator } from '@aws-amplify/ui-react';
export default withAuthenticator(postToEdit);
