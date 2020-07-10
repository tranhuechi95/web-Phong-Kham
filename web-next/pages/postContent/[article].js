import Layout from "../../components/Layout"
import posts from '../../static/topic.json'
import postContent from '../../static/normalized_data.json'
import Link from 'next/link'

const OtherTopics = (props) => {
    // filter from posts to get all the postName that is not the same as our current article's postName
    const otherTopics = posts.filter(post => post.postName != props.currArticle.postName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation pt-1 text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map(topic => (
                    <div className="pt-1" key={topic.id}>
                        <Link href="/posts/[postName]" as={`/posts/${topic.postName}`}> 
                            <a>
                                <img className="img-fluid otherTopics-img-container" src={`../../static/assets/template/images/${topic.smImage}`}/>
                                <h5 className="colorBlue fontSize1-3vw fontRoboBold text-center">{topic.name}</h5>
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
                { paragraphs.map( paragraph => (
                    <p className="fontRoboLight fontSize1-2vw text-justify">{paragraph}</p>
                ))}
                <p className="fontRoboBold fontSize1vw text-right">PGS.TS.BS. Phạm Thị Bích Đào</p>    
            </div>

            {/* <!-- other articles with title and short excerpt at the sides--> */}
            <hr/>
            <h3 className="fontSize1-5vw mt-5">CÁC BÀI VIẾT LIÊN QUAN</h3>
            <div className="container text-left">
                {
                    relatedArticles.map(article => (
                        <Link href="/postContent/[article]" as={`/postContent/${article.articleName}`} key={article.id}>
                            <a><h4 className="colorDarkBlue fontSize1-2vw align-left fontRoboLight">{article.name}</h4></a>
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
    console.log(currArticleWebName)
    // we get the aritcle name to display here
    const currArticle = postContent.filter(post => post.articleName == currArticleWebName)
    // console.log(currArticle[0].postName)

    const currTopic = posts.filter(topic => topic.postName == currArticle[0].postName)
    //console.log(currTopic)

    const relatedArticles = postContent.filter(post => post.postName == currArticle[0].postName).filter(post => post.id != currArticle[0].id)
    //console.log(relatedArticles)
    //console.log(currTopic)

    // how do I get the name of this post name?
    return (
        <Layout title={currArticle[0].name}>
            <div className="container-fluid m-3">
                <div className="row">            
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8">
                                <Link href="/posts/[postName]" as={`/posts/${currTopic[0].postName}`}>
                                    <a><h3 className="colorDarkBlue fontSansation fontSize1-5vw">Trang chính {currTopic[0].name}</h3></a>
                                </Link>
                                {/* CurrArticleContent has className="col-md-6" */}
                                <CurrArticleContent currArticle={currArticle[0]} relatedArticles={relatedArticles}/>
                                {/* <!-- for other topics --> */}
                                {/* OtherTopics has className="col-md-4" */}
                            </div>
                            <div className="col-md-4 colScroll">
                                <OtherTopics currArticle={currArticle[0]}/>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-1"></div>
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