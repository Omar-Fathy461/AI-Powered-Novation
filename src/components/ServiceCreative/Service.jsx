import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

//style
import './service.scss'


const Service = () => {
    return (
        <div className='service'>
            <div className="container">
                <div className="content">
                    <div className='service-info col-lg-6 col-sm-12'>
                        <h3>We Provide brilliant Ideas & Adding</h3>
                        <p>We are a full-service creative agency that helps businesses build brands, tell stories, and engage audiences through bold and strategic design.</p>
                    </div>
                    <div className='completed-projects col-lg-6 col-sm-12'>
                        <div>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <h2>350</h2>
                            <p>Completed projects</p>
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <h2>2500</h2>
                            <p>Great photography</p>
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <h2>0K</h2>
                            <p>Satisfied users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service