import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple"
import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons"

//style
import './aiSolutions.scss'
const AISolutions = () => {




    return (
        <div className="aiSolutions">
            <div className="container">
                <div className="content">
                    <h2>Find an AI solution for your business</h2>
                    <p>Experience the future of communication with our AI-powered chat solution.</p>
                    <div className="cards">
                        <div>
                            <FontAwesomeIcon icon={faChartSimple} />
                            <h5>Analytics and Insights</h5>
                            <p>Gain valuable insights into customer behavior, preferences</p>
                        </div>
                        <div >
                            <FontAwesomeIcon icon={faMessage} />
                            <h5>Chat Bot AI</h5>
                            <p>Engage and assist your website visitors with our intelligent</p>
                        </div>
                        <div >
                            <FontAwesomeIcon icon={faBolt} />
                            <h5>Multilingual Support</h5>
                            <p>Expand your reach and cater to a global audience ...</p>
                        </div>
                        <div >
                            <FontAwesomeIcon icon={faBoxesStacked} />
                            <h5>AI-Powered Chatbots</h5>
                            <p>Engage and assist your website visitors with our intelligent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AISolutions