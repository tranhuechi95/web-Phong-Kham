const DoctorTeam = () => {

    const doctorImagePaths = [
        "../static/assets/template/images/BSDao.jpg",
        "../static/assets/template/images/dung.jpg",
        "../static/assets/template/images/linh.jpg",
        "../static/assets/template/images/phuong.jpg",
        "../static/assets/template/images/tam.jpg",
    ];

    const doctorNames = [
        "PGS. TS. BS. Phạm Thị Bích Đào",
        "BS. Phạm Anh Dũng",
        "BS. Nguyễn Đức Linh",
        "BS. Mai Thị Mai Phương",
        "BS. Trần Văn Tâm",
    ]

    const doctorDescriptions = [
        (
            <p className="doctorCardBack">
                <b>PGS. TS. BS. Phạm Thị Bích Đào</b><br/>
                <i>Bác sĩ nội trú khoá XX</i><br/>
                <i>Hơn 25 năm kinh nghiệm</i><br/>
                <b>1996</b> Nội trú bệnh viện, chuyên ngành Tai-Mũi-Họng<br/>
                <b>2011</b> Tiến sĩ chuyên ngành Tai-Mũi-Họng<br/>
                <b>2018</b> Được phong hàm Phó Giáo Sư Y Học<br/>
                <b>1999 - nay</b> Giảng viên bộ môn Tai-Mũi-Họng trường Đại học Y Hà Nội. Bác sĩ khám và điều trị tại bệnh viện Đại học Y Hà Nội<br/>
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <b>BS. Phạm Anh Dũng</b><br/>
                <b>Nơi công tác</b> Bệnh viện Việt Nam - Cuba
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <b>BS. Nguyễn Đức Linh</b><br/>
                <b>Nơi công tác</b> Bệnh viện Bạch Mai
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <b>BS. Mai Thị Mai Phương</b><br/>
                <b>Nơi công tác</b> Bệnh viện Saint-Paul
            </p>
        ),
        (
            <p className="doctorCardBack doctorPartialInfo">
                <b>BS. Trần Văn Tâm</b><br/>
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
                key={idx}
                className="col doctorCard"
                onClick={() => onCardClick(idx)}
            >
                <div className="doctorCardFront">
                    <img
                        className="doctorCardStyle"
                        src={path}
                    />
                    <h5 className="doctorCardText">
                        { doctorNames[idx] }
                    </h5>
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
