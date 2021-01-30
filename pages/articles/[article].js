import Layout from "../../components/Layout"
import topics from '../../static/TopicsDefinition.json'
import allArticles from '../../static/Articles.json'
import Link from 'next/link'

const OtherTopics = (props) => {
    // filter from topics to get all the routeName that is not the same as our current article's routeName
    const otherTopics = topics.filter(topic => topic.routeName != props.currArticle.topic);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation pt-1 text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map(topic => (
                    <div className="pt-1" key={topic.id}>
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

const CurrArticleContent = (props) => {
    const relatedArticles = props.relatedArticles.slice(0,7);
    const paragraphs = props.currArticle.content.split("\n");
    return (
        <div>
            <div>
                {/* <!-- illustration image --> */}
                <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-3">{props.currArticle.name}</h3>
                <img className="img-fluid borderRect mb-4" src={`../../static/assets/template/images/${props.currArticle.image}`}/>
                {/* <!-- short excerpt of the article--> */}
                { paragraphs.map( (paragraph, idx) => (
                    <p className="fontRoboLight fontSize1-2vw text-justify" key={idx}>{paragraph}</p>
                ))}
                <p className="fontRoboBold fontSize1vw text-right">PGS.TS.BS. Phạm Thị Bích Đào</p>
            </div>

            {/* <!-- other articles with title and short excerpt at the sides--> */}
            <hr/>
            <h3 className="fontSize1-5vw mt-5">CÁC BÀI VIẾT LIÊN QUAN</h3>
            <div className="container text-left">
                {
                    relatedArticles.map(article => (
                        // TODO deprecate usage of article.routeName
                        // use '-'.join(article.name.toLowerCase().split(' ')) instead
                        <Link href="/articles/[article]" as={`/articles/${article.routeName}`} key={article.id}>
                            <a><h4 className="colorDarkBlue fontSize1-2vw align-left fontRoboLight">{article.name}</h4></a>
                        </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

const Article = (props) => {
    const articleRouteName = props.articleRouteName;
    const currArticle = allArticles.filter(article => article.routeName == articleRouteName)[0]
    const currTopic = topics.filter(topic => topic.routeName == currArticle.topic)[0]
    // articles under the same topic as the currently rendered article
    const relatedArticles = allArticles.filter(article => article.topic == currArticle.topic && article.id != currArticle.id)

    return (
        <Layout title={currArticle.name}>
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8">
                                <Link href="/topics/[topic]" as={`/topics/${currTopic.routeName}`}>
                                    <a><h3 className="colorDarkBlue fontSansation fontSize1-5vw">Trang chính {currTopic.name}</h3></a>
                                </Link>
                                {/* CurrArticleContent has className="col-md-6" */}
                                <CurrArticleContent currArticle={currArticle} relatedArticles={relatedArticles}/>
                                {/* <!-- for other topics --> */}
                                {/* OtherTopics has className="col-md-4" */}
                            </div>
                            <div className="col-md-4 colScroll">
                                <OtherTopics currArticle={currArticle}/>
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
        articleRouteName: query.article
    };
}

export default Article;