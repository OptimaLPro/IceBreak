import React, { useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../../../../assets/css/Countdown.css';
import { red } from '@mui/material/colors';

const CountdownCounter = ({ duration, size, isComplete, setIsComplete, onCompleteState }) => {
    const renderTime = ({ remainingTime }) => {
        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);
        const [, setOneLastRerender] = useState(0);

        if (currentTime.current !== remainingTime) {
            isNewTimeFirstTick.current = true;
            prevTime.current = currentTime.current;
            currentTime.current = remainingTime;
        } else {
            isNewTimeFirstTick.current = false;
        }

        // force one last re-render when the time is over to trigger the last animation
        if (remainingTime === 0) {
            setTimeout(() => {
                setOneLastRerender((val) => val + 1);
            }, 20);
        }

        const isTimeUp = isNewTimeFirstTick.current;

        return (
            <div className="time-wrapper">
                <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
                    {remainingTime}
                </div>
                {prevTime.current !== null && (
                    <div
                        key={prevTime.current}
                        className={`time ${!isTimeUp ? "down" : ""}`}
                    >
                        {prevTime.current}
                    </div>
                )}
            </div>
        );
    };

    const defaultColorsTime = [7, 4, 2, 0];
    const colorsTime = duration === 15 ? [15, 10, 5, 0] : defaultColorsTime;

    return (
        <>
            <div className='timer-wrapper'>
                <CountdownCircleTimer
                    isPlaying
                    duration={duration}
                    colors={['#44ce1b', '#f7e379', '#f2a134', '#e51f1f']}
                    colorsTime={colorsTime}
                    size={size}
                    onComplete={onCompleteState}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
        </>
    );
}

export default CountdownCounter;
