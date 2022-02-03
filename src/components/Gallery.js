import { Swiper, SwiperSlide } from "swiper/react";
import event1 from './Images/event1.jpg';
import event2 from './Images/event2.jpg';
import event3 from './Images/event3.jpg';
import cause1 from './Images/cause1.jpg';
import cause2 from './Images/cause2.jpg';
import cause3 from './Images/cause3.jpg';
import hands from './Images/4hamds.png';
import whand from './Images/whand.png';
import bird from './Images/bird.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import '../components/Style/GalleryStyle.css';
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);


const Gallery = () => {

    return (
        <>
            {/* //Start Gallery  */}
            <div className="gallery-page">
                <div className="portfolio">
                    <div className="page-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>
                                        Portfolio
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5 ">
                    <h1 className="text-center my-5">Our Activities</h1>
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 200,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper">
                        <SwiperSlide><img src={event1} /></SwiperSlide>
                        <SwiperSlide><img src={event2} /></SwiperSlide>
                        <SwiperSlide><img src={event3} /></SwiperSlide>
                        <SwiperSlide><img src={cause1} /></SwiperSlide>
                        <SwiperSlide><img src={cause2} /></SwiperSlide>
                        <SwiperSlide><img src={cause3} /></SwiperSlide>
                        <SwiperSlide><img src={event1} /></SwiperSlide>
                        <SwiperSlide><img src={event2} /></SwiperSlide>
                        <SwiperSlide><img src={event3} /></SwiperSlide>
                        <SwiperSlide><img src={event1} /></SwiperSlide>
                    </Swiper>
                </div>
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
            </div>
            {/* End Gallery  */}

        </>
    )
}

export default Gallery
