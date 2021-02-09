import { useEffect, useState } from "react"

import topics from '../../../static/TopicsDefinition.json'

import { getUnauthenticatedDynamoDbClient } from "../../../common/aws/DynamoDb"
import CompleteArticleView from "../../../components/article/CompleteArticleView"
import { fetchByTopic } from "../../../common/aws/FetchArticles"

const ArticleView = ({topicRouteName, articleRouteName}) => {
    const [loading, setLoading] = useState("initial");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (loading === "initial") {
            if (window.sessionStorage.getItem(topicRouteName)) {
                console.log("Getting data from session storage ...");
                const fetchedArticles = JSON.parse(window.sessionStorage.getItem(topicRouteName));
                setLoading("completed");
                setArticles(fetchedArticles);
            } else {
                console.log("Getting data from database ...");
                fetchByTopic(topicRouteName, getUnauthenticatedDynamoDbClient(), setLoading, setArticles)
            }
        }
    }, [])

    const topic = topics.filter(topic => topic.routeName == topicRouteName)[0]
    let view = (<p>Đang tải dữ liệu ...</p>);
    if (loading === "failed") {
        view = (<p>Không tải được dữ liệu!</p>);
    } else if (loading === "completed") {
        view = <CompleteArticleView topic={topic} articleRouteName={articleRouteName} articles={articles} />
    }
    return view;
}

ArticleView.getInitialProps = ({query}) => {
    return {
        topicRouteName: query.topic,
        articleRouteName: query.article
    };
}

export default ArticleView;