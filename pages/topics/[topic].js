import Layout from "../../components/Layout"
import topics from '../../static/TopicsDefinition.json'
import allArticles from '../../static/Articles.json'
import Link from 'next/link'

const OtherTopics = (props) => {
    const otherTopics = props.topics.filter(topic => topic.routeName != props.mainTopicRouteName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map(topic => (
                    <div className="pt-4" key={topic.id}>
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
    // filter out the 1st article
    const otherArticles = props.mainTopicArticles.filter(article => article.id != props.mainTopicArticles[0].id); // TODO: just slice(1)?
    // TODO deprecate usage of article.routeName
    // use '-'.join(article.name.toLowerCase().split(' ')) instead
    return (
        <div>
            <div>
                {/* <!-- illustration image --> */}
                <img className="img-fluid borderRect" src={`../../static/assets/template/images/${props.mainTopicArticles[0].image}`}/>
                <Link href="/articles/[article]" as={`/articles/${props.mainTopicArticles[0].routeName}`}>
                    <a>
                        <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-1">
                            {props.mainTopicArticles[0].name}
                        </h3>
                    </a>
                </Link>

                {/* <!-- short excerpt of the article--> */}
                <p className="fontRoboLight fontSize1-2vw">
                    {props.mainTopicArticles[0].excerpt}
                </p>
            </div>
            {
                otherArticles.map(article => (
                    <div key={article.id}>
                        <hr/>
                        <div className="row pt-2">
                            <div className="col-md-3">
                                <img className="img-fluid" src={`../../static/assets/template/images/${article.image}`}/>
                            </div>
                            <div className="col-md-8">
                                <Link href="/articles/[article]" as={`/articles/${article.routeName}`}>
                                    <a><h4 className="colorDarkBlue fontSize1-5vw fontRoboBold">{article.name}</h4></a>
                                </Link>
                                <p className="fontSize1-2vw fontRoboLight">{article.excerpt}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const MainTopic = props => {
    //const router = useRouter();
    const mainTopicRouteName = props.mainTopicRouteName;
    const mainTopic = topics.filter(topic => topic.routeName == mainTopicRouteName)[0];
    const mainTopicArticles = allArticles.filter(article => article.topic == mainTopicRouteName);

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
                                <MainTopicArticles mainTopicArticles={mainTopicArticles}/>
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