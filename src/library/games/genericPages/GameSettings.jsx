import React, { useEffect, useState } from 'react';
import './genericPages.css';
import Slider from "@mui/material/Slider";
import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Paper, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { socket } from '../../../utils/socket/socket';
import shortid from 'shortid';
import AnimatedPage from '../../../theme/AnimatedPage';

const GameSettings = () => {
    const [numQuestions, setNumQuestions] = useState(0);
    const [roomCreated, setRoomCreated] = useState(false);
    const [questionSeconds, getQuestionSeconds] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [gamePIN, setgamePIN] = useState(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let pin = '';

        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0) {
                pin += letters.charAt(Math.floor(Math.random() * letters.length));
            } else {
                pin += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
        }
        return pin;
    });

    useEffect(() => {
        setTotalTime(((numQuestions * 10 * questionSeconds) / 60).toFixed(2));
    }, [numQuestions, questionSeconds]);

    const handleNumQuestions = (event) => {
        setNumQuestions(parseInt(event.target.value));
    };

    const handleSecondsQuestion = (event) => {
        getQuestionSeconds(parseInt(event.target.value));
    };

    const selectTime = (questions, seconds) => {
        console.log("Selected time: ", seconds);
        console.log("Selected questions: ", questions);
        const roomData = { gamePIN: gamePIN, numQuestions: questions, questionSeconds: seconds };
        socket.emit('createRoom', roomData);
    };

    const buttonHandler = async (numQuestions, questionSeconds) => {
        selectTime(numQuestions, questionSeconds);
        localStorage.setItem('user_id', shortid.generate());
        socket.emit('updateRoomData', { gamePIN });
    };

    useEffect(() => {
        let isSubscribed = true;
        if (!roomCreated) {
            socket.on('roomCreated', (gamePIN) => {
                console.log(`Room created: ${gamePIN}`);
                if (isSubscribed) {
                    setRoomCreated(true);
                }
            });
        }

        return () => {
            isSubscribed = false;
            socket.off('roomCreated');
        };
    }, [roomCreated]);

    return (
        <>
            <AnimatedPage>
                <div className="content">
                    <div className="survey-header">Game Settings</div>
                    <Paper elevation={8} sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 30px 30px 30px',
                        borderRadius: '15px', width: '70%'
                    }}>
                        <div className="numPlayers"></div>
                        <h3 style={{color: 'black'}}>Select game time:</h3>
                        <div className="time-buttons-container">
                            <Link to={`/${gamePIN}/nameenter`} style={{ textDecoration: 'none' }}>
                                <div className='row-buttons'>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(20, 3)}>5 min.</AwesomeButton>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(28, 10)}>7 min.</AwesomeButton>
                                </div>
                                <div className='row-buttons bottom-row'>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(30, 12)}>10 min.</AwesomeButton>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(40, 14)}>15 min.</AwesomeButton>
                                </div>
                                <div className='row-buttons bottom-row'>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(15, 2)}>Fast.</AwesomeButton>
                                    <AwesomeButton type="primary" className="settings-button" onPress={() => buttonHandler(1, 2)}>Short.</AwesomeButton>
                                </div>
                            </Link>
                        </div>
                        <Accordion sx={{ marginTop: '30px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                                Choose your own settings
                            </AccordionSummary>
                            <div className="advance">
                                <AccordionDetails>
                                    <span className='label-text'>Number of questions: <span className="slider-value">{numQuestions}</span></span>
                                    <Slider
                                        value={numQuestions} onChange={handleNumQuestions} aria-labelledby="discrete-slider" valueLabelDisplay="auto"
                                        step={1} min={5} max={20} />
                                    <span className='label-text'>Seconds for question: <span className="slider-value">{questionSeconds}</span></span>
                                    <Slider
                                        value={questionSeconds} onChange={handleSecondsQuestion} aria-labelledby="discrete-slider" valueLabelDisplay="auto"
                                        step={1} min={6} max={20} />
                                    <div className='total-time'><span className='label-text'>Total time: {totalTime} minutes</span></div>
                                    <div className='buttons-container fire'>
                                        <Link to={`/${gamePIN}/nameenter`}>
                                            <AwesomeButton type="primary" className="survey-button" onPress={() => buttonHandler(numQuestions, questionSeconds)}>Let's go! 🔥</AwesomeButton>
                                        </Link>
                                    </div>
                                </AccordionDetails>
                            </div>
                        </Accordion>
                    </Paper >
                </div>
            </AnimatedPage>
        </>
    );
}

export default GameSettings;