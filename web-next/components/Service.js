const Service = () => {
    return (
        <div>
            <div id="DichVu" className="container-fluid bgGreen text-center p-5">
                <p className="fontSansation">
                    <span className="colorBlue">DỊCH VỤ TẠI </span>
                    <span className="colorWhite">PHÒNG KHÁM</span>
                </p> 
                <style jsx> {
                    `p {font-size: 3vw}`
                }    
                </style>
                <div className="container-fluid text-center px-3 pt-3 pb-5">
                    <div className="card-deck fontSize1vw">
                        <div className="card borderRound borderBlue">
                            <img className="card-img-top" src="../static/assets/template/images/hinh-1.png" alt="Card image cap"/>
                            <div className="card-body card-body-DichVu">
                                <h5 className="card-text colorBlue fontSize1-2vw fontRoboBold">VIÊM MŨI-XOANG</h5>
                            </div>
                        </div>
                        <div className="card borderRound borderBlue">
                            <img className="card-img-top" src="../static/assets/template/images/hinh-2.png" alt="Card image cap"/>
                            <div className="card-body card-body-DichVu">
                                <h5 className="card-text colorBlue fontSize1-2vw fontRoboBold">VIÊM TAI GIỮA</h5>
                            </div>
                        </div>
                        <div className="card borderRound borderBlue">
                            <img className="card-img-top" src="../static/assets/template/images/hinh-3.png" alt="Card image cap"/>
                            <div className="card-body card-body-DichVu">
                                <h5 className="card-text colorBlue fontSize1-2vw fontRoboBold">VIÊM HỌNG</h5>
                            </div>
                        </div>
                        <div className="card borderRound borderBlue">
                            <img className="card-img-top" src="../static/assets/template/images/hinh-4.png" alt="Card image cap"/>
                            <div className="card-body card-body-DichVu">
                                <h5 className="card-text colorBlue fontSize1-2vw fontRoboBold">VIÊM THANH QUẢN<br/>KHÀN TIẾNG</h5>
                            </div>
                        </div>
                        <div className="card borderRound borderBlue">
                            <img className="card-img-top" src="../static/assets/template/images/hinh-5.png" alt="Card image cap"/>
                            <div className="card-body card-body-DichVu">
                                <h5 className="card-text colorBlue fontSize1-2vw fontRoboBold">VIÊM PHẾ QUẢN</h5>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

        </div>
    );
}

export default Service;
