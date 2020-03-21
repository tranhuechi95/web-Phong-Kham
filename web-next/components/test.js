const Test = (props) => {
    return (
        <div>
            <div id="tintuc" className="container-fluid text-center">
            <h3 className="fontSansation colorDarkBlue fontSize3vw pt-5">TIN TỨC - BÀI VIẾT</h3>
            <div id="tintucCarousel" className="carousel slide p-5" data-ride="carousel">
                {/*  each picture will be a link */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-deck fontSize1vw">
                            <div className="card">
                                <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
                                <Link href="/post" as={`/post/${props.title}`}>
                                    <a title="test"><div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Vắc xin phòng bệnh</h5></div>
                                    </a>
                                </Link>    
                            </div>
                               
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-deck fontSize1vw">
                            <div className="card">
                                <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
                                <Link href="/about">
                                    <a><div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Virus - Vi khuẩn</h5></div>
                                    </a>
                                </Link> 
                            </div>
                            
                        </div>
                    
                    </div>
                    <div className="carousel-item">
                        <div className="card-deck fontSize1vw">
                            <div className="card">
                                <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
                                <Link href="/about">
                                    <a><div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Thanh quản - Giọng nói</h5></div>
                                    </a>
                                </Link>
                            </div>   
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
            {props.posts.map(post => {
                    <h1>{post}</h1>

            })};
        </div>     
    );  
};
    
export default Test;