import Nav from "./Nav";
import '../styles/style.css';

const Layout = ( props) => {
    return (
        <div>
            <Nav/>
            { props.children }
        </div>

    );
}

export default Layout;