import bgContact from '../../assets/images/bg-contact3.png'

//style
import './contactFormPage.scss'

const ContactFormPage = () => {
    return (
        <div className="ContactFormPage">
            <div className="content">
                <div className="contact-bg col-lg-6 col-md-12 col-sm-12">
                    <img src={bgContact} alt="" />
                </div>
                <div className="contact-form col-lg-6 col-md-12 col-sm-12">
                    <div className="container-contact ">
                        <div className="form">
                            <h2>We’d love to help</h2>
                            <div>
                                <input type="text" placeholder="Your name" />
                                <input type="email" placeholder="Your email" />
                            </div>
                            <input type="tel" placeholder="Telephone" />
                            <textarea name="" id="" placeholder="Message"></textarea>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormPage