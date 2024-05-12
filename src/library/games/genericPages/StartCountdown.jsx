import React, { useEffect, useState } from 'react'
import AnimatedPage from "../../../theme/AnimatedPage";
import CountdownCounter from './components/CountdownCounter';
import { useNavigate } from 'react-router-dom';

const StartCountdown = () => {
    const navigate = useNavigate();
    const duration = 7;

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(`/trivia`)
        }, duration * 1000);

        return () => clearTimeout(timeout);

    });

    return (
        <>
            <AnimatedPage>
                <div className="content">
                    <h1 style={{ color: 'white', marginBottom: '100px' }}>The game is starting!</h1>
                    <CountdownCounter duration={duration} size={180} />
                </div>
            </AnimatedPage>
        </>
    );
}

export default StartCountdown;