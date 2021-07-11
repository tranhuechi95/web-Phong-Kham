import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";

const About = () => {
    return (
        <Layout title="Giới thiệu phòng khám">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <AboutUs />
                    <Timeline />
                    <Gallery />
                </div>
                <div className="col-md-1"></div>
            </div>
        </Layout>
    )
};

export default About;