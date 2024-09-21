import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


//style
import './aiVideo.scss'

const AIVideo = () => {
    return (
        <div className="video">
            <div className="container">
                <div className="content">
                    <div className="btn_play">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Unlock Revenue Growth For Your Business</h2>
                </div>
            </div>
        </div>
    )
}

export default AIVideo