const Footer = () => {
    return (
        <div>
            <div className="container-fluid p-5 bgPhotoEnd p-5">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">PHÒNG KHÁM CHUYÊN KHOA<br/>TAI-MŨI-HỌNG</h4>
                        <img className="py-2 borderRound borderWhite" src="../static/assets/template/images/logo.png" style={{width: "10vw"}}/>
                        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-map-marker-alt pr-2"></i>Số 29, Ngõ 41, Phố Vũ Ngọc Phan, Quận Đống Đa, Hà Nội</h5>
                        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-phone pr-2"></i>0912.189.853</h5>
                        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-envelope pr-2"></i>pktiensiphamthibichdao@gmail.com</h5>
                            
                    </div>
                    
                    <div className="col-md-4">
                        <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">ĐĂNG KÝ NHẬN TIN</h4>
                        <h5 className="fontRoboLightItalic fontSize1vw px-2">Liên hệ với chúng tôi để biết thêm chi tiết</h5>
                        <form method="POST">
                            <div className="form-row px-2">
                                <div className="form-group col-md-8">                           
                                    <input type="email" className="form-control" id="email" placeholder="Nhập email của bạn" name="email"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <button type="submit" className="btn btn-Green colorDarkBlue">Đăng ký</button>
                                </div>
                            </div>
                        </form>
                        <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue pt-3">THỜI GIAN LÀM VIỆC</h4>
                        <div className="row py-2 px-2">
                            <div className="col-md-8 fontRoboLight fontSize1-2vw">Thứ Hai - Thứ Sáu<br/>Thứ Bảy<br/>Chủ Nhật<br/>Khám tại nhà theo lịch đặt trước</div>
                            <div className="col-md-4 fontRoboLight fontSize1-2vw">17:00-20:00<br/>16:00-20:00<br/>15:00-20:00
                            </div>
                        </div>    
                    </div>
                    
                    <div className="col-md-4">
                        <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">FACEBOOK</h4>
                        <a href="https://tinyurl.com/phongkhambsiDao"><img className="py-3" src="../static/assets/template/images/fbPage.png"/></a>
                    </div>
                </div>
            </div>

            { /* <!-- copyright block --> */ }
            <div className="container-fluid bgGreen text-center p-2">
                <p className="fontSize1vw colorDarkBlue fontRoboReg pt-1">Bản quyền thuộc PHÒNG KHÁM CHUYÊN KHOA TAI MŨI HỌNG. All rights reserved</p>
            </div>
        </div>

    );
}

export default Footer;