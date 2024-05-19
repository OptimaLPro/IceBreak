import React, { useEffect, useRef, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { InfinitySpin } from 'react-loader-spinner';
import Logo from '../../../assets/images/LogoResize.png';
import BgVideo from '../../../assets/videos/icemelting.mp4';
import "./landingPage.css";

const LandingPage = ({ setShowLandingPage }) => {
    const [videoLoading, setVideoLoading] = useState(true);
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })

    const handleVideoLoad = () => {
        setVideoLoading(false);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowLandingPage(false);
    };

    return (
        <>
            <div className="background-landing"></div>
            {videoLoading && <div className='loader-landing'><InfinitySpin height={100} width={200} color="white" ariaLabel="loading"
            /></div>}
            <video
                autoPlay
                loop
                playsInline
                muted
                ref={videoRef}
                className="bg-vid"
                onLoadedData={handleVideoLoad}
                preload="auto"
            >
                <source src={BgVideo} type="video/mp4" />
            </video>
            {!videoLoading &&
                <div className="landing-page">
                    <span className='landing-title'>IceBreak</span>
                    <div className="landing-logo">
                        <img src={Logo} alt="logo" width={300} />
                    </div>
                    <div className="landing-button">
                        <AwesomeButton type="primary" size="large" onPress={handleButtonClick}>
                            <div className='landing-button-text'>Let's Play</div>
                        </AwesomeButton>
                    </div>
                </div>}
        </>
    );
};

export default LandingPage;
