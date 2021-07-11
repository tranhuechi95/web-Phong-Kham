import Link from 'next/link';
import topics from '../static/TopicsDefinition.json';

const NewsCardDeck = (props) => (
    props.topics.map(topic => (
        <div className="card card-news-container" key={topic.id}>
            <img className="card-img-top" src={`../static/assets/template/images/${topic.image}`} alt="Card image cap"/>
            <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`}>
                <a title="test"><div className="card-body card-body-DichVu">
                <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">{topic.displayName}</h5></div>
                </a>
            </Link>
        </div>))
);

const News = () => (
    <div id="tintuc" className="container-fluid bgGreen text-center p-5">
        <h3 className="fontSansation colorDarkBlue fontSize3vw">TIN TỨC - BÀI VIẾT</h3>
        <div id="tintucCarousel" className="carousel slide pt-2" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck topics={topics.slice(0, 3)} />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck topics={topics.slice(3, 6)} />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck topics={topics.slice(6, 9)} />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-deck fontSize1vw">
                        <NewsCardDeck topics={topics.slice(9, 12)} />
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#tintucCarousel" role="button" data-slide="prev">
                <span className="fas fa-arrow-alt-circle-left fa-2x colorDarkBlue" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#tintucCarousel" role="button" data-slide="next">
                <span className="fas fa-arrow-alt-circle-right fa-2x colorDarkBlue" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);

export default News;