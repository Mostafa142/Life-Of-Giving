import React from 'react'
// Import FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarker, faHeart } from '@fortawesome/free-solid-svg-icons';
// Import Photos 
import wlogo from './Images/whitelogo.png';
// Import navlink 
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Start Footer  */}
            <footer className="site-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="footer-about">
                                    <h2><a href="#" className="footer-logo"><img src={wlogo} alt="Logo" /></a></h2>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo.</p>
                                    <ul className="d-flex flex-wrap align-items-center list-unstyled">
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faFacebookF} /></a></li>
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faInstagram} /></a></li>
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faTwitter} /></a></li>
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faLinkedinIn} /></a></li>
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faGithub} /></a></li>
                                        <li><a href="#"> <FontAwesomeIcon className='fa' icon={faYoutube} /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <h2>Useful Links</h2>
                                <ul className='list-unstyled'>
                                    <li><NavLink to="/">Privacy Polticy</NavLink></li>
                                    <li><NavLink to="/Contact">Become a Volunteer</NavLink></li>
                                    <li><NavLink to="/Contact">Donate</NavLink></li>
                                    <li><NavLink to="/">Testimonials</NavLink></li>
                                    <li><NavLink to="/Causes">Causes</NavLink></li>
                                    <li><NavLink to="Gallery">Gallery</NavLink></li>
                                    <li><NavLink to="News">News</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="footer-latest-news">
                                    <h2>Latest News</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <h3><a href="#">A new cause to help</a></h3>
                                            <div className="posted-date">March 12, 2012</div>
                                        </li>
                                        <li>
                                            <h3><a href="#">We love to help people</a></h3>
                                            <div className="posted-date">March 12, 2012</div>
                                        </li>
                                        <li>
                                            <h3><a href="#">The new ideas for helping</a></h3>
                                            <div className="posted-date">March 12, 2012</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="footer-contact">
                                    <h2>Contact</h2>
                                    <ul className='list-unstyled'>
                                        <li><FontAwesomeIcon icon={faPhone} /><span>+45 677 8993000 223</span></li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /><span>office@template.com</span></li>
                                        <li><FontAwesomeIcon icon={faMapMarker} /><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
                                    </ul>
                                </div>
                                <div className="subscribe-form">
                                    <form className="d-flex flex-wrap align-items-center">
                                        <input type="email" placeholder='Your Email' />
                                        <input type="submit" value={"send"} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="m-0 text-center">
                                    Copyright ©2021 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by Best Team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer  */}
        </>
    )
}
export default Footer;