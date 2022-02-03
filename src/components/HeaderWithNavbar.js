// Import use state function 
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// Import Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Photos 
import logo from './Images/logo.png';
const HeaderWithNavbar = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);
    };
    return (
        <>
            {/* Start header */}
            {/* Start Top Header  */}
            <header className='site-header '>
                <div className='top-header'>
                    <div className="container">
                        <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                            <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                                <div className="header-email">MAIL:<a href="#"> contact@ourcharity.com</a>
                                </div>
                                <div className="header-text">
                                    <p>PHONE:
                                        <span> +12 3456 789 101 / +5678 1234</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center x">
                                <div className="donate-btn">
                                    <NavLink to="/Contact">Donate Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start navbar  */}
                <nav className='nav-bar'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="logo-img d-flex align-items-center">
                                    <NavLink className='d-block' to="/">
                                        <img className='d-block' src={logo} alt="logo" />
                                    </NavLink>
                                </div>
                                <nav className={toggle ? "site-navigation d-flex justify-content-end align-items-center show" : "site-navigation d-flex justify-content-end align-items-center"}>
                                    <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center list-unstyled">
                                        <li className="current-menu-item"><NavLink to="/" >Home</NavLink></li>
                                        <li><NavLink to="/About">About us</NavLink></li>
                                        <li><NavLink to="/Causes">Causes</NavLink></li>
                                        <li><NavLink to="/Gallery">Gallery</NavLink></li>
                                        <li><NavLink to="/News">News</NavLink></li>
                                        <li><NavLink to="/Contact">Contact</NavLink></li>
                                    </ul>
                                </nav>
                                <div onClick={toggleHandler} className={toggle ? "hamburger-menu d-lg-none open" : "hamburger-menu d-lg-none"}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* End navbar  */}
            </header>
            {/* End Top Header  */}

            {/* End header */}
        </>
    )
}
export default HeaderWithNavbar;