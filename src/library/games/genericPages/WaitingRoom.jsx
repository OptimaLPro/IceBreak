import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import AnimatedPage from "../../../theme/AnimatedPage";
import { useNavigate, useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import { AwesomeButton } from 'react-awesome-button';

const WaitingRoom = ({ connectedPeopleCount }) => {
    const navigateTo = useNavigate();
    const [gamePIN, setGamePIN] = useState(useParams().pin);

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigateTo(`/${gamePIN}/startcountdown`)
        }, 900000);

        return () => clearTimeout(timeout);
    });

    return (
        <AnimatedPage>
            <div className="content">
                <Paper elevation={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px 30px 0px 30px',
                    margin: '20px 0px 20px 0px',
                    borderRadius: '15px'
                }}>
                    <h1>Game PIN: {gamePIN}</h1>

                </Paper>
                <div>
                    <h2>Waiting for your friends...</h2>
                    <h3>Hurry them up!</h3>
                </div>
                <div>
                    <InfinitySpin
                        height={100}
                        width={200}
                        color="white"
                        ariaLabel="loading"
                    />
                </div>
                <p style={{ color: 'white' }}>{connectedPeopleCount}4 people connected to the room</p>
                <div>
                    <AwesomeButton type="primary" className="aws-btn aws-btn--pink" onPress={() => navigateTo(`/${gamePIN}/startcountdown`)}>Start Game</AwesomeButton>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default WaitingRoom;
