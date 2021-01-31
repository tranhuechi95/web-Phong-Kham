import Layout from "../../components/Layout"
import topics from '../../static/TopicsDefinition.json'
import Link from 'next/link'
import { useEffect, useState } from "react"

const OtherTopics = (props) => {
    const otherTopics = props.topics.filter(topic => topic.routeName !== props.mainTopicRouteName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map((topic, idx) => (
                    <div className="pt-4" key={idx}>
                        <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`}>
                            <a>
                                <div>
                                    <img className="img-fluid otherTopics-img-container" src={`../../static/assets/template/images/${topic.smImage}`} />
                                </div>
                                <h5 className="colorBlue fontSize1-5vw fontRoboBold text-center">{topic.displayName}</h5>
                                {/* <p className="textBelow colorWhite fontSize1vw">{topic.name}</p> */}
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

const MainTopicArticles = (props) => {
    if (!props.mainTopicArticles.length) {
        return (
            <div></div>
        )
    } else {
        const otherArticles = props.mainTopicArticles.slice(1);
        // TODO deprecate usage of article.routeName
        // use article.name.toLowerCase().split(' ').join('-') instead
        return (
            <div>
                <div>
                    {/* <!-- illustration image --> */}
                    <img className="img-fluid borderRect" src={props.mainTopicArticles[0].HeadlineImage} />
                    <Link href="/articles/[topic]/[article]" as={`/articles/${props.topicRouteName}/${props.mainTopicArticles[0].RouteName}`}>
                        <a>
                            <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-1">
                                {props.mainTopicArticles[0].ArticleName}
                            </h3>
                        </a>
                    </Link>

                    {/* <!-- short excerpt of the article--> */}
                    <p className="fontRoboLight fontSize1-2vw">
                        {props.mainTopicArticles[0].Excerpt}
                    </p>
                </div>
                {
                    otherArticles.map((article, idx) => (
                        <div key={idx}>
                            <hr/>
                            <div className="row pt-2">
                                <div className="col-md-3">
                                    <img className="img-fluid" src={article.HeadlineImage} />
                                </div>
                                <div className="col-md-8">
                                    <Link href="/articles/[topic]/[article]" as={`/articles/${props.topicRouteName}/${article.RouteName}`}>
                                        <a><h4 className="colorDarkBlue fontSize1-5vw fontRoboBold">{article.ArticleName}</h4></a>
                                    </Link>
                                    <p className="fontSize1-2vw fontRoboLight">{article.Excerpt}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const MainTopic = props => {
    const [loading, setLoading] = useState("initial");
    const [articles, setArticles] = useState([]);

    const mainTopicRouteName = props.mainTopicRouteName;
    const mainTopic = topics.filter(topic => topic.routeName == mainTopicRouteName)[0];

    useEffect(() => {
        if (loading === "initial") {
            if (window.sessionStorage.getItem(mainTopicRouteName)) {
                console.log("Getting data from session storage ...");
                const fetchedArticles = JSON.parse(window.sessionStorage.getItem(mainTopicRouteName));
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
                    ExpressionAttributeValues: { ":category": { "S" : mainTopicRouteName } },
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
                            articleJsFormat.RouteName = schema.ArticleName.S.toLowerCase().split(' ').join('-');
                            articleJsFormat.HeadlineImage = schema.HeadlineImage.S;
                            articleJsFormat.Topic = schema.Category.S;
                            articleJsFormat.Excerpt = schema.Excerpt.S;
                            articleJsFormat.Content = schema.Content.S;
                            return articleJsFormat;
                        });
                        window.sessionStorage.setItem(mainTopicRouteName, JSON.stringify(fetchedArticles));
                        setLoading("completed");
                        setArticles(fetchedArticles);
                    }
                });
            }
        }
    }, [])

    return (
        <Layout title={`Tin Tức ${mainTopic.displayName}`}>
            <div className="container-fluid m-4">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8 text-justify">
                                <h3 className="colorDarkBlue fontSansation fontSize1-5vw">{mainTopic.displayName}</h3>
                                <MainTopicArticles topicRouteName={mainTopicRouteName} mainTopicArticles={articles}/>
                            </div>

                            <div className="col-md-4 colScroll">
                                <OtherTopics topics={topics} mainTopicRouteName={mainTopicRouteName}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    );
}

MainTopic.getInitialProps = ({query}) => {
    return {
        mainTopicRouteName: query.topic
    };
}

export default MainTopic;