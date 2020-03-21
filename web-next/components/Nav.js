import Link from 'next/link';

const Nav = () => {
    return (
        <div className="container-fluid mx-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <img src="../static/assets/template/images/logo.png" style={{width: "10vw"}}/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link">TRANG CHỦ<span className="sr-only">(current)</span></a>
                        </Link>
                       
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">GIỚI THIỆU</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`#DichVu`}>
                            <a className="nav-link">DỊCH VỤ</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`#BacSiTeam`}>
                            <a className="nav-link">ĐỘI NGŨ BÁC SĨ</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`#tintuc`}>
                            <a className="nav-link">TIN TỨC</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href={`#formDatLich`}>
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