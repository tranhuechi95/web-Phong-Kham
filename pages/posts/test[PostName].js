const OtherTopics = (props) => {
    const otherTopics = props.posts.filter(post => post.postName != props.currPostName);
    return (
        <div>
            {
                otherTopics.map(topic => (
                    <div className="timelineContainer pt-5" key={topic.id}>
                        <Link href="/posts/[postName]" as={`/posts/${topic.postName}`}> 
                            <a><img className="img-fluid" src="../../static/assets/template/images/t1-sm.png"/>
                                <p className="textBelow colorWhite fontSize1vw">{topic.name}</p>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

const MainTopicArticle = (props) => {
    // filter out the 1st article
    const otherArticles = props.mainTopicPosts.filter(article => article.id != props.mainTopicPosts[0].id);
    return (
        <div>
            <div>
                {/* <!-- illustration image --> */}
                <img className="img-fluid borderRect" src={`../../static/assets/template/images/${props.mainTopicPosts[0].image}`}/>
                <a href="#">
                    <h3 className="colorDarkBlue fontRoboBold fontSize1-5vw pt-3">
                        {props.mainTopicPosts[0].name}
                    </h3>
                </a>
                {/* <!-- short excerpt of the article--> */}
                <p className="fontRoboLight fontSize1-2vw">
                    {props.mainTopicPosts[0].excerpt}
                </p>
            </div>
            {
                otherArticles.map(article => (
                    <div key={article.id}>
                        <hr/>
                        <div className="row pt-4">
                            <div className="col-md-3">
                                <img className="img-fluid" src={`../../static/assets/template/images/${article.image}`}/>
                            </div>
                            <div className="col-md-8">
                                <a href="#"><h4 className="colorDarkBlue fontSize1-5vw fontRoboBold">{article.name}</h4></a>
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
    const currName = postsData.filter(post => post.postName == currPostName);

    // how do I get the name of this post name?
    return (
        <Layout>
            <h3 className="colorDarkBlue fontSansation fontSize1-5vw pl-5 ml-5">{currName.name}</h3>
            <div className="container-fluid m-4">
                <div className="row">            
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6 py-2">
                        <MainTopicArticle
                            mainTopicPosts={postContent
                                .filter(article => article.postName == currPostName)}
                        />
                    </div>
                    {/* <!-- for other topics --> */}
                    <div className="col-md-4 vl colScroll">
                        <div className="timelineContainer">
                            <h3 className="fontSize1-5vw">CÁC CHỦ ĐỀ BÀI VIẾT</h3>
                        </div>
                        <OtherTopics posts={postsData} currPostName={currPostName}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

mainPost.getInitialProps = ({query}) => {
    return {
        currPostName: postsData[query.postName]
    };
}

export default mainPost;