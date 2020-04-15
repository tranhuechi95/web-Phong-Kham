const AboutUs = () => {
    return (
        <div>
            <div className="container-fluid bgGreen fontSansation colorDarkBlue text-center p-5 mt-1">
                <h3 className="fontSize1-5vw">PHÒNG KHÁM CHUYÊN KHOA</h3>
                <h2 className="fontSize2vw">TAI MŨI HỌNG</h2>
                <h3 className="fontSize1-5vw">PGS.TS.BS. PHẠM THỊ BÍCH ĐÀO</h3>
            </div>

            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src="../static/assets/template/images/hinhdv.png"/>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 fontSize1vw">
                        <h3 className="fontSize2vw fontRoboBold colorDarkBlue">Giới thiệu phòng khám</h3>
                        <div className="fontSize1-2vw fontRoboLight">
                            <p>
                                Phòng khám chuyên khoa Tai Mũi Họng khám, tư vấn, chẩn đoán và điều trị các bệnh lý tai mũi họng:
                            </p>
                            <ul>
                                <li className="fontSize1-2vw fontRoboLight">Viêm mũi - xoang</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm tai giữa</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm họng</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm thanh quản - khàn tiếng</li>
                                <li className="fontSize1-2vw fontRoboLight">Viên phế quản</li>
                            </ul>
                        </div>
                        <p className="fontSize1-2vw fontRoboLight">Ngoài ra, phòng khám còn khám phát hiện sớm ung thư vòm, ung thư thanh quản, ung thư mũi xoang, ung thư hạ họng<br/>Tư vấn bảo dưỡng thanh quản cho những bệnh nhân sử dụng gióng nói nhiều trong công việc (ca sĩ, giáo viên,v.v).
                        </p>    
                    </div>
                </div>       
            </div>
        </div>
    );
}

export default AboutUs;