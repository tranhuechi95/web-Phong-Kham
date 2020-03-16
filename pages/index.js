import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';

const Index = () => {
    return  (
        <div>
            <Layout>
                Hello World!

            </Layout>
                
            
        </div>
    )
};

Index.getInitialProps = async () => {
    const data = await fetch()
};

export default Index;