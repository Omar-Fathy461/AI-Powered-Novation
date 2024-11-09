import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import VideoModal from './VideoModal/VideoModal'

//style
import './aiVideo.scss'

const AIVideo = () => {

    const [video, setVideo] = useState(false)

    return (
        <div className="video">
            <div className="container">
                <div className="content">
                    <div className="btn_play" onClick={() => setVideo(true)}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Unlock Revenue Growth For Your Business</h2>
                </div>
            </div>
            {video && <VideoModal setVideo={setVideo} />}
        </div>
    )
}

export default AIVideo