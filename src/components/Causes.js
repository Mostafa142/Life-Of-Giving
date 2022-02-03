import React from "react";
import './Style/Causes.css';
// Import Photos 
import cause1 from './Images/cause1.jpg';
import cause2 from './Images/cause2.jpg';
import cause3 from './Images/cause3.jpg';
import cause4 from './Images/cause4.jpg';
import cause5 from './Images/cause5.jpg';
import cause6 from './Images/cause6.jpg';
import highlight from './Images/higjhlight.jpg';
import covercause from './Images/causescover.jpg';
import covercause2 from './Images/causesbg2.jpg'
function Causes() {
    return (
        <div className="causes">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Our Causes
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-cause">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="entry-title">Featured Cause</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="cause-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={covercause} alt="Cover Cause" />
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Fundraiser for Kids</a></h3>
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.
                                            Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                    <div className="entry-footer mt-5">
                                        <a href="#" className='btnn gradient-bg mr-2'>Donate Now</a>
                                    </div>
                                </div>
                                <div className="fund-raised w-100">
                                    <div className="featured-fund-raised-bar barfiller">
                                        <div className="tipWrap">
                                            <span className="tip" >83%</span>
                                        </div>
                                        <span className="fill" data-percentage="83" ></span>
                                    </div>
                                    <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                        <div className="fund-raised-total mt-4">
                                            Raised: $56 880
                                        </div>
                                        <div className="fund-raised-goal mt-4">
                                            Goal: $70 000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="cause-wrap d-flex flex-wrap justify-content-between">
                                <figure className="m-0">
                                    <img src={covercause2} alt="Cover Cause" />
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Fundraiser for Kids</a></h3>
                                        <div className="posted-date">
                                            <a href="#">Aug 25, 2018 </a>
                                        </div>
                                        <div className="cats-links">
                                            <a href="#">Ball Room New York</a>
                                        </div>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.
                                            Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                    <div className="entry-footer mt-5">
                                        <a href="#" className='btnn gradient-bg mr-2'>Donate Now</a>
                                    </div>
                                </div>
                                <div className="fund-raised w-100">
                                    <div className="featured-fund-raised-bar barfiller">
                                        <div className="tipWrap">
                                            <span className="tip" >83%</span>
                                        </div>
                                        <span className="fill" data-percentage="83" ></span>
                                    </div>
                                    <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                        <div className="fund-raised-total mt-4">
                                            Raised: $56 880
                                        </div>
                                        <div className="fund-raised-goal mt-4">
                                            Goal: $70 000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-causes pt-0">
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause1} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Water to Children</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >83%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause2} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Education For All</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >70%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause3} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Water to Children</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >83%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='highlighted-cause '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-7 order-2 order-lg-1'>
                            <div className='section-heading'>
                                <h2 className='entry-title'>
                                    We love to help all the children that have problems in the world. After 15 years we have many goals achieved.
                                </h2>
                            </div>
                            <div className='entry-content'>

                                <p> Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet.</p>

                            </div>
                            <div className='fund-raised w-100 mt-5'>
                                <div className='featured-fund-raised-bar-1 barfiller'>
                                    <div className='tipwrap' >
                                        <span class="tip" >83%</span>
                                    </div>
                                    <span class="fill" data-percentage="83"></span>
                                </div>
                                <div className='fund-raised-details d-flex flex-wrap justify-content-between align-items-center'>
                                    <div className='fund-raised-total mt-4'>Raised:$56 880</div>
                                    <div className='fund-raised-goal mt-4'>Goal: $70 000</div>
                                </div>
                            </div>
                            <div className='entry-footer mt-5'>
                                <a href="#" className='btnn gradient-bg'>Donate Now</a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 order-1 order-lg-2'>
                            <img src={highlight}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-causes">
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause4} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Water to Children</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >83%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause5} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Education For All</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >70%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                            <div className="cause-wrap">
                                <figure className="m-0">
                                    <img src={cause6} alt="Cause 1" />
                                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                                        <a href="#" className='btnn gradient-bg mr-2'> Donate Now</a>
                                    </div>
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0"><a href="#">Water to Children</a></h3>
                                    </header>
                                    <div className="entry-content">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mauris tempus vestib ulum mauris.</p>
                                    </div>
                                    <div className="fund-raised w-100">
                                        <div className="featured-fund-raised-bar barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" >83%</span>
                                            </div>
                                            <span className="fill" data-percentage="83" ></span>
                                        </div>
                                        <div className="fund-raised-details d-flex justify-content-between align-items-center">
                                            <div className="fund-raised-total mt-4">
                                                Raised: $56 880
                                            </div>
                                            <div className="fund-raised-goal mt-4">
                                                Goal: $70 000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Causes;