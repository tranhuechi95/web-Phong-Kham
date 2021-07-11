const Reason = () => {
    return (
        <div>
            <div className="container-fluid mt-5 text-center">
                <p className="fontSansation">
                    <span className="colorGreen">VÌ SAO NÊN CHỌN </span>
                    <span className="colorBlue">CHÚNG TÔI</span>
                </p>
                <style jsx>{`
                    p { font-size: max(3vw, 25px); }
                `}</style>
            </div>

            <div className="container-fluid">
                <div className="row m-3 text-center fontSize1vw pb-5">
                    <div className="col-md-3 p-2">
                        <div className="card-img-container card-container">
                            <img src="../static/assets/template/images/h1.png" alt="Card image cap"/>
                        </div>
                        <div>
                            <p className="fontSize1-3vw fontRoboBold">BÁC SĨ CHUYÊN MÔN CAO</p>
                            <p className="fontSize1-3vw fontRoboLight">Đội ngũ bác sĩ giỏi chuyên môn, có nhiều năm kinh nghiệm tại bệnh viện Tai Mũi Họng TW.</p>
                        </div>

                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card-img-container card-container">
                            <img src="../static/assets/template/images/h2.png" alt="Card image cap"/>
                        </div>
                        <div>
                            <p className="fontSize1-3vw fontRoboBold">NIỀM TIN VÀ LÝ TƯỞNG</p>
                            <p className="fontSize1-3vw fontRoboLight">Khách hàng là trọng tâm, chúng tôi luôn sẵn sàng chăm sóc bạn ân cần như chính thành viên trong gia đình.</p>
                        </div>

                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card-img-container card-container">
                            <img src="../static/assets/template/images/h3.png" alt="Card image cap"/>
                        </div>
                        <div>
                            <p className="fontSize1-3vw fontRoboBold">TIÊU CHUẨN QUỐC TẾ</p>
                            <p className="fontSize1-3vw fontRoboLight">Phòng khám đáp ứng mọi tiêu chí về thiết kế, bố trí trang thiết bị theo tiêu chuẩn quốc tế.</p>
                        </div>

                    </div>
                    <div className="col-md-3 p-2">
                        <div className="card-img-container card-container">
                            <img src="../static/assets/template/images/h4.png" alt="Card image cap"/>
                        </div>
                        <div>
                            <p className="fontSize1-3vw fontRoboBold">CHI PHÍ HỢP LÝ</p>
                            <p className="fontSize1-3vw fontRoboLight">100% chi phí của chúng tôi đều công khai minh bạch và được nhập hệ thống cẩn thận.</p>
                        </div>
                    </div>

                    {/* <div className="col-md-3">
                        <p className="fontSize1-2vw fontRoboBold">BÁC SĨ CHUYÊN MÔN CAO</p>
                        <p className="fontRoboLight">Đội ngũ bác sĩ giỏi chuyên môn, có nhiều năm kinh nghiệm tại bệnh viện Tai Mũi Họng TW.</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fontSize1-2vw fontRoboBold">NIỀM TIN VÀ LÝ TƯỞNG</p>
                        <p className="fontRoboLight">Khách hàng là trọng tâm, chúng tôi luôn sẵn sàng chăm sóc bạn ân cần như chính thành viên trong gia đình.</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fontSize1-2vw fontRoboBold">TIÊU CHUẨN QUỐC TẾ</p>
                        <p className="fontRoboLight">Phòng khám đáp ứng mọi tiêu chí về thiết kế, bố trí trang thiết bị theo tiêu chuẩn quốc tế.</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fontSize1-2vw fontRoboBold">CHI PHÍ HỢP LÝ</p>
                        <p className="fontRoboLight">100% chi phí của chúng tôi đều công khai minh bạch và được nhập hệ thống cẩn thận.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Reason;