import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import AnimatedPage from "../../../theme/AnimatedPage";

const StartCountdown = () => {
    return (
        <>
            <AnimatedPage>
                <div className="content">
                    <h2 style={{color: 'white'}}>The game is starting!</h2>
                    <CountdownCircleTimer
                        isPlaying
                        duration={7}
                        colors={['#508D69', '#E8FD96', '#EDA489', '#D15555']}
                        colorsTime={[7, 5, 2, 0]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div>
            </AnimatedPage>
        </>
    );
}

export default StartCountdown;