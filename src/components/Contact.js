import React from "react";
// Import FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebookF, faTwitter, faDribbble, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import '../components/Style/Contact.css';
function Contact() {
    return (
        <div className="contactM">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Contact
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-lg-5'>
                        <div className='entry-content'>
                            <h2>Get in touch with us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, conse ctetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accu msan sodales odio, id tempus velit ullamc.
                            </p>
                            <ul className="contact-social d-flex flex-wrap align-items-center">
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faPinterest}></FontAwesomeIcon></a>
                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faFacebookF}></FontAwesomeIcon></a>
                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faTwitter}></FontAwesomeIcon></a>
                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faDribbble}></FontAwesomeIcon></a>

                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faBehance}></FontAwesomeIcon></a>

                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faLinkedinIn}></FontAwesomeIcon></a>

                                </li>
                            </ul>
                            <ul className="contact-info p-0">
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faPhone}></FontAwesomeIcon></a>

                                    <span>+45 677 8993000 223</span>

                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faEnvelope}></FontAwesomeIcon></a>

                                    <span>office@template.com</span>

                                </li>
                                <li>
                                    <a href="#"><FontAwesomeIcon className='fa' icon={faMapMarker}></FontAwesomeIcon></a>

                                    <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 mb-5">
                        <form className="contact-form">
                            <input type="text" placeholder='Name'></input>
                            <input type="email" placeholder='Email'></input>
                            <textarea cols={6} rows={15} placeholder="Message"></textarea>
                            <span>
                                <input className="btnn gradient-bg" type="submit" value="Contact us"></input>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;