import topics from '../static/TopicsDefinition.json'
import Link from './ActiveLink'
import logo from '../static/assets/template/images/logo.jpg'

const Nav = () => {
    return (
    <div className="container-fluid mx-5">
        <nav className="navbar navbar-expand-lg navbar-light bgGray fixed-top">
            <img src={logo} style={{width: "5vw"}}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse bgGray" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/" activeClassName="active">
                            {/* <span className="sr-only">(current)</span> */}
                            <a className="nav-link fontSize1-2vw">TRANG CHỦ</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                            <a className="nav-link fontSize1-2vw">GIỚI THIỆU</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/#DichVu`} activeClassName="active">
                            <a className="nav-link fontSize1-2vw">DỊCH VỤ</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={`/#BacSiTeam`} activeClassName="active">
                            <a className="nav-link fontSize1-2vw">ĐỘI NGŨ BÁC SĨ</a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href={`/#formDatLich`} activeClassName='active'>
                            <a className="nav-link fontSize1-2vw">ĐẶT LỊCH KHÁM-LIÊN HỆ</a>
                        </Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="dropdown show">
                            <a className="btn btn-success dropdown-toggle" role="button" id="dropdownNews" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TIN TỨC</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNews">
                            {	topics.map(topic => (
                                <Link href="/topics/[topic]" as={`/topics/${topic.routeName}`} key={topic.id}>
                                    <a className="nav-link dropdown-item fontRoboLight fontSize1vw">{topic.displayName}</a>
                                </Link>
                                    ))}
                            </div>
                        </div>
                    </li>
                </ul>
                { /* <!--<form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>--> */ }
            </div>
        </nav>

    </div>
    )

};

export default Nav;