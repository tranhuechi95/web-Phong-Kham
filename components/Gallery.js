const Gallery = () => {
    return (
        <div className="container-fluid text-center my-5 mx-3">
            <h3 className="fontRoboBold fontSize2vw">THƯ VIỆN ẢNH</h3>
            <div id="galleryCarousel" className="carousel slide p-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#galleryCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#galleryCarousel" data-slide-to="1"></li>
                    <li data-target="#galleryCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk1.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk2.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk3.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk4.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk5.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/pk6.jpg" className="img-fluid gallery-img-container"/>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/tv2.png" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/tv3.png" className="img-fluid gallery-img-container"/>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/assets/template/images/tv1.png" className="img-fluid gallery-img-container"/>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    );
}

export default Gallery;