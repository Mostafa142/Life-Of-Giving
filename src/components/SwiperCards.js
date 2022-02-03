import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Style/SwiperCardsStyle.css";
// Import Photos 
import cause1 from './Images/cause1.jpg';
import cause2 from './Images/cause2.jpg';
import cause3 from './Images/cause3.jpg';
//import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);


const SwiperCards = () => {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + '</span>';
        }
    }

    return (
        <>

            <div className="page-causes">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2 className="entry-title">Our Causes</h2>
                            </div>
                        </div>
                    </div>
                    <Swiper slidesPerView={3} spaceBetween={0} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={pagination}
                        navigation={true} className="mySwiper row">
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                        <SwiperSlide className='col-12 col-md-6 col-lg-6 col-xl-4'>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default SwiperCards;
