import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Reason from "../components/Reason";
import Service from "../components/Service";
import DoctorTeam from "../components/DoctorTeam";
import FormReview from "../components/FormReview.js";
import News from "../components/News";
import Nav from '../components/Nav';

const Index = () => (
    <Layout title="Trang Chủ">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <Nav />
                <Banner/>
                <DoctorTeam/>
                <Service/>
                <Reason/>
                {/* <FormReview/> */}
                <News/>
            </div>
            <div className="col-md-1"></div>
        </div>
    </Layout>
);

export default Index;
