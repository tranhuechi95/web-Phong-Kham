import { Component } from 'react';
import 'isomorphic-fetch';

class TestForm extends Component{
    constructor (props) {
        super(props)
        this.state = {
            // chonDichVu: '',
            name: ''
        }
    }
    handleChange = evt => {
        this.setState ({
            [evt.target.name]: evt.target.value,
        });
    };
    handleSubmit = evt => {
        evt.preventDefault();
        fetch('/server', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // chonDichVu, name, email, tel, ngaySinh, address, date, chonGioKham
            body: JSON.stringify({
                // chonDichVu: this.state.chonDichVu,
                name: this.state.name
                })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    };
    render() {
        return (
            <div className="container-fluid">
                {/* <!-- Form -->*/}
                    <div id="formDatLich" className="col-md-6 bgDarkBlue p-5 colorWhite">
                        <form method="POST" className="py-3" onSubmit={this.handleSubmit}>
                            <h4 className="fontRoboBold fontSize1-5vw pt-5 pb-3">DỊCH VỤ KHÁM</h4>
                            {/* <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Chọn dịch vụ *</label>
                                    <select className="form-control" id="chonDichVu" name="chonDichVu" required="required" value={this.state.chonDichVu} onChange={this.handleChange}>
                                        <option className="colorWhite">1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div> */}
                            
                            <h4 className="fontRoboBold fontSize1-5vw">THÔNG TIN ĐĂNG KÝ</h4>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Họ tên*</label>
                                    <input type="text" className="form-control" id="name" placeholder="Điền họ và tên" name="name" required="required" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                {/* <div className="col-md-1"></div>
                                <div className="form-group col-md-6">
                                    <label className="fontRoboLightItalic fontSize1-2vw">Email*</label>
                                    <input type="email" className="form-control" id="email" placeholder="Điền email" name="email" required="required" value={this.state.email} onChange={this.handleChange}/>
                                </div> */}
                            </div>
                            
                            {/* <div className="form-row">
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
                            </div>                     */}
                            
                            <div className="form-group pt-3">
                                <button name="submit" type="submit" className="btn bgGreen fontRoboBold fontSize1-5vw">ĐẶT LỊCH KHÁM</button>
                            </div>
                        </form>
                    </div>   
            </div>
        )
    
    }
}

export default TestForm;

// const Test = (props) => {
//     return (
//         <div>
//             <div id="tintuc" className="container-fluid text-center">
//             <h3 className="fontSansation colorDarkBlue fontSize3vw pt-5">TIN TỨC - BÀI VIẾT</h3>
//             <div id="tintucCarousel" className="carousel slide p-5" data-ride="carousel">
//                 {/*  each picture will be a link */}
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <div className="card-deck fontSize1vw">
//                             <div className="card">
//                                 <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
//                                 <Link href="/post" as={`/post/${props.title}`}>
//                                     <a title="test"><div className="card-body card-body-DichVu">
//                                     <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Vắc xin phòng bệnh</h5></div>
//                                     </a>
//                                 </Link>    
//                             </div>
                               
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="card-deck fontSize1vw">
//                             <div className="card">
//                                 <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
//                                 <Link href="/about">
//                                     <a><div className="card-body card-body-DichVu">
//                                     <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Virus - Vi khuẩn</h5></div>
//                                     </a>
//                                 </Link> 
//                             </div>
                            
//                         </div>
                    
//                     </div>
//                     <div className="carousel-item">
//                         <div className="card-deck fontSize1vw">
//                             <div className="card">
//                                 <img className="card-img-top" src="../static/assets/template/images/t1.png" alt="Card image cap"/>
//                                 <Link href="/about">
//                                     <a><div className="card-body card-body-DichVu">
//                                     <h5 className="card-text colorBlue fontSize1-5vw fontRoboBold">Thanh quản - Giọng nói</h5></div>
//                                     </a>
//                                 </Link>
//                             </div>   
//                         </div>
//                     </div>
//                 </div>
            
//                 <a className="carousel-control-prev" href="#tintucCarousel" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#tintucCarousel" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>

//         </div>
//             {props.posts.map(post => {
//                     <h1>{post}</h1>

//             })};
//         </div>     
//     );  
// };
    
// export default Test;