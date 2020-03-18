import React from "react";
import Link from 'next/link';

const Nav = () => (
<div className="container-fluid mx-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="../static/assets/template/images/logo.png"/>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/">
                        <a className="nav-link">TRANG CHỦ<span class="sr-only">(current)</span></a>
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <Link href="/about">
                        <a className="nav-link" href="#">GIỚI THIỆU</a>
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#DichVu">DỊCH VỤ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#BacSiTeam">ĐỘI NGŨ BÁC SĨ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tintuc">TIN TỨC</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#formDatLich">ĐẶT LỊCH KHÁM-LIÊN HỆ</a>
                </li>
            </ul>
            
            { /*<!--<form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>--> */ }
        </div>            
    </nav>
</div>
);

export default Nav;