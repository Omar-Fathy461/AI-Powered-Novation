import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBoxesStacked, faBox, faHandshake } from '@fortawesome/free-solid-svg-icons'

//style
import './features.scss'
const AiFeatures = () => {
    return (
        <div className='features-section'>
            <div className="container">
                <h2 className='features-title'>Find An AI Solution For Your Business</h2>
                <p className='features-info'>Experience the future of communication with our AI-powered chat solution.</p>
                <div className="content">
                    <div>
                        <FontAwesomeIcon icon={faBolt} />
                        <h5>AI-Powered <br />Chatbots</h5>
                        <p>Implement intelligent chatbots that can handle customer inquiries, provide</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBoxesStacked} />
                        <h5>Embracing <br />Multilingual Support</h5>
                        <p>Expand your reach and cater to a global audience with chat services available</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBox} />
                        <h5>Integration <br />Capabilities</h5>
                        <p>Seamlessly integrate AI chat services into your existing systems</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                        <h5>Proactive <br />Engagement</h5>
                        <p>Initiate proactive conversations with customers based on their</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiFeatures