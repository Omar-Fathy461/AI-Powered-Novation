//components
import Heading from '../../components/common head/heading'
import ContactForm from '../../components/Contact Form/ContactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
//style
import './contact.scss'

const Contact = () => {
    return (
        <div className='contact-page'>
            <Heading page="Contact" heading='Contact' text='Get in touch with our dedicated team of experts. Whether you have a question, need assistance, or want to discuss your project, we are here to help.' />
            <div className="container">
                <div className="contact">
                    <div className="contact-info col-lg-6 col-sm-12">
                        <h2>We’d love to help</h2>
                        <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                        <div className="media">
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                        <div className="contact-us">
                            <div>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <p>123 456 7890</p>
                            </div>
                            <div>
                                <span>  <FontAwesomeIcon icon={faEnvelope} /></span>
                                <p>hi.avitex@gmail.com</p>
                            </div>
                            <div>
                                <span> <FontAwesomeIcon icon={faLocationDot} /></span>
                                <p>4140 Rd. Allentown, New Mexico 31134</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9761.383836513483!2d31.34322682327434!3d30.117938533178897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815d60d9a32f5%3A0x828d31579024d75c!2z2YbYp9iv2Yog2KfZhNi02YXYsyDZhNmE2KPZhNi52KfYqCDYp9mE2LHZitin2LbZitip!5e0!3m2!1sar!2seg!4v1705622099985!5m2!1sar!2seg"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Contact