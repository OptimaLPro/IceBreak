import React, { useState } from 'react';
import './genericPages.css';
import Slider from "@mui/material/Slider";
import { MenuItem, Paper, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

const Survey = () => {
    const [numPlayers, setNumPlayers] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [selectedAtmosphere, setSelectedAtmosphere] = useState("Short");

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

    return (
        <>
            <div className="survey-header">Game Settings</div>
            <Paper elevation={8} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '30px',
                borderRadius: '15px',
                width: '70%',
            }}>
                <div className="numPlayers"></div>
                <h3>Select time:</h3>
                <div className="time-buttons-container">
                    <Link to="/waitingroom">
                        <AwesomeButton type="primary" className="settings-button">5m</AwesomeButton>
                        <AwesomeButton type="primary" className="settings-button">7m</AwesomeButton>
                        <AwesomeButton type="primary" className="settings-button">10m</AwesomeButton>
                        <AwesomeButton type="primary" className="settings-button">15m</AwesomeButton>
                    </Link>
                </div>
                <h3>Number of questions: <span className="slider-value">{numPlayers}</span></h3>
                <Slider
                    value={numPlayers}
                    onChange={handleNumPlayersChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={5}
                    max={20}
                />

                <h3>Seconds for question: <span className="slider-value">{gameTime}</span></h3>
                <Slider
                    value={gameTime}
                    onChange={handleGameTimeChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={6}
                    max={20}
                />

                <div className='buttons-container'>
                    <Link to="/waitingroom">
                        <AwesomeButton size="xl" type="primary" className="survey-button">Let's go! 🔥</AwesomeButton>
                    </Link>
                </div>
            </Paper>
        </>
    );
}

export default Survey;