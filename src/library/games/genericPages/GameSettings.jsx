import React, { useEffect, useState } from 'react';
import './genericPages.css';
import Slider from "@mui/material/Slider";
import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Paper, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Survey = () => {
    const [numPlayers, setNumPlayers] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [selectedAtmosphere, setSelectedAtmosphere] = useState("Short");
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        setTotalTime(((numPlayers * gameTime) / 60).toFixed(2));
    }, [numPlayers, gameTime]);

    const handleNumPlayersChange = (event) => {
        setNumPlayers(parseInt(event.target.value));
    };

    const handleGameTimeChange = (event) => {
        setGameTime(parseInt(event.target.value));
    };

    const handleSkip = () => {
        // Add your skip logic here
        console.log("Survey skipped");
    };

    const handleChange = (event) => {
        setSelectedAtmosphere(event.target.value);
    };

    const selectTime = (seconds, questions) => {
        console.log("15 : " + time);
    };

    return (
        <>
            <div className="survey-header">Game Settings</div>
            <Paper elevation={8} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px 30px 30px 30px',
                borderRadius: '15px',
                width: '70%',
            }}>
                <div className="numPlayers"></div>
                <h3>Select time:</h3>
                <div className="time-buttons-container">
                    <Link to="/waitingroom" style={{ textDecoration: 'none' }}>
                        <div className='row-buttons'>
                            <AwesomeButton type="primary" className="settings-button" onPress={() => selectTime(5)}>5 min.</AwesomeButton>
                            <AwesomeButton type="primary" className="settings-button" onPress={() => selectTime(7)}>7 min.</AwesomeButton>
                        </div>
                        <div className='row-buttons bottom-row'>
                            <AwesomeButton type="primary" className="settings-button" onPress={() => selectTime(10)}>10 min.</AwesomeButton>
                            <AwesomeButton type="primary" className="settings-button" onPress={() => selectTime(15)}>15 min.</AwesomeButton>
                        </div>
                    </Link>
                </div>
                <Accordion sx={{ marginTop: '30px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Choose your own settings
                    </AccordionSummary>
                    <div className="advance">
                        <AccordionDetails>

                            <span className='label-text'>Number of questions: <span className="slider-value">{numPlayers}</span></span>
                            <Slider
                                value={numPlayers}
                                onChange={handleNumPlayersChange}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                min={5}
                                max={20}
                            />

                            <span className='label-text'>Seconds for question: <span className="slider-value">{gameTime}</span></span>
                            <Slider
                                value={gameTime}
                                onChange={handleGameTimeChange}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                min={6}
                                max={20}
                            />
                            <div className='total-time'><span className='label-text'>Total time: {totalTime} minutes</span></div>

                            <div className='buttons-container fire'>
                                <Link to="/waitingroom">
                                    <AwesomeButton type="primary" className="survey-button" onPress={() => timeClick(totalTime)}>Let's go! 🔥</AwesomeButton>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </div>

                </Accordion>


            </Paper >
        </>
    );
}

export default Survey;