import React from 'react'
import AnimatedPage from "../../../theme/AnimatedPage";
import CountdownCounter from './components/CountdownCounter';

const StartCountdown = () => {
    return (
        <>
            <AnimatedPage>
                <div className="content">
                    <h2 style={{ color: 'white' }}>The game is starting!</h2>
                    <CountdownCounter duration={7} size={180} />
                </div>
            </AnimatedPage>
        </>
    );
}

export default StartCountdown;