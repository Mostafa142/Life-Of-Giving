import React from "react";
import image1 from './Images/1.webp';
import image5 from './Images/5.webp';
import image2 from './Images/2.webp';
import image3 from './Images/3.webp';
import image14 from './Images/14.webp';
import image9 from './Images/9.webp';
import image10 from './Images/10.webp';
import image11 from './Images/11.webp';
import image4 from './Images/4.webp';
import image13 from './Images/13.webp';
import image12 from './Images/12.webp';
import './Style/NewsM.css';
function News() {
    return (
        <div className="news">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>News</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="news-content">
                                <a href="#"
                                ><img src={image1} alt=""
                                    /></a>
                                <header
                                    className="
                  entry-header
                  d-flex
                  flex-wrap
                  justify-content-between
                  align-items-center
                "
                                >
                                    <div className="header-elements">
                                        <div className="posted-date">March 12, 2018</div>
                                        <h2 className="entry-title">
                                            <a href="#">Toys for Children Campaign</a>
                                        </h2>
                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="cat-links">in <a href="#">Causes</a></span>
                                            <span className="post-author"
                                            >by <a href="#">Tom Phillips</a></span
                                            >
                                            <span className="post-comments"
                                            ><a href="#">3 Comments</a></span
                                            >
                                        </div>
                                    </div>
                                    <div className="donate-icon">
                                        <a href="#"
                                        ><img
                                                src={image5}
                                                alt=""
                                            /></a>
                                    </div>
                                </header>
                                <div className="entry-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet,
                                        consectetur. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mauris tempus vestib ulum mauris quis
                                        aliquam. Integer accumsan sodales odio, id tempus velit
                                        ullamc.
                                    </p>
                                </div>
                                <footer className="entry-footer">
                                    <a href="#" className="btn gradient-bg">Read More</a>
                                </footer>
                            </div>
                            <div className="news-content">
                                <a href="#"
                                ><img src={image2} alt=""
                                    /></a>
                                <header
                                    className="
                  entry-header
                  d-flex
                  flex-wrap
                  justify-content-between
                  align-items-center
                "
                                >
                                    <div className="header-elements">
                                        <div className="posted-date">March 12, 2018</div>
                                        <h2 className="entry-title">
                                            <a href="#">Toys for Children Campaign</a>
                                        </h2>
                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="cat-links">in <a href="#">Causes</a></span>
                                            <span className="post-author"
                                            >by <a href="#">Tom Phillips</a></span
                                            >
                                            <span className="post-comments"
                                            ><a href="#">3 Comments</a></span
                                            >
                                        </div>
                                    </div>
                                    <div className="donate-icon">
                                        <a href="#"
                                        ><img
                                                src={image5}
                                                alt=""
                                            /></a>
                                    </div>
                                </header>
                                <div className="entry-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet,
                                        consectetur. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mauris tempus vestib ulum mauris quis
                                        aliquam. Integer accumsan sodales odio, id tempus velit
                                        ullamc.
                                    </p>
                                </div>
                                <footer className="entry-footer">
                                    <a href="#" className="btn gradient-bg">Read More</a>
                                </footer>
                            </div>
                            <div className="news-content">
                                <a href="#"
                                ><img src={image3} alt=""
                                    /></a>
                                <header
                                    className="
                  entry-header
                  d-flex
                  flex-wrap
                  justify-content-between
                  align-items-center
                "
                                >
                                    <div className="header-elements">
                                        <div className="posted-date">March 12, 2018</div>
                                        <h2 className="entry-title">
                                            <a href="#">Toys for Children Campaign</a>
                                        </h2>
                                        <div className="post-metas d-flex flex-wrap align-items-center">
                                            <span className="cat-links">in <a href="#">Causes</a></span>
                                            <span className="post-author"
                                            >by <a href="#">Tom Phillips</a></span
                                            >
                                            <span className="post-comments"
                                            ><a href="#">3 Comments</a></span
                                            >
                                        </div>
                                    </div>
                                    <div className="donate-icon">
                                        <a href="#"
                                        ><img
                                                src={image5}
                                                alt=""
                                            /></a>
                                    </div>
                                </header>
                                <div className="entry-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet,
                                        consectetur. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mauris tempus vestib ulum mauris quis
                                        aliquam. Integer accumsan sodales odio, id tempus velit
                                        ullamc.
                                    </p>
                                </div>
                                <footer className="entry-footer">
                                    <a href="#" className="btn gradient-bg">Read More</a>
                                </footer>
                            </div>
                            <ul className="pagination d-flex flex-wrap align-items-center p-0">
                                <li className="active"><a href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="sidebar">
                                <div className="search-widget">
                                    <form className="flex flex-wrap align-items-center">
                                        <input type="search" placeholder="Search..." />
                                        <button
                                            type="submit"
                                            className="flex justify-content-center align-items-center"
                                        >
                                            GO
                                        </button>
                                    </form>
                                </div>
                                <div className="popular-posts">
                                    <h2>Popular Posts</h2>
                                    <ul className="p-0">
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img src={image14}
                                                    alt=""
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">A new cause to help</a>
                                                </h3>
                                                <div className="posted-date">MArch 12, 2018</div>
                                            </div>
                                        </li>
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img
                                                        src={image9}
                                                        alt=""
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">We love to help people</a>
                                                </h3>
                                                <div className="posted-date">MArch 10, 2018</div>
                                            </div>
                                        </li>
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img
                                                        src={image10}
                                                        alt=""
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">The new ideas for helping</a>
                                                </h3>
                                                <div className="posted-date">MArch 09, 2018</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="upcoming-events">
                                    <h2>Upcoming Events</h2>
                                    <ul className="p-0">
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img
                                                        src={image11}
                                                        alt=""
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title">
                                                    <a href="#">Fundraiser for Kids</a>
                                                </h3>
                                                <div
                                                    className="post-metas d-flex flex-wrap align-items-center"
                                                >
                                                    <span className="posted-date"
                                                    ><a href="#">Aug 25, 2018</a></span
                                                    >
                                                    <span className="event-location"
                                                    ><a href="#">Ball Room New York</a></span
                                                    >
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img
                                                        src={image12}
                                                        alt=""
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title"><a href="#">The childrens</a></h3>
                                                <div
                                                    className="post-metas d-flex flex-wrap align-items-center"
                                                >
                                                    <span className="posted-date"
                                                    ><a href="#">Aug 25, 2018</a></span
                                                    >
                                                    <span className="event-location"
                                                    ><a href="#">Ball Room New York</a></span
                                                    >
                                                </div>
                                                <p>
                                                    Consectetur adipiscing elit. Mauris tempus vestib ulum.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="
                      d-flex
                      flex-wrap
                      justify-content-between
                      align-items-center
                    "
                                        >
                                            <figure>
                                                <a href="#"
                                                ><img
                                                        src={image13}
                                                    /></a>
                                            </figure>
                                            <div className="entry-content">
                                                <h3 className="entry-title"><a href="#">Bring water </a></h3>
                                                <div
                                                    className="post-metas d-flex flex-wrap align-items-center"
                                                >
                                                    <span className="posted-date"
                                                    ><a href="#">Aug 25, 2018</a></span
                                                    >
                                                    <span className="event-location"
                                                    ><a href="#">Ball Room New York</a></span
                                                    >
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="featured-cause">
                                    <h2>Featured Causes</h2>
                                    <div className="cause-wrap">
                                        <figure className="m-0 position-relative">
                                            <a href="#"
                                            ><img
                                                    src={image4}
                                                    alt=""
                                                /></a>
                                        </figure>
                                        <div className="cause-content-wrap">
                                            <header
                                                className="entry-header d-flex flex-wrap align-items-center"
                                            >
                                                <h3 className="entry-title w-100 m-0">
                                                    <a href="#">Bring water to the childrens</a>
                                                </h3>
                                            </header>
                                            <div className="entry-content">
                                                <p className="m-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Mauris tempus vestib ulum mauris.
                                                </p>
                                            </div>
                                            <div className="fund-raised w-100">
                                                <div className="fund-raised-bar-3 barfiller">
                                                    <div className="tipWrap">
                                                        <span className="tip">83%</span>
                                                    </div>
                                                    <span className="fill" data-percentage="83"></span>
                                                </div>
                                                <div
                                                    className="
                          fund-raised-details
                          d-flex
                          flex-wrap
                          justify-content-between
                          align-items-center
                        "
                                                >
                                                    <div className="fund-raised-total mt-4">
                                                        Raised: $56 880
                                                    </div>
                                                    <div className="fund-raised-goal mt-4">Goal: $70 000</div>
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
        </div>
    );
}

export default News;