import React from 'react'

const VideoModal = ({ setVideo }) => {
    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) {
                return
            }
            setVideo(false)
        }}
            className='VideoModal'
        >
            <iframe width="700" height="400" src="https://www.youtube.com/embed/_UjYWgM8guY?si=ocbBqxJ1Wd-i5TRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoModal