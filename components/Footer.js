import { Component } from 'react';
import 'isomorphic-fetch';
import footerImg from '../static/assets/template/images/fb-Phong-Kham-2.jpg';
import logo from '../static/assets/template/images/logo.jpg';

const FooterLeft = () => {
    return (
    <div className="col-md-4 my-1">
        <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">PHÒNG KHÁM CHUYÊN KHOA<br/>TAI-MŨI-HỌNG</h4>
        <img className="py-2 borderRound borderWhite" src={logo} style={{width: "10vw"}}/>
        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-map-marker-alt pr-2 colorGreen"></i>Số 29, Ngõ 41, Phố Vũ Ngọc Phan, Quận Đống Đa, Hà Nội</h5>
        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-phone pr-2 colorGreen"></i>0912.189.853</h5>
        <h5 className="fontRoboLight fontSize1-2vw pt-1"><i className="fas fa-envelope pr-2 colorGreen"></i>pktiensiphamthibichdao@gmail.com</h5>
    </div>
    );
}

const FooterMiddleForm = (props) => {
    return (
        <div className="col-md-4 my-1">
            {/* <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">ĐĂNG KÝ NHẬN TIN</h4>
            <h5 className="fontRoboLightItalic fontSize1vw px-2">Liên hệ với chúng tôi để biết thêm chi tiết</h5>
            <form method="POST" onSubmit={props.handleSubmit}>
                <div className="form-row px-2">
                    <div className="form-group col-md-8">
                        <input type="email" className="form-control" id="email" placeholder="Nhập email" name="email" value={props.parentState.email} onChange={props.handleChange}/>
                    </div>
                    <div className="form-group col-md-3">
                        <button type="submit" className="btn btn-Green colorDarkBlue button-container-footer">Đăng ký</button>
                    </div>
                </div>
            </form> */}
            <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">THỜI GIAN LÀM VIỆC</h4>
            <div className="fontRoboLight fontSize1-2vw">
                <div className="d-flex">
                    <div className="flex-md-fill">Thứ Hai - Thứ Sáu<br/>Thứ Bảy<br/>Chủ Nhật<br/>Khám tại nhà theo lịch đặt trước</div>
                    <div className="flex-md-fill">17h00 - 20h00<br/>08h30 - 11h00, 16h00 - 20h00<br/>08h30 - 11h00, 15h00 - 20h00</div>
                </div>
            </div>
        </div>
    );
}

const FooterMiddleFormSubmitted = () => {
    return (
        <div className="col-md-4 my-1">
            <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">ĐĂNG KÝ NHẬN TIN</h4>
            <h5 className="fontRoboLightItalic fontSize1-3vw px-2">Đăng ký nhận tin thành công</h5>
            <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue pt-3">THỜI GIAN LÀM VIỆC</h4>
            <div className="fontRoboLight fontSize1-2vw">
                <div className="d-flex">
                    <div className="flex-md-fill">Thứ Hai - Thứ Sáu<br/>Thứ Bảy<br/>Chủ Nhật<br/>Khám tại nhà theo lịch đặt trước</div>
                    <div className="flex-md-fill">17h00 - 20h00<br/>08h30 - 11h00, 16h00 - 20h00<br/>08h30 - 11h00, 15h00 - 20h00</div>
                </div>
            </div>
        </div>
    );
}

const FooterRight = () => {
    return (
        <div className="col-md-4 my-1">
            <h4 className="fontRoboBold fontSize1-5vw colorDarkBlue">FACEBOOK</h4>
            <a href="https://tinyurl.com/phongkhambsiDao">
                <div>
                    <img className="py-3 fb-img-container" src={footerImg}/>
                </div>
            </a>
        </div>
    );
}

const CopyRight = () => {
    return (
        <div className="container-fluid bgGreen text-center p-2">
            <p className="fontSize1vw colorDarkBlue fontRoboReg pt-1"> &copy; {(new Date()).getFullYear()} Bản quyền thuộc PHÒNG KHÁM CHUYÊN KHOA TAI MŨI HỌNG. All rights reserved.</p>
        </div>
    );
}
class Footer extends Component{
    constructor (props) {
        super(props)
        this.state = {
            isSubmitting: true,
            email: ''
        }
    }
    handleChange = evt => {
        this.setState ({
            [evt.target.name]: evt.target.value,
        });
    };
    handleSubmit = evt => {
        evt.preventDefault();
        fetch('/DangKy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // chonDichVu, name, email, tel, ngaySinh, address, date, chonGioKham
            body: JSON.stringify({
                email: this.state.email
            })
        })
        .then(response => response.text())
        .then(() => this.setState ({
            isSubmitting: false
        }))
        .catch(error => console.log(error));
    };
    render() {
        var isSubmitting = this.state.isSubmitting;
        if (isSubmitting) {
            return (
                <div>
                    <div className="container-fluid p-5 bgPhotoEnd p-5 mt-3">
                        <div className="row">
                            <FooterLeft/>
                            <FooterMiddleForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} parentState={this.state}/>
                            <FooterRight/>
                        </div>
                    </div>
                    <CopyRight/>
                </div>
            );
        }
        return (
            <div>
                <div className="container-fluid p-5 bgPhotoEnd p-5 mt-3">
                    <div className="row">
                        <FooterLeft/>
                        <FooterMiddleFormSubmitted/>
                        <FooterRight/>
                    </div>
                </div>
                <CopyRight/>
            </div>
        );
    }
}

export default Footer;