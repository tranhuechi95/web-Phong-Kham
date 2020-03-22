import posts from '../static/topic.json'
import Link from './ActiveLink'

const Nav = () => {
    const firstTopic = posts[0];
    return (
    <div className="container-fluid mx-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            
            <img src="../static/assets/template/images/logo.png" style={{width: "10vw"}}/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/" activeClassName="active">
                            {/* <span className="sr-only">(current)</span> */}
                            <a className="nav-link">TRANG CHỦ</a>
                        </Link>
                       
                    </li>
                    <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                            <a className="nav-link">GIỚI THIỆU</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`/#DichVu`} activeClassName="active">
                            <a className="nav-link">DỊCH VỤ</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`/#BacSiTeam`} activeClassName="active">
                            <a className="nav-link">ĐỘI NGŨ BÁC SĨ</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href="/posts/[postName]" as={`/posts/${firstTopic.postName}`} activeClassName='active'>
                            <a className="nav-link">TIN TỨC</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`/#formDatLich`} activeClassName='active'>
                            <a className="nav-link">ĐẶT LỊCH KHÁM-LIÊN HỆ</a>
                        </Link>
                        
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