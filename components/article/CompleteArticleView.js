import ArticleContent from "./ArticleContent"
import Layout from "../Layout"
import OtherTopicsSidePanel from "../topic/OtherTopicsSidePanel"

export default function CompleteArticleView({topic, articleRouteName, articles}) {
    let articleDisplayName = "";
    if (articles.length) {
        const matched = articles.filter(article => article.RouteName === articleRouteName);
        if (matched.length)
            articleDisplayName = matched[0].ArticleName;
    }
    return (
        <Layout title={articleDisplayName}>
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8">
                                <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`}>
                                    <a><h3 className="colorDarkBlue fontSansation fontSize1-5vw">Trang chính {topic.displayName}</h3></a>
                                </Link>
                                <ArticleContent topicRouteName={topic.routeName} currArticleRouteName={articleRouteName} articles={articles}/>
                            </div>
                            <div className="col-md-4 colScroll">
                                <OtherTopicsSidePanel topicRouteName={topic.routeName}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    )
}