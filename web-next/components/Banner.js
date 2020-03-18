const Banner = () => {
    return (
        <div className="container-fluid">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                { /* <!-- indicator --> */ }
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
        
                { /* <!-- wrapper for slides --> */ }
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../static/assets/template/images/banner.png" style={{width:"100%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="../static/assets/template/images/banner.png" style={{width:"100%"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="../static/assets/template/images/banner.png" style={{width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Banner;