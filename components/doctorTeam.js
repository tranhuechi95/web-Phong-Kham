const DoctorTeam = () => {

    const doctorImagePaths = [
        "../static/assets/template/images/BSDao.jpg",
        "../static/assets/template/images/dung.jpg",
        "../static/assets/template/images/linh.jpg",
        "../static/assets/template/images/phuong.jpg",
        "../static/assets/template/images/tam.jpg",
    ];

    const doctorDescriptions = [
        (
            <p className="doctorCardBack">
                <h5>PGS. TS. BS. Phạm Thị Bích Đào</h5>
                <i>Hơn 20 năm kinh nghiệm</i><br/>
                <b>1996</b> Nội trú bệnh viện, chuyên ngành Tai-Mũi-Họng<br/>
                <b>2011</b> Tiến sĩ chuyên ngành Tai-Mũi-Họng<br/>
                <b>2018</b> Được phong hàm Phó Giáo Sư Y Học<br/>
                <b>1999 - nay</b> Giảng viên bộ môn Tai-Mũi-Họng trường Đại học Y Hà Nội. Bác sĩ khám và điều trị tại bệnh viện Đại học Y Hà Nội<br/>
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <h5>BS. Phạm Anh Dũng</h5>
                <b>Nơi công tác</b> Bệnh viện Việt Nam - Cuba
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <h5>BS. Nguyễn Đức Linh</h5>
                <b>Nơi công tác</b> Bệnh viện Bạch Mai
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <h5>BS. Mai Thị Mai Phương</h5>
                <b>Nơi công tác</b> Bệnh viện Saint-Paul
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <h5>BS. Trần Văn Tâm</h5>
                <b>Nơi công tác</b> Bệnh viện Đại học Y Hà Nội
            </p>
        ),
    ];

    const onCardClick = (idx) => {
        var elem = document.getElementById("doctorCard" + idx);
        if (elem.classList.contains("doctorCardClicked")) {
            elem.classList.remove("doctorCardClicked");
        } else {
            elem.classList.add("doctorCardClicked");
        }
    };

    const doctorCardDivs = doctorImagePaths.map(
        (path, idx) => (
            <div
                id={"doctorCard" + idx}
                className="col doctorCard"
                onClick={() => onCardClick(idx)}
            >
                <div className="doctorCardFront">
                    <img
                        className="card-style"
                        src={path}
                    />
                </div>
                { doctorDescriptions[idx] }
            </div>
        )
    );

    return (
    <div>
        <div id="BacSiTeam" className="container-fluid text-center pt-5">
            <p className="fontSansation fontSize3vw">
                <span className="colorBlue">ĐỘI NGŨ </span>
                <span className="colorGreen">BÁC SĨ</span>
            </p> 
            {/* div with doctor pictures - show */}
            <div className="row">
                { doctorCardDivs }
            </div>
        </div>
    </div>
    );
}

export default DoctorTeam;
