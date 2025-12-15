import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import imgAbout from '../../assets/images/item12.png'

//components
import Buttons from '../../common/Buttons'

//style
import './ideas.scss'

const IdeasSection = () => {
    return (
        <div className='about-us'>
            <div className="container">
                <div className="content">
                    <div className="ideas-adding col-lg-6 col-sm-12">
                        <h2>We Provide Brilliant Ideas & Adding</h2>
                        <p>We are a full-service creative agency that helps businesses build brands, tell stories, and engage audiences through bold and strategic design.</p>
                        <div className="features">
                            <h6><FontAwesomeIcon icon={faCheck} /> Free Live Chat Software</h6>
                            <h6><FontAwesomeIcon icon={faCheck} /> Real Time Language Translation</h6>
                            <h6><FontAwesomeIcon icon={faCheck} /> 18,000+ Websites Used Aizan</h6>
                            < Buttons content="Find out more" />
                        </div>
                    </div>
                    <div className="img-ideas col-lg-2 col-sm-12">
                        <LazyLoadImage src={imgAbout} alt="" />
                        <div className="achievements">
                            <div>
                                <h4>350+</h4>
                                <p>Completed projects</p>
                            </div>
                            <div>
                                <h4>2500+</h4>
                                <p>Great photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdeasSection