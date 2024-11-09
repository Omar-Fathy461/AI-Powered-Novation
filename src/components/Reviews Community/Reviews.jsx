import { useRef } from 'react';
import blogData from '../../views/blog/blogsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//style
import './reviews.scss'

const Reviews = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const breakpoints = {
        200: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
    };

    return (
        <div className="our_community">
            <div className="container">
                <div className="content d-flex flex-wrap">
                    <div className="community_text col-lg-6">
                        <h2>Our Community With User Reviews</h2>
                        <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                        <div className="angels">
                            <span ref={prevRef} className="slider_prev"><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span ref={nextRef} className=" slider_next"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </div>
                    </div>
                    <div className="community_cards slider_items col-lg-6 col-12 ">
                        <Swiper
                            // install Swiper modules
                            // className='d-flex'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            breakpoints={breakpoints}
                            slidesPerView={1}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                        >
                            {
                                blogData.map((el) => {
                                    return (
                                        <SwiperSlide key={el.id}>
                                            <div className="community_card  slider_item">
                                                <div className="head">
                                                    <div className="card_info">
                                                        <img src={el.avatar} alt="" />
                                                        <div className="name">
                                                            <h3>{el.name}</h3>
                                                            <p>CONTENT STRATEGIST</p>
                                                        </div>
                                                    </div>
                                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                                </div>
                                                <div className="card_content">
                                                    <p>“ The AI solution ability to analyze data and predict trends has empowered us to make smarter choices. ”</p>
                                                </div>
                                                <div className="rating">
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                    <span><FontAwesomeIcon icon={faStar} /></span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews