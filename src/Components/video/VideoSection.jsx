import React from 'react';
import './VideoSection.css';
import Video from '../../assets/video.mp4';

const VideoSection = () => {
    return (
        <div className="video-container">
            <video autoPlay muted loop>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoSection;
