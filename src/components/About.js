import React from "react";
import '../components/Style/AboutA.css';
import welcomepic from './Images/welcome.jpg';
import test1 from './Images/test1.jpg';
import test2 from './Images/test2.jpg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function About() {
    return (
        <div className="aboutS">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                About Us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <div className="welcome-content">
                                <header className="entry-header">
                                    <h2 className="entry-title">Welcome to our Charity</h2>
                                </header>
                                <div className="entry-content mt-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.
                                        Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus.
                                        Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.</p>
                                </div>
                                <div className="entry-footer mt-5">
                                    <a href="#" className="btnn gradient-bg mr-2">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 order-1 order-lg-2">
                            <img src={welcomepic} alt="Welcome Photo" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-stats">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="circular-progress-bar">
                                <div className="circle" id="loader_1">
                                    <CircularProgressbar value={83} text={`${83}%`} strokeWidth={2} styles={buildStyles({ trailColor: '#333' })} />;
                                </div>
                                <h3 className="entry-title">Hard Work</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="circular-progress-bar">
                                <div className="circle" id="loader_2">
                                    <CircularProgressbar value={100} text={`${100}%`} strokeWidth={2} styles={buildStyles({ trailColor: '#333' })} />;
                                </div>
                                <h3 className="entry-title">Pure Love</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="circular-progress-bar">
                                <div className="circle" id="loader_3">
                                    <CircularProgressbar value={75} text={`${75}%`} strokeWidth={2} styles={buildStyles({ trailColor: '#333' })} />;
                                </div>
                                <h3 className="entry-title">Smart Ideas</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="circular-progress-bar">
                                <div className="circle" id="loader_4">
                                    <CircularProgressbar value={65} text={`${65}%`} strokeWidth={2} styles={buildStyles({ trailColor: '#333' })} />;
                                </div>
                                <h3 className="entry-title">Good Decisions</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-12 col-md-6 col-lg-5">
                            <div className="testimonial-cont">
                                <div className="entry-content">
                                    <p>We love to help all the children that have problems in the world.
                                        After 15 years we have many goals achieved.</p>
                                </div>
                                <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                    <img src={test1} alt="" />
                                    <h4>Maria Williams, <span>Volunteer</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 offset-lg-2 col-lg-5">
                            <div className="testimonial-cont">
                                <div className="entry-content">
                                    <p>We love to help all the children that have problems in the world.
                                        After 15 years we have many goals achieved.</p>
                                </div>
                                <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                    <img src={test2} alt="" />
                                    <h4>Cristian James, <span>Volunteer</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="help-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <h2>Help us so we can help others</h2>
                            <a className="btnn orange-border" href="#">Donate now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;