import Layout from "../components/Layout";
import AboutUs from "../components/aboutUs";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";

const About = () => {
    return (
        <Layout title="Giới thiệu phòng khám">
            <AboutUs />
            <Timeline />
            <Gallery />
        </Layout>
        
    )
};

export default About;