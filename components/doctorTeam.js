const DoctorTeam = () => {
    return (
    <div>
        <div id="BacSiTeam" className="container-fluid text-center pt-5">
            <p className="fontSansation fontSize3vw">
                <span className="colorBlue">ĐỘI NGŨ </span>
                <span className="colorGreen">BÁC SĨ</span>
            </p> 
            
            <div id="accordion">
                <div className="container-fluid text-center pb-5 accordion-container">
                    <div className="card-deck fontSize1vw">
                        <a data-toggle="collapse" href={`#collapse1`}>
                            <div className="card card-style m-0">
                                <img className="card-img-top" src="../static/assets/template/images/BSDao.jpg" alt="PGS.TS.BS Phạm Thị Bích Đào"/>
                                <div className="card-body card-body-DichVu mt-1">
                                    <h5 className="card-text colorBlue fontSize1-3vw fontRoboBold">PGS.TS.BS<br/>PHẠM THỊ BÍCH ĐÀO</h5>
                                </div>
                            </div>
                        </a>
                        
                        <div id="collapse1" className="panel-collapse collapse" data-parent="#accordion">
                            <div className="card">
                                <div className="card-body">                                
                                    <p className="card-title fontRoboBold fontSize1-5vw">Hơn 20 năm kinh nghiệm</p>
                                    <div className="card-text fontRoboLight colorGrey fontSize1-5vw">
                                        <li>1996 Nội trú Bệnh viện - chuyên ngành Tai Mũi Họng</li>
                                        <li>2011 Tiến sĩ chuyên ngành Tai Mũi Họng</li>
                                        <li>2018 Được phong hàn Phó Giáo Sư y học</li>
                                        <li>1999 - nay, Giảng viên bộ môn TMH trường đại học Y Hà Nội - Bác sĩ khám và điều trị tại bệnh viện đại học Y Hà Nội</li>               
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <a data-toggle="collapse" href={`#collapse2`}>
                            <div className="card card-style m-0">
                                <img className="card-img-top" src="../static/assets/template/images/dung.jpg" alt="Bác sĩ Dũng"/>
                                <div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-3vw fontRoboBold">BÁC SĨ DŨNG</h5>
                                </div>
                            </div>
                        </a>
        
                        <div id="collapse2" className="card-collapse collapse" data-parent="#accordion">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fontRoboLight colorGrey">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</h5>
                                </div>
                            </div>
                        </div>
            

                        
                        <a data-toggle="collapse" href={`#collapse3`}>
                            <div className="card card-style m-0">
                                <img className="card-img-top card-img-size" src="../static/assets/template/images/linh.jpg" alt="bac si linh"/>
                                <div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-3vw fontRoboBold">BÁC SĨ LINH</h5>
                                </div>
                            </div>
                        </a>
                        <div id="collapse3" className="card-collapse collapse" data-parent="#accordion">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fontRoboLight colorGrey">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</h5>
                                </div>
                            </div>
                        </div>
                    
                    
                        <a data-toggle="collapse" href={`#collapse4`}>
                            <div className="card card-style m-0">
                                <img className="card-img-top card-img-size" src="../static/assets/template/images/phuong.jpg" alt="Bác sĩ Phương"/>
                                <div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-3vw fontRoboBold">BÁC SĨ PHƯƠNG</h5>
                                </div>
                            </div>
                        </a>
                        <div id="collapse4" className="card-collapse collapse" data-parent="#accordion">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fontRoboLight colorGrey">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</h5>
                                </div>
                            </div>
                        </div>

                        <a data-toggle="collapse" href={`#collapse5`}>
                            <div className="card card-style m-0">
                                <img className="card-img-top card-img-size" src="../static/assets/template/images/tam.jpg" alt="Bác sĩ Tâm"/>
                                <div className="card-body card-body-DichVu">
                                    <h5 className="card-text colorBlue fontSize1-3vw fontRoboBold">BÁC SĨ TÂM</h5>
                                </div>
                            </div>
                        </a>
                        <div id="collapse5" className="card-collapse collapse" data-parent="#accordion">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fontRoboLight colorGrey">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</h5>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default DoctorTeam;
