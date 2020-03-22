import Layout from "../../components/Layout"
import posts from '../../static/topic.json'
import postContent from '../../static/postContent.json'
import Link from 'next/link'

const OtherTopics = (props) => {
    // filter from posts to get all the postName that is not the same as our current article's postName
    const otherTopics = posts.filter(post => post.postName != props.currArticle.postName);
    return (
        <div className="col-md-4 vl-short colScroll">
            <h3 className="fontSize1-5vw fontSansation pt-3 text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map(topic => (
                    <div className="timelineContainer pt-5" key={topic.id}>
                        <Link href="/posts/[postName]" as={`/posts/${topic.postName}`}> 
                            <a><img className="img-fluid" src={`../../static/assets/template/images/${topic.image}`}/>
                                <p className="textBelow colorWhite fontSize1vw">{topic.name}</p>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

const CurrArticleContent = (props) => {
    const relatedArticles = props.relatedArticles.slice(0,4);
    return (
        <div className="col-md-6 py-2">
            <div>
                {/* <!-- illustration image --> */}
                <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-3">{props.currArticle.name}</h3>
                <img className="img-fluid borderRect" src={`../../static/assets/template/images/${props.currArticle.image}`}/>
                {/* <!-- short excerpt of the article--> */}
                <p className="fontRoboLight fontSize1-2vw text-justify pt-4">{props.currArticle.content}</p>
                <p className="fontRoboBold fontSize1vw text-right">PGS.TS.BS. Phạm Thị Bích Đào</p>    
            </div>

            {/* <!-- other articles with title and short excerpt at the sides--> */}
            <hr/>
            <h3 className="fontSize1-5vw mt-5">CÁC BÀI VIẾT LIÊN QUAN</h3>
            <div className="container text-left">
                {
                    relatedArticles.map(article => (
                        <Link href="/postContent/[article]" as={`/postContent/${article.articleName}`} key={article.id}>
                            <a><h4 className="colorDarkBlue fontSize1-2vw align-left">{article.name}</h4></a>
                        </Link>   
                        )
                    )
                }
            </div>
        </div>
    )
}

const PostContent = (props) => {
    // we have the web name here
    const currArticleWebName = props.currArticleWebName;
    //console.log(currArticleWebName)
    // we get the aritcle name to display here
    const currArticle = postContent.filter(post => post.articleName == currArticleWebName)
    //console.log(currArticle)

    const currTopic = posts.filter(topic => topic.postName == currArticle[0].postName)
    //console.log(currTopic)

    const relatedArticles = postContent.filter(post => post.postName == currArticle[0].postName).filter(post => post.id != currArticle[0].id)
    //console.log(relatedArticles)
    //console.log(currTopic)

    // how do I get the name of this post name?
    return (
        <Layout>
            <Link href="/posts/[postName]" as={`/posts/${currTopic[0].postName}`}>
                <a><h3 className="colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5 pt-3">Trang chính {currTopic[0].name}</h3></a>
            </Link>
            <div className="container-fluid m-3">
                <div className="row">            
                    <div className="col-md-1">
                    </div>
                    {/* CurrArticleContent has className="col-md-6" */}
                    <CurrArticleContent currArticle={currArticle[0]} relatedArticles={relatedArticles}/>
                    {/* <!-- for other topics --> */}
                    {/* OtherTopics has className="col-md-4" */}
                    <OtherTopics currArticle={currArticle[0]}/>
                </div>
            </div>
        </Layout>
    );
}

PostContent.getInitialProps = ({query}) => {
    return {
        currArticleWebName: query.article
    };
}

export default PostContent;