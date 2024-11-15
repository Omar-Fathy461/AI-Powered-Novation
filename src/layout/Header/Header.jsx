import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/WhatsApp Image 2024-06-11 at 21.42.31_5ef99509.jpg'
import './header.scss'
const Header = () => {
    return (
        <>
            <div className="navTop">
                <div className='container'>
                    <div className="content">
                        <div className="address">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>hi.avitex@gmail.com</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>160 Broadway 15th floor, New York</p>
                            </div>
                        </div>
                        <div className="follow-media">
                            <p>Follow Us</p>
                            <div>
                                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                <span><FontAwesomeIcon icon={faTwitter} /></span>
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                                <span><FontAwesomeIcon icon={faYoutube} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBottom">
                <div className="container">
                    <div className="content">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="links-nav">
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/services">SERVICES</NavLink>
                            <NavLink to="/blogs">BLOG</NavLink>
                            <NavLink to="/about">ABOUT US</NavLink>
                            <NavLink to='/contact'>CONTACT</NavLink>
                            <NavLink to='/signup'>SignUp</NavLink>
                        </div>
                        <div className="call">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <span className='tel'>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <p>123 456 7890</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header