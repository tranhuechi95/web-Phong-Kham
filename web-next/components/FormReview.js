import { Component } from 'react';
import 'isomorphic-fetch';

class FormReview extends Component{
    constructor (props) {
        super(props)
        this.state = {
            chonDichVu: '1',
            name: '',
            email: '',
            tel: '',
            ngaySinh: '',
            address: '',
            date: '',
            chonGioKham: 'T2-T6 17:00-18:30'
        }
    }
    handleChange = evt => {
        this.setState ({
            [evt.target.name]: evt.target.value,
        });
    };
    handleSubmit = evt => {
        evt.preventDefault();
        fetch('/DatLich', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // chonDichVu, name, email, tel, ngaySinh, address, date, chonGioKham
            body: JSON.stringify({
                chonDichVu: this.state.chonDichVu,
                name: this.state.name,
                email: this.state.email,
                tel: this.state.tel,
                ngaySinh: this.state.ngaySinh,
                address: this.state.address,
                date: this.state.date,
                chonGioKham: this.state.chonGioKham
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                {/* <!-- Form -->*/}
                    <div id="formDatLich" className="col-md-6 bgDarkBlue p-5 colorWhite">
                        <form method="POST" className="py-3" onSubmit={this.handleSubmit}>
                            <h4 className="fontRoboBold fontSize1-5vw pt-5 pb-3">DỊCH VỤ KHÁM</h4>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Chọn dịch vụ *</label>
                                    <select className="form-control" id="chonDichVu" name="chonDichVu" required="required" value={this.state.chonDichVu} onChange={this.handleChange}>
                                        <option className="colorWhite">1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                            
                            <h4 className="fontRoboBold fontSize1-5vw">THÔNG TIN ĐĂNG KÝ</h4>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Họ tên*</label>
                                    <input type="text" className="form-control" id="name" placeholder="Điền họ và tên" name="name" required="required" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="form-group col-md-6">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Email*</label>
                                    <input type="email" className="form-control" id="email" placeholder="Điền email" name="email" required="required" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Số điện thoại*</label>
                                    <input type="tel" className="form-control" id="tel" placeholder="Điền SĐT" name="tel" required="required" value={this.state.tel} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="form-group col-md-4">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Ngày sinh</label>
                                    <input type="date" className="form-control" id="ngaySinh" placeholder="DD/MM/YYYY" name="ngaySinh" value={this.state.ngaySinh} onChange={this.handleChange}/>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label className="fontRoboLightItalic fontSize1-2vw">Địa chỉ</label>
                                <input type="text" className="form-control" id="address" placeholder="Điền địa chỉ" name="address" value={this.state.address} onChange={this.handleChange}/>
                            </div>
                            
                            <h4 className="fontRoboBold fontSize1-5vw">CHỌN LỊCH KHÁM</h4>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Ngày khám*</label>
                                    <input type="date" className="form-control" id="date" placeholder="DD/MM/YYYY" name="date" required="required" value={this.state.date} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="form-group col-md-5">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Giờ khám*</label>                           
                                    <select className="form-control" id="gioKham" name="chonGioKham" required="required" value={this.state.chonGioKham} onChange={this.handleChange}>
                                        <option>T2-T6 17:00-18:30</option>
                                        <option>T2-T6 18:30-20:00</option>
                                        <option>T7 16:00-17:30</option>
                                        <option>T7 17:30-19:00</option>
                                        <option>T7 17:30-19:00</option>
                                        <option>T7 19:00-20:00</option>
                                        <option>CN 15:00-16:30</option>
                                        <option>CN 16:30-18:00</option>
                                        <option>CN 18:00-20:00</option>                           
                                    </select>
                                </div>
                            </div>                    
                            
                            <div className="form-group pt-3">
                                <button name="submit" type="submit" className="btn bgGreen fontRoboBold fontSize1-5vw">ĐẶT LỊCH KHÁM</button>
                            </div>
                        </form>
    
                    </div>
                
                        <div className="col-md-5 bgGreen p-5">
                            <div className="container-fluid colorBlue">
                                <div className="container text-center py-3">
                                    <h3 className="fontSize2vw fontRoboBold pt-5">Ý KIẾN CỦA NGƯỜI BỆNH</h3>
                                </div>
                                <div id="carouselExampleControls" className="carousel slide p-5" data-ride="carousel">
                                    { /* <!--<ol class="carousel-indicators">
                                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                    </ol>--> */}
                            
                                    <div className="carousel-inner px-2">
                                        <div className="carousel-item active">
                                            <div className="row text-center">
                                                <div className="col">
                                                    <img src="../static/assets/template/images/review1.png"/>
                                                </div>
                                            </div>
                                            <br/>    
                                            <div className="row text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">"Tôi bị viêm xoang từ lâu, bên trong mũi nhiều mủ và tiếp tục đau âm ỉ rất khó chịu. Sau khi đến phòng khám, được bác sĩ chẩn đoán sử dụng máy nội soi và tận tình chữa bệnh thì nay đã hết viêm xoang. Cám ơn bác sĩ Đào và phòng khám!"</p>
                                            </div>
                                            <div className="container text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">---NGỌC ANH---<br/>Kế toán ngân hàng</p>
                                            </div>
                                            
                                        </div>
                                        <div className="carousel-item">
                                            
                                            <div className="row text-center">
                                                <div className="col">
                                                    <img src="../static/assets/template/images/h2.png"/>
                                                </div>
                                            </div>
                                            <br/>    
                                            <div className="row text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">"Mình đến khám 1 lần thôi là khỏi luôn chứng đau họng dài ngày, mà chỉ cần dùng ít thuốc! Khỏi bệnh <br/>rất nhanh, quy trình khám đơn giản 👍🏿"</p>
                                            </div>
                                            <div className="container text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">---MINH GIANG---<br/>Sinh viên</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row text-center">
                                                <div className="col">
                                                    <img src="../static/assets/template/images/h3.png"/>
                                                </div>
                                            </div>
                                            <br/>    
                                            <div className="row text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">"Bác sĩ nhẹ nhàng, chuyên khoa rất tốt điều trị bệnh dứt điểm"</p>
                                            </div>
                                            <div className="container text-center p-3">
                                                <p className="fontSize1-2vw fontRoboReg">---NGUYỄN VIỆT---<br/>Nhân viên</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-md-1 bgDarkBlue">             
                        </div>   
                </div>
            </div>
        )
    
    }
}

export default FormReview;
