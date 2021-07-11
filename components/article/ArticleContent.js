import Link from 'next/link'

import marked from 'marked'

export default function ArticleContent({topicRouteName, currArticleRouteName, articles}) {
    if (articles.length) {
        const currArticle = articles.filter(article => article.RouteName === currArticleRouteName)[0];
        const relatedArticles = articles.filter(article => article.RouteName !== currArticleRouteName).slice(0,7);
        return (
            <div>
                <div>
                    <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-3">{currArticle.ArticleName}</h3>
                    <img className="img-fluid borderRect mb-4" src={currArticle.HeadlineImage}/>
                    <article dangerouslySetInnerHTML={ { __html: marked(currArticle.Content) } } />
                    <p className="fontRoboBold fontSize1vw text-right">PGS.TS.BS. Phạm Thị Bích Đào</p>
                </div>

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