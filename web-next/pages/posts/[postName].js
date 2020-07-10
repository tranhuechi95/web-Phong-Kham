import Layout from "../../components/Layout"
import posts from '../../static/topic.json'
import postContent from '../../static/normalized_data.json'
import Link from 'next/link'

const OtherTopics = (props) => {
    const otherTopics = props.posts.filter(post => post.postName != props.currPostName);
    return (
        <div>
            <h3 className="fontSize1-5vw fontSansation text-center">CÁC CHỦ ĐỀ BÀI VIẾT KHÁC</h3>
            {
                otherTopics.map(topic => (
                    <div className="pt-4" key={topic.id}>
                        <Link href="/posts/[postName]" as={`/posts/${topic.postName}`}> 
                            <a>
                                <img className="img-fluid otherTopics-img-container" src={`../../static/assets/template/images/${topic.smImage}`}/>
                                <h5 className="colorBlue fontSize1-5vw fontRoboBold text-center">{topic.name}</h5>
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
    const otherArticles = props.mainTopicPosts.filter(article => article.id != props.mainTopicPosts[0].id);
    return (
        <div>
            <div>
                {/* <!-- illustration image --> */}
                <img className="img-fluid borderRect" src={`../../static/assets/template/images/${props.mainTopicPosts[0].image}`}/>
                <Link href="/postContent/[article]" as={`/postContent/${props.mainTopicPosts[0].articleName}`}>
                    <a>
                        <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-1">
                            {props.mainTopicPosts[0].name}
                        </h3>
                    </a>
                </Link>
                
                {/* <!-- short excerpt of the article--> */}
                <p className="fontRoboLight fontSize1-2vw">
                    {props.mainTopicPosts[0].excerpt}
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
                                <Link href="/postContent/[article]" as={`/postContent/${article.articleName}`}>
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

const mainPost = props => {
    //const router = useRouter();
    const currPostName = props.currPostName;
    const currName = posts.filter(post => post.postName == currPostName);
    const mainTopicPosts = postContent.filter(article => article.postName == currPostName);

    // how do I get the name of this post name?
    return (
        <Layout title={`Tin Tức ${currName[0].name}`}>
            <div className="container-fluid m-4">
                <div className="row">            
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8 text-justify">
                                <h3 className="colorDarkBlue fontSansation fontSize1-5vw">{currName[0].name}</h3>
                                <MainTopicArticles mainTopicPosts={mainTopicPosts}/>
                            </div>
                            
                            <div className="col-md-4 colScroll">
                                <OtherTopics posts={posts} currPostName={currPostName}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </Layout>
    );
}

mainPost.getInitialProps = ({query}) => {
    return {
        currPostName: query.postName
    };
}

export default mainPost;