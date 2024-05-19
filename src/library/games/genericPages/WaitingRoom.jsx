import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import AnimatedPage from "../../../theme/AnimatedPage";
import { socket } from '../../../utils/socket/socket';
import CountdownCounter from './components/CountdownCounter';

const WaitingRoom = () => {
    const navigateTo = useNavigate();
    const { pin } = useParams();
    const [gamePIN, setGamePIN] = useState(pin);
    const [players, setPlayers] = useState([]);
    const [isRoomOwner, setIsRoomOwner] = useState(false);
    const [gameStarting, setGameStarting] = useState(false);

    const fetchPlayersData = () => {
        socket.emit('getPlayers', { gamePIN });

        socket.on('playersData', (data) => {
            setPlayers(data.players);
        });
    };

    const checkIfRoomOwner = () => {
        socket.emit('checkRoomOwner', { gamePIN });
    };

    const clickHandler = () => {
        socket.emit('startGame', { gamePIN });
    };

    const onCompleteHandler = () => {
        navigateTo(`/${gamePIN}/gameplay/`);
    }

    useEffect(() => {
        socket.on('playerJoined', (data) => {
            setPlayers((prevPlayers) => [...prevPlayers, data]);
        });

        socket.on('playerLeft', (data) => {
            setPlayers((prevPlayers) =>
                prevPlayers.filter((player) => player.id !== data.id)
            );
        });

        fetchPlayersData();
        checkIfRoomOwner();

        socket.on('isRoomOwner', (data) => {
            setIsRoomOwner(data);
        });

        socket.on('gameStarted', (data) => {
            setGameStarting(data);
        });

        return () => {
            socket.off('playerJoined');
            socket.off('playerLeft');
        };
    }, [gamePIN]);

    return (
        <AnimatedPage>
            {!gameStarting ? (<div className="content" style={{ justifyContent: 'flex-start' }}>
                <Paper elevation={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px 25px 0px 25px',
                    margin: '0px 0px 20px 0px',
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
                <p style={{ color: 'white' }}>{players.length} people connected to the room</p>
                <div className="avatars-container">
                    {players.map((player, index) => (
                        <div className='avatar-connected' key={index}>
                            <img src={player.avatar} className='avatar-img' alt="Avatar" />
                            <span style={{ color: 'white' }}>{player.name}</span>
                        </div>
                    ))}
                </div>
                {isRoomOwner && (
                    <div className='owner-container'>
                        <AwesomeButton type="primary" className="aws-btn aws-btn--pink" onPress={clickHandler}>Start Game</AwesomeButton>
                        <small className='upper-owner'>You are the room owner.</small>
                        <small>Only you can start the game.</small>
                    </div>
                )}
            </div>) : (
                <div className="content" style={{ height: '100svh', justifyContent: 'flex-start' }}>
                    <h1 style={{ color: 'white', marginBottom: '100px' }}>The game is starting in</h1>
                    <CountdownCounter duration={3} size={180} onCompleteState={onCompleteHandler} />
                </div>
            )
            }
        </AnimatedPage >
    );
};

export default WaitingRoom;