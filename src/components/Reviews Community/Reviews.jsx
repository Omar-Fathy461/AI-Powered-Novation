import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import avatar1 from '../../assets/images/avatar1.png'

//style
import './reviews.scss'

const Reviews = () => {
    return (
        <div className="our_community">
            <div className="container">
                <div className="content d-flex flex-wrap">
                    <div className="community_text col-lg-6">
                        <h2>Our Community With User Reviews</h2>
                        <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                        <div className="angels">
                            <span className="slider_prev"><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span className=" slider_next"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </div>
                    </div>
                    <div className="community_cards slider_items col-lg-6">
                        <div className="community_card slider_item">
                            <div className="head">
                                <div className="card_info">
                                    <img src={avatar1} alt="" />
                                    <div className="name">
                                        <h3>Alexander D</h3>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews