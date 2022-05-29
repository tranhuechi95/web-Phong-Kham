import WorkingHoursTable from "./WorkingHoursTable";

const Timeline = () => {
    return (
        <div>
            <div className="timelineContainer">
                <img src="../static/assets/template/images/timeline3.png" className="img-fluid"/>
                <p className="topRowMid fontSize-timeline-text text-left">Phòng khám chuyển về <strong>số 29, ngõ 41, phố Vũ Ngọc Phan, Đống Đa, Hà Nội.</strong>Phòng khám đã không ngừng phát triển, tăng mạnh cả về số lượng bác sĩ, chất lượng dịch vụ cũng như số lượng bệnh nhân khám mỗi ngày.</p>
                <p className="bottomRowLeft fontSize-timeline-text text-left">Được thành lập với quy mô ban đầu chỉ là một phòng khám nhỏ trên đường Giảng Võ, do chính <strong>PGS.TS.BS. Phạm Thị Bích Đào </strong>đứng khám và chẩn trị.</p>
                <p className="bottomRowRight fontSize-timeline-text text-left">Đến nay phòng khám đã trờ thành một địa chỉ đáng tin cậy trong việc chẩn đoán và điều trị các bệnh lý tai mũi họng ở người lớn và trẻ em.</p>
            </div>

            { /* <!-- Thời gian làm việc và đội ngũ bác sĩ --> */ }
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-5 colorDarkBlue bgGreen">
                        <h3 className="fontRoboBold fontSize2vw">THỜI GIAN LÀM VIỆC</h3>
                        <WorkingHoursTable />
                        <h4 className="fontRoboBold fontSize1-3vw pt-2">Khám tại nhà theo lịch đặt trước</h4>
                    </div>
                    <div className="col-md-6 p-5 colorGreen bgDarkBlue">
                        <h3 className="fontRoboBold fontSize2vw pb-3"><span className="colorWhite">Đội ngũ </span><span className="colorGreen">CHUYÊN GIA</span></h3>
                        <p className="fontRoboLight fontSize1-2vw">Đội ngũ bác sĩ tại phòng khám đến từ bệnh viện Đại học Y Hà Nội sẽ tận tình thăm khám và chẩn đoán với mong muốn nâng cao sức khoẻ và chất lượng cuộc sống tốt nhất cho bạn và gia đình.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;