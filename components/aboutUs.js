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
                        <img className="img-fluid about-img-container" src="../static/assets/template/images/hinhdv.png"/>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 fontSize1vw">
                        <h3 className="fontSize2vw fontRoboBold colorDarkBlue">Giới thiệu phòng khám</h3>
                        <div className="fontSize1-2vw fontRoboLight">
                            <p>
                                Phòng khám chuyên khoa Tai Mũi Họng khám, tư vấn, chẩn đoán và điều trị các bệnh lý tai mũi họng và bệnh lý các khối u vùng đầu-mặt-cổ:
                            </p>
                            <ul>
                                <li className="fontSize1-2vw fontRoboLight">Viêm tai</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm mũi - xoang</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm họng, viêm loét họng, viêm phế quản, viêm thanh quản - khàn tiếng</li>
                                <li className="fontSize1-2vw fontRoboLight">Điều trị các rối loạn giọng sau phẫu thuật</li>
                                <li className="fontSize1-2vw fontRoboLight">Viêm miệng, tăng tiết nước bọt vùng khoang miệng</li>
                                <li className="fontSize1-2vw fontRoboLight">Khám phát hiện sớm ung thư vòm, ung thư thanh quản, ung thư mũi xoang, ung thư hạ họng</li>
                                <li className="fontSize1-2vw fontRoboLight">Điều trị chóng mặt, rối loạn thăng bằng, ù tại</li>
                                <li className="fontSize1-2vw fontRoboLight">Điều trị các đau mạn tính vùng sọ mặt, vùng lưỡi</li>
                            </ul>
                        </div>
                        <p className="fontSize1-2vw fontRoboLight">
                            Phòng khám đặc biệt chuyên về trị liệu giọng nói cho những người làm nghề liên quan đến giọng như phát thanh viên, ca sĩ, giáo viên.<br/>
                            Chuyên về điều trị chóng mặt, rối loạn thăng bằng, ù tai.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;