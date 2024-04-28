import React, { useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import AnimatedPage from '../../AnimatedPage';
import { useNavigate } from 'react-router-dom';

const WaitingRoom = ({ connectedPeopleCount }) => {
    const navigateTo = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigateTo('/startcountdown')
        }, 4000);

        return () => clearTimeout(timeout);
    }, [history]);

    return (
        <AnimatedPage>
            <div className="content">
                <h2>Waiting for host to start...</h2>
                <div>
                    <InfinitySpin
                        height={100}
                        width={200}
                        color="white"
                        ariaLabel="loading"
                    />
                </div>
                <p>{connectedPeopleCount}4 people connected to the room</p>
            </div>
        </AnimatedPage>
    );
};

export default WaitingRoom;
