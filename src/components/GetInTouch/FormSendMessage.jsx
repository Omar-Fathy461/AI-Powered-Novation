import useIntersectionFade from '../../Hooks/useIntersectionFade';
//style
import './sendMessage.scss'

const FormSendMessage = () => {
    const { addToRefs } = useIntersectionFade();
    return (
        <div className="contact-section d-flex flex-wrap">
            <div className="contact_img col-lg-6 col-md-12 col-sm-12">
                <div className="content" ref={addToRefs}>
                    <h2>Transform Your Business With AI-Driven Image Creation</h2>
                </div>
            </div>
            <div className="contact_form col-lg-6 col-md-12 col-sm-12">
                <div className="container-contact ">
                    <div className="content" ref={addToRefs}>
                        <h2>Get In Touch</h2>
                        <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                        <input type="tel" placeholder="Telephone" />
                        <textarea name="" id="" placeholder="Message"></textarea>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSendMessage