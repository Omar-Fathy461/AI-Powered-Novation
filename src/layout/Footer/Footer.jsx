import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/WhatsApp Image 2024-06-11 at 21.42.31_5ef99509.jpg'

//style
import './footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="content">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="links-nav">
                        <Link to="/">HOME</Link>
                        <Link to="/blog">BLOG</Link>
                        <Link to='/contact'>CONTACT</Link>
                        <Link to="/services">SERVICES</Link>
                    </div>
                    <div className="follow-media">
                        <div>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <span><span ><FontAwesomeIcon icon={faPhone} /></span> 012 345 6789</span>
                    <span>|</span>
                    <span><span><FontAwesomeIcon icon={faEnvelope} /></span> aizan@gmail.com</span>
                    <span>|</span>
                    <span><span><FontAwesomeIcon icon={faLocationDot} /></span> 710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY</span>
                </div>
                <div className="copyright">
                    <span>©2023 AIZAN. All Rights Reserved.</span>
                    <div className="copyright_links">
                        <a href="">Terms Of Services</a>
                        <span>|</span>
                        <a href="">Privacy Policy</a>
                        <span>|</span>
                        <a href="">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer