import { useState } from 'react'
import blogData from './blogsData'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Pagination } from '@mui/material'
import Heading from '../../components/common head/heading'
//style
import './blog.scss'

const numArticle = 2;

const Blog = () => {

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: numArticle
    })

    const handlePagination = (e, page) => {
        const from = (page - 1) * numArticle;
        const to = (page - 1) * numArticle + numArticle;
        setPagination({ ...pagination, from, to })
        window.scrollTo(0, 0);
    }

    return (
        <div className='blogPage'>
            <Heading page="Blog" heading="Blog" text='We offer a variety of pricing packages to meet the unique needs of our freelancers. Contact us today to discuss which package is right for you.' />
            <div className="container">
                <div className="blog-content ">
                    <div className="blogs col-lg-8">
                        {
                            blogData.slice(pagination.from, pagination.to).map((el) => {
                                return (
                                    <div key={el.id} className='blog'>
                                        <div className='blog-bg'>
                                            <LazyLoadImage src={el.img} alt="bg1" />
                                        </div>
                                        <p className='tagType'>{el.tag}</p>
                                        <h2>Exploring AI Generation Create Image</h2>
                                        <ul>
                                            <li>by <span>Peter Parker</span></li>
                                            <li>Oct 12, 2023</li>
                                            <li><FontAwesomeIcon icon={faComments} />  02 comments</li>
                                        </ul>
                                        <p>The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher…</p>
                                        <Link to={`/blogs/${el.id}`}>Read More</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="sidbar col-lg-3">
                        <div className='blog-sections'>
                            <h4>Categories</h4>
                            <ul>
                                <li><FontAwesomeIcon icon={faAngleRight} /> adventure</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /> console</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Action</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Esport</li>
                                <li><FontAwesomeIcon icon={faAngleRight} /> Racing</li>
                            </ul>

                        </div>
                        <div className='blog-sections'>
                            <h4>Popular Tags</h4>
                            <button>Creative</button>
                            <button>3d Art</button>
                            <button>3d Art</button>
                            <button>Binance</button>
                            <button>Business</button>
                        </div>

                    </div>
                </div>
                <Pagination onChange={handlePagination} count={3} variant="outlined" color="secondary" className='Pagination' />
            </div>
        </div>
    )
}

export default Blog