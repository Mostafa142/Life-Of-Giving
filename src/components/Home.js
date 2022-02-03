// Import use state function 
import React, { useState } from 'react';
// Import Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Photos 
import whitehand from './Images/hand-white.png';
import grayhand from './Images/hand.png';
import heart from './Images/heart.png';
import whiteheart from './Images/whiteheart.png';
import heart$ from './Images/heart$.png';
import whiteheart$ from './Images/whiteheart$.png';
import welcomepic from './Images/welcome.jpg';
import event1 from './Images/event1.jpg';
import event2 from './Images/event2.jpg';
import event3 from './Images/event3.jpg';
import covercause from './Images/causescover.jpg';
import hands from './Images/4hamds.png';
import whand from './Images/whand.png';
import bird from './Images/bird.png';
// Importing Files 
import Slider from './Swiper';
import SwiperCards from './SwiperCards';
//code...
// .
// .
// .
// .
const Home = () => {
  return (
    <>
      <Slider />
      {/* Start Home Icons  */}
      <div className="home-page-icon-boxes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box active">
                <figure className="d-flex justify-content-center">
                  <img src={grayhand} alt="Shake hands" />
                  <img src={whitehand} alt="Shake hands" />
                </figure>
                <header className="entry-header">
                  <h3 className="entry-title">Become a Volunteer</h3>
                </header>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <figure className="d-flex justify-content-center">
                  <img src={heart} alt="Shake hands" />
                  <img src={whiteheart} alt="Shake hands" />
                </figure>
                <header className="entry-header">
                  <h3 className="entry-title">Dance & Music</h3>
                </header>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <figure className="d-flex justify-content-center">
                  <img src={heart$} alt="Shake hands" />
                  <img src={whiteheart$} alt="Shake hands" />
                </figure>
                <header className="entry-header">
                  <h3 className="entry-title">Online Conference</h3>
                </header>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Home Icons  */}
      {/* Start Welcome Page  */}
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
            <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
              <img src={welcomepic} alt="Welcome Photo" />
            </div>
          </div>
        </div>
      </div>
      {/* End Welcome Page  */}
      {/* Start Events page  */}
      <div className="events-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="upcoming-events">
                <div className="section-heading">
                  <h2 className="entry-title">Upcoming Events</h2>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0">
                    <img src={event1} alt="event 1" />
                  </figure>
                  <div className="event-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0"><a href="#">Fundraiser for Kids</a></h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2022</a>
                      </div>
                      <div className="cats-link">
                        <a href="#">Ball Room New York</a>
                      </div>
                    </header>
                    <div className="entry-content">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0">
                    <img src={event2} alt="event 1" />
                  </figure>
                  <div className="event-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2022</a>
                      </div>
                      <div className="cats-link">
                        <a href="#">Ball Room New York</a>
                      </div>
                    </header>
                    <div className="entry-content">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="event-wrap d-flex flex-wrap justify-content-between">
                  <figure className="m-0">
                    <img src={event3} alt="event 1" />
                  </figure>
                  <div className="event-content-wrap">
                    <header className="entry-header d-flex flex-wrap align-items-center">
                      <h3 className="entry-title w-100 m-0"><a href="#">Bring water to the childrens</a></h3>
                      <div className="posted-date">
                        <a href="#">Aug 25, 2022</a>
                      </div>
                      <div className="cats-link">
                        <a href="#">Ball Room New York</a>
                      </div>
                    </header>
                    <div className="entry-content">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.
                      </p>
                    </div>
                    <div className="entry-footer">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6"> 
              <div className="featured-cause">
                <div className="section-heading">
                  <h2 className="entry-title">Featured Cause</h2>
                </div>
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
            </div>
          </div>
        </div>
      </div>
      {/* End Events page  */}
      <SwiperCards />
      {/* Start page gaols */}
      <div className="goals-page">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="entry-title">We love to help all the children that have problems in the world.
                  After 15 years we have many goals achieved.</h2>
                <p className='mt-5'>Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.
                  Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="charity-goals d-flex flex-wrap justify-content-between">
                <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                  <div className="counter-box">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={hands} alt="4 Hands" />
                    </div>
                    <div className="d-flex justify-content-center align-items-baseline">
                      <div className="start-counter">120</div>
                      <div className="counter-k">k</div>
                    </div>
                    <h3 className="entry-title">Children helped</h3>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                  <div className="counter-box">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={whand} alt="Water Hand" />
                    </div>
                    <div className="d-flex justify-content-center align-items-baseline">
                      <div className="start-counter">79</div>
                      <div className="counter-k"></div>
                    </div>
                    <h3 className="entry-title">Water Wells</h3>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                  <div className="counter-box">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={bird} alt="Bird" />
                    </div>
                    <div className="d-flex justify-content-center align-items-baseline">
                      <div className="start-counter">253</div>
                      <div className="counter-k"></div>
                    </div>
                    <h3 className="entry-title">Volunteers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page goals  */}
    </>
  )
}
export default Home;