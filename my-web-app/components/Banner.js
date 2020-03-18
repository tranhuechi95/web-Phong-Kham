const Banner = () => {
    { /* <!-- to have a front block as carousel --> */ }
    <div className="container-fluid">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            { /* <!-- indicator --> */ }
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
    
            { /* } <!-- wrapper for slides --> */ }
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../static/assets/template/images/banner.png"/>
                </div>
                <div class="carousel-item">
                    <img src="../static/assets/template/images/banner.png"/>
                </div>
                <div class="carousel-item">
                    <img src="../static/assets/template/images/banner.png"/>
                </div>
            </div>
        </div>
    </div>
}

export default Banner;
