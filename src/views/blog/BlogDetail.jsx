import { useState } from 'react';
import { useParams } from 'react-router-dom';
import blogData from './blogsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Heading from '../../components/common head/heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons'
import BlogSlider from '../../components/Slider/BlogSlider';

import './blogDetail.scss'

const BlogDetail = () => {
    const [isFollow, setIsFollow] = useState(false)
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    return (
        <div className='blogDetail-page'>
            <Heading page="Blog Detail" heading="Blog Detail" text='We offer a variety of pricing packages to meet the unique needs of our freelancers. Contact us today to discuss which package is right for you.' />
            <div className="container">
                <div className="blogDetail-content ">
                    <div className="blog col-lg-8">
                        <p className='blogData-type'>{blog.tag}</p>
                        <h2>A Look at How the Brand Stays Ahead of the Competition</h2>
                        <ul>
                            <li><LazyLoadImage src={blog.avatar} alt="avatar" /> <span>{blog.name}</span></li>
                            <li>Oct 12, 2023</li>
                            <li><FontAwesomeIcon icon={faComments} />  02 comments</li>
                        </ul>


                        <div className="media-links">
                            <span><FontAwesomeIcon icon={faFacebookF} /> | Facebook</span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /> | LinkedinIn</span>
                            <span><FontAwesomeIcon icon={faXTwitter} /> | Twitter</span>
                            <span><FontAwesomeIcon icon={faInstagram} /> | Instagram</span>
                            <span><FontAwesomeIcon icon={faYoutube} /> | Youtube</span>
                        </div>

                        <h3>How to deal with employee quitting</h3>
                        <p>Attracting good money and achieving financial success is within your reach. With our innovative solutions and expert guidance, we empower you to unlock your creative business potential and thrive in today's competitive landscape.</p>

                        <div className="blogDetail-bg">
                            <LazyLoadImage src={blog.img} alt="" />
                        </div>

                        <p>Let us help you navigate the complexities of the financial world, maximize your earnings, and turn your creative passion into a lucrative venture. It's time to unleash your full potential and embark on a journey towards financial prosperity.</p>

                        <h3>How to deal with employee quitting</h3>

                        <p>Saving money is an essential skill for financial stability and long-term success. We understand the importance of efficient resource management, and we're here to guide you through proven strategies to optimize your financial savings. Our experts will provide you with practical tips and insights, such as budgeting techniques, expense tracking, smart investment options, and ways to reduce unnecessary expenses.</p>

                        <div className="quote">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <h3 className='quote-title'>“If You Set Your Goals Ridiculously High And It's A Failure, You Will Fail Above Everyone Else's Success”</h3>
                            <p>- Nelson Mandela</p>
                        </div>

                        <ul className='blog-features'>
                            <li>Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</li>
                            <li>Expert-level development skills in Java.</li>
                            <li>Ph.D. in the related field is a plus.</li>
                            <li>Strong fundamentals in computer science skills.</li>
                        </ul>

                        <p>Saving money is an essential skill for financial stability and long-term success. We understand the importance of efficient resource management, and we're here to guide you through proven strategies to optimize your financial savings. Our experts will provide you with practical tips and insights, such as budgeting techniques, expense tracking, smart investment options, and ways to reduce unnecessary expenses.</p>

                        <div className="sharePost">
                            <div className="tagsType">
                                <button>Creative</button>
                                <button>Binance</button>
                                <button>Business</button>
                            </div>
                            <div className="share-media">
                                <p className='text-white'>Share This Post  :</p>
                                <div className='mediaIcons'>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    <span><FontAwesomeIcon icon={faXTwitter} /></span>
                                    <span><FontAwesomeIcon icon={faYoutube} /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="sidbar col-lg-3">
                        <div className='auther'>
                            <div className="auther-img">
                                <LazyLoadImage src={blog.avatar} alt="" />
                            </div>
                            <div className="auther-detail">
                                <h4>{blog.name}</h4>
                                <p>200 Follower</p>
                                <button className={isFollow === false ? 'followBtn unfollow' : 'followBtn follow'} onClick={() => setIsFollow(state => !state)}>{isFollow === false ? "Follow" : "Unfollow"}</button>
                            </div>
                        </div>
                        <p className='bio'>Peter Parker is a writer who draws. He’s the Bestselling author of “Number of The Year”. Donec vitae tortor efficitur</p>
                        <div className='mediaIcons'>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span><FontAwesomeIcon icon={faXTwitter} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                    </div>
                </div>
                <BlogSlider />
            </div>
        </div>
    )
}

export default BlogDetail