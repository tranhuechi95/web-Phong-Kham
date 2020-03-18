const Reason = () => {
    return (
        <div>
            <div className="container-fluid mt-5 text-center">    
                <p className="fontSansation">
                    <span className="colorGreen">VÌ SAO NÊN CHỌN </span>
                    <span className="colorBlue">CHÚNG TÔI</span>
                </p>
                <style jsx>{`
                    p { font-size: 3vw; }
                `}</style>
            </div>

            <div className="container-fluid m-5">
                <div className="row mx-3 my-3 text-center fontSize1vw">
                    <div className="col-md-3 p-2">
                        <img src="../static/assets/template/images/h1.png" alt="Card image cap"/>
                    </div>
                    <div className="col-md-3 p-2">
                        <img src="../static/assets/template/images/h2.png" alt="Card image cap"/>
                    </div>
                    <div className="col-md-3 p-2">
                        <img src="../static/assets/template/images/h3.png" alt="Card image cap"/>
                    </div>
                    <div className="col-md-3 p-2">
                        <img src="../static/assets/template/images/h4.png" alt="Card image cap"/>
                    </div>
                    
                    <div className="col-md-3">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;