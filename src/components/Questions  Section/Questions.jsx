//style
import './questions.scss'

const Questions = () => {
    return (
        <div className="faqs">
            <div className="container w-50">
                <div className="content">
                    <h2>FAQs</h2>
                    <p>Say goodbye to the hassle of managing multiple accounts across different financial institutions.</p>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How Does AI Generation Create Image Work?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">You can access our service from any device with an internet connection.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What Is AI Generation Create Image?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Our products and services include [describe your products/services briefly].</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Can AI-Generated Images Match Human-Created Art?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">You can contact our customer support department by [provide contact information such as phone number or email] during our business hours. Our team is ready to assist you with any inquiries or concerns.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What Are The Applications Of AI Generation Create Image?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes, you can return items within [specify time frame] if you are not satisfied. Please review our return policy for further instructions.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions