import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import './pay.scss'

const PayYearly = () => {
    return (
        <div className='payMonthly  container-sm d-flex flex-wrap col-lg-8 gap-3  animate__animated animate__fadeIn' style={{ flex: 1 }}>
            <div className="premium col-md-6" style={{ flex: 1 }}>
                <h3>Premium</h3>
                <p>Ideal for individuals who need quick access to basic features.</p>
                <h2>$89.99/year</h2>
                <button>Get Started</button>
                <p className='pay-features checkMark'> <span ><FontAwesomeIcon icon={faCheck} /></span> 20,000+ of PNG & SVG graphics</p>
                <p className='pay-features checkMark'> <span ><FontAwesomeIcon icon={faCheck} /></span>  Upload custom icons and fonts</p>
                <p className='pay-features checkMark'> <span ><FontAwesomeIcon icon={faCheck} /></span>  Access to 100 million stock images</p>
            </div>
            <div className="freebie col-md-6" style={{ flex: 1 }}>
                <h3>freebie</h3>
                <p>Ideal for individuals who need quick access to basic features.</p>
                <h2>Free</h2>
                <button>Get Started</button>
                <p className='pay-features checkMark'> <span ><FontAwesomeIcon icon={faCheck} /></span> 20,000+ of PNG & SVG graphics</p>
                <p className='pay-features'> <span><FontAwesomeIcon icon={faX} /></span> Upload custom icons and fonts</p>
                <p className='pay-features'> <span><FontAwesomeIcon icon={faX} /></span> Unlimited Projects</p>
            </div>
        </div>
    )
}

export default PayYearly