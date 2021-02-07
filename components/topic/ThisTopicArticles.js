export default function ThisTopicArticles({topicRouteName, articles}) {
    if (!articles.length) {
        return (
            <div></div>
        )
    } else {
        const otherArticles = articles.slice(1);
        // TODO deprecate usage of article.routeName
        // use article.name.toLowerCase().split(' ').join('-') instead
        return (
            <div>
                <div>
                    {/* <!-- illustration image --> */}
                    <img className="img-fluid borderRect" src={articles[0].HeadlineImage} />
                    <Link href="/articles/[topic]/[article]" as={`/articles/${topicRouteName}/${articles[0].RouteName}`}>
                        <a>
                            <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-1">
                                {articles[0].ArticleName}
                            </h3>
                        </a>
                    </Link>

                    {/* <!-- short excerpt of the article--> */}
                    <p className="fontRoboLight fontSize1-2vw">
                        {articles[0].Excerpt}
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
                                    <Link href="/articles/[topic]/[article]" as={`/articles/${topicRouteName}/${article.RouteName}`}>
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