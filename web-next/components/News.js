import Link from 'next/link';
import posts from '../static/topic.json';

const NewsCardDeck = (props) => (
    props.posts.map(post => (
        <div className="card" key={post.id}>
            <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
            <Link href="/posts/[postName]" as={`/posts/${post.postName}`}>
                <a title="test"><div className="card-body card-body-DichVu">
                <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">{post.name}</h5></div>
                </a>
            </Link>    
        </div>))
);

const News = () => (
    <div id="tintuc" className="container-fluid text-center">
        <h3 className="fontSansation colorDarkBlue fontSize3vw pt-5">TIN TỨC - BÀI VIẾT</h3>
        <div id="tintucCarousel" className="carousel slide p-5" data-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck posts={posts.slice(0, 3)} />
                    </div>    
                </div>
                <div className="carousel-item">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck posts={posts.slice(3, 6)} />
                    </div>    
                </div>
                <div className="carousel-item">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck posts={posts.slice(6, 9)} />
                    </div>    
                </div>
            </div>
        
            <a className="carousel-control-prev" href="#tintucCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#tintucCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);
  
export default News;