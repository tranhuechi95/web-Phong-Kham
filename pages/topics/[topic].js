import { useEffect, useState } from "react"

import Layout from "../../components/Layout"
import OtherTopicsSidePanel from "../../components/topic/OtherTopicsSidePanel"
import ThisTopicArticles from "../../components/topic/ThisTopicArticles"

import topics from '../../static/TopicsDefinition.json'

import { getUnauthenticatedDynamoDbClient } from "../../common/aws/DynamoDb"
import { fetchByTopic } from "../../common/aws/FetchArticles"

const TopicView = ({topicRouteName}) => {
    const [loading, setLoading] = useState("initial");
    const [articles, setArticles] = useState([]);

    const topic = topics.filter(topic => topic.routeName == topicRouteName)[0];

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

    return (
        <Layout title={`Tin Tức ${topic.displayName}`}>
            <div className="container-fluid m-4">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8 text-justify">
                                <h3 className="colorDarkBlue fontSansation fontSize1-5vw">{topic.displayName}</h3>
                                <ThisTopicArticles topicRouteName={topicRouteName} articles={articles}/>
                            </div>

                            <div className="col-md-4 colScroll">
                                <OtherTopicsSidePanel topicRouteName={topicRouteName}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    );
}

TopicView.getInitialProps = ({query}) => {
    return {
        key: query.topic,
        topicRouteName: query.topic,
    };
}

export default TopicView;