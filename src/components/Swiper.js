import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Style/SwiperStyle.css";

import slider1 from './Images/UNI313299_1_0.jpg';
import slider2 from './Images/UN0318207.jpg';
import slider3 from './Images/UNI310481.jpg';

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
// install Swiper modules
SwiperCore.use([Navigation]);

export default function Slider() {
    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
        }
    }
    return (
        <>
            <div className="swiper-container hero-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide hero-content-wrap">

                        <Swiper pagination={pagination} navigation={true} className="mySwiper">
                            <SwiperSlide><img src={slider2} alt="" />
                                <div className="hero-content-overlay position-absolute w-100 h-100">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                                <header className="entry-header">
                                                    <h1>Donate</h1>
                                                    <h4>4 a better world</h4>
                                                </header>
                                                <div className="entry-contnet mt-4">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
                                                        quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                                </div>
                                                <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                                    <a href="#" className="btnn gradient-bg mr-2">Donate Now</a>
                                                    <a href="#" className="btnn orange-border">Read More</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide><img src={slider3} alt="" />
                                <div className="hero-content-overlay position-absolute w-100 h-100">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                                <header className="entry-header">
                                                    <h1>Donate</h1>
                                                    <h4>4 a better world</h4>
                                                </header>
                                                <div className="entry-contnet mt-4">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
                                                        quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                                </div>
                                                <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                                    <a href="#" className="btnn gradient-bg mr-2">Donate Now</a>
                                                    <a href="#" className="btnn orange-border">Read More</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide><img src={slider1} alt="" />
                                <div className="hero-content-overlay position-absolute w-100 h-100">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                                <header className="entry-header">
                                                    <h1>Donate</h1>
                                                    <h4>4 a better world</h4>
                                                </header>
                                                <div className="entry-contnet mt-4">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris
                                                        quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                                </div>
                                                <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                                    <a href="#" className="btnn gradient-bg mr-2">Donate Now</a>
                                                    <a href="#" className="btnn orange-border">Read More</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}