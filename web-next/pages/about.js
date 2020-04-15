import Layout from "../components/Layout";
import AboutUs from "../components/aboutUs";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";

const About = () => {
    return (
        <Layout title="Giới thiệu phòng khám">
            <div className="row">
                <div className="col-md-10">
                    <AboutUs />
                    <Timeline />
                    <Gallery />
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </Layout>
        
    )
};

export default About;