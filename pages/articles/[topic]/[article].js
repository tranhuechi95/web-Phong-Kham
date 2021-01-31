import Layout from "../../../components/Layout"
import topics from '../../../static/TopicsDefinition.json'
import Link from 'next/link'
import { useEffect, useState } from "react"

const OtherTopics = ({topicRouteName}) => {
    // filter from topics to get all the routeName that is not the same as our current article's routeName
    const otherTopics = topics.filter(topic => topic.routeName !== topicRouteName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation pt-1 text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map((topic, idx) => (
                    <div className="pt-1" key={idx}>
                        <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`}>
                            <a>
                                <div>
                                    <img className="img-fluid otherTopics-img-container" src={`../../static/assets/template/images/${topic.smImage}`}/>
                                </div>
                                <h5 className="colorBlue fontSize1-3vw fontRoboBold text-center">{topic.displayName}</h5>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

const CurrArticleContent = ({topicRouteName, currArticleRouteName, articles}) => {
    if (articles.length) {
        const currArticle = articles.filter(article => article.RouteName === currArticleRouteName)[0];
        const relatedArticles = articles.filter(article => article.RouteName !== currArticleRouteName).slice(0,7);
        const paragraphs = currArticle.Content.split("\n");
        return (
            <div>
                <div>
                    {/* <!-- illustration image --> */}
                    <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-3">{currArticle.ArticleName}</h3>
                    <img className="img-fluid borderRect mb-4" src={currArticle.HeadlineImage}/>
                    {/* <!-- short excerpt of the article--> */}
                    { paragraphs.map( (paragraph, idx) => (
                        <p className="fontRoboLight fontSize1-2vw text-justify" key={idx}>{paragraph}</p>
                    ))}
                    <p className="fontRoboBold fontSize1vw text-right">PGS.TS.BS. Phạm Thị Bích Đào</p>
                </div>

                {/* <!-- other articles with their titles at the side --> */}
                <hr/>
                <h3 className="fontSize1-5vw mt-5">CÁC BÀI VIẾT LIÊN QUAN</h3>
                <div className="container text-left">
                    {
                        relatedArticles.map((article, idx) => (
                            <Link href="/articles/[topic]/[article]" as={`/articles/${topicRouteName}/${article.RouteName}`} key={idx}>
                                <a><h4 className="colorDarkBlue fontSize1-2vw align-left fontRoboLight">{article.ArticleName}</h4></a>
                            </Link>
                            )
                        )
                    }
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

const Article = (props) => {
    const [loading, setLoading] = useState("initial");
    const [articles, setArticles] = useState([]);

    const topicRouteName = props.topicRouteName;
    const articleRouteName = props.articleRouteName;
    let currArticleName = "";
    if (articles.length) {
        const matched = articles.filter(article => article.RouteName === articleRouteName);
        if (matched.length)
            currArticleName = matched[0].ArticleName;
    }
    const currTopic = topics.filter(topic => topic.routeName == topicRouteName)[0]

    useEffect(() => {
        if (loading === "initial") {
            if (window.sessionStorage.getItem(topicRouteName)) {
                console.log("Getting data from session storage ...");
                const fetchedArticles = JSON.parse(window.sessionStorage.getItem(topicRouteName));
                setLoading("completed");
                setArticles(fetchedArticles);
            } else {
                // fetch all articles from AWS DynamoDB
                console.log("Getting data from database ...");
                const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
                const {
                    fromCognitoIdentityPool,
                } = require("@aws-sdk/credential-provider-cognito-identity");
                const { DynamoDB, QueryCommand } = require("@aws-sdk/client-dynamodb");

                const REGION = "ap-southeast-1";
                const IDENTITY_POOL_ID = "ap-southeast-1:fcf7590e-f838-4b74-b2b8-6e69e0fc1f84";

                const dynamoDbClient = new DynamoDB({
                    region: REGION,
                    credentials: fromCognitoIdentityPool({
                        client: new CognitoIdentityClient({ region: REGION }),
                        identityPoolId: IDENTITY_POOL_ID,
                    }),
                });
                dynamoDbClient.send(new QueryCommand({
                    TableName: "BacSiDaoArticles",
                    KeyConditionExpression: "Category = :category",
                    ExpressionAttributeValues: { ":category": { "S" : topicRouteName } },
                    ScanIndexForward: false, // returned entries are sorted by sort key (CreatedTimestamp) in descending order
                }), (err, data) => {
                    if (err) {
                        console.log(err);
                        setLoading("failed");
                    } else {
                        const fetchedArticles = data.Items.map(schema => {
                            let articleJsFormat = {};
                            const schemaDate = new Date(schema.CreatedTimestamp.N * 1000);
                            const schemaDateStr = schemaDate.toLocaleString('en-US', {timeZone: 'Asia/Bangkok'});
                            articleJsFormat.CreatedTimestamp = schemaDateStr;
                            articleJsFormat.ArticleName = schema.ArticleName.S;
                            articleJsFormat.HeadlineImage = schema.HeadlineImage.S;
                            articleJsFormat.Topic = schema.Category.S;
                            articleJsFormat.Excerpt = schema.Excerpt.S;
                            articleJsFormat.Content = schema.Content.S;
                            return articleJsFormat;
                        });
                        window.sessionStorage.setItem(topicRouteName, JSON.stringify(fetchedArticles));
                        setLoading("completed");
                        setArticles(fetchedArticles);
                    }
                });
            }
        }
    }, [])

    return (
        <Layout title={currArticleName}>
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8">
                                <Link href="/topics/[topic]" as={`/topics/${currTopic.routeName}`}>
                                    <a><h3 className="colorDarkBlue fontSansation fontSize1-5vw">Trang chính {currTopic.displayName}</h3></a>
                                </Link>
                                {/* CurrArticleContent has className="col-md-6" */}
                                <CurrArticleContent topicRouteName={topicRouteName} currArticleRouteName={articleRouteName} articles={articles}/>
                                {/* <!-- for other topics --> */}
                                {/* OtherTopics has className="col-md-4" */}
                            </div>
                            <div className="col-md-4 colScroll">
                                <OtherTopics topicRouteName={topicRouteName}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    );
}

Article.getInitialProps = ({query}) => {
    return {
        topicRouteName: query.topic,
        articleRouteName: query.article
    };
}

export default Article;