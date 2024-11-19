import { Link } from 'react-router-dom';
import blogData from '../../views/blog/blogsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './blogSlider.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const BlogSlider = () => {

    const breakpoints = {
        200: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    };

    return (
        <div className="blogSlider" >
            <h2>Our Blogs</h2>
            <div className="container" >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    breakpoints={breakpoints}
                    className='swiper'
                >
                    {
                        blogData.map((el) => {
                            return (
                                <SwiperSlide key={el.id} className='swiperSlide'>
                                    <Link to={`/blogs/${el.id}`} className='sliderContent col-sm-12 '>
                                        <div className="blogBg">
                                            <LazyLoadImage src={el.img} alt="" />
                                        </div>
                                        <h5>{el.description}</h5>
                                        <p>Cryptocurrencies operate on decentralized networks...</p>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default BlogSlider