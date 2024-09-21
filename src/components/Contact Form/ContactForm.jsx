import './contactForm.scss'

const ContactForm = () => {
    return (
        <div className="contact-form col-lg-5 col-sm-12">
            <div style={{ display: "flex", gap: ".5rem", flexWrap: 'wrap' }}>
                <input type="text" placeholder='Name' className='col-lg-6 col-sm-12' />
                <input type="text" placeholder='Subject' className='col-lg-6 col-sm-12' style={{ flex: '1' }} />
            </div>
            <input type="email" placeholder='Email' className='col-lg-12 col-sm-12' />
            <textarea name="" id="" placeholder="Message" className='col-lg-12 col-sm-12 '></textarea>
            <button>Send Message</button>
        </div>
    )
}

export default ContactForm