import Nav from "./Nav";
import Banner from "./Banner";
import css from "../styles/style.css";
import Head from 'next/head';

const Layout = ( props) => {
    return (
        <div>
            <Head>
                <meta charset="utf-8"/>
                { /* <!-- to fit mobile screen --> */ }
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
                
            </Head>
            <Nav/>
            <Banner />
            { props.children }
        </div>

    );
}

export default Layout;