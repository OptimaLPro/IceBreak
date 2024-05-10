import React, { useState } from 'react';
import './Survey.css';
import Slider from "@mui/material/Slider";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
            <div className="survey-header">Before we start..</div>
            <Paper elevation={8} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '30px',
                borderRadius: '15px',
                width: '70%',
            }}>
                <div className="numPlayers"></div>
                <h3>Number of players: <span className="slider-value">{numPlayers}</span></h3>
                <Slider
                    value={numPlayers}
                    onChange={handleNumPlayersChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    min={0}
                    max={100}
                />

                <h3>Game time: <span className="slider-value">{gameTime}</span></h3>
                <Slider
                    value={gameTime}
                    onChange={handleGameTimeChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />

                <div className='atmosphere-container'>
                    <h3>Atmosphere:</h3>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedAtmosphere}
                        label="Age"
                        onChange={handleChange}
                        sx={{ width: '40%' }}
                    >
                        <MenuItem value={"Short"}>Short</MenuItem>
                        <MenuItem value={"Funny"}>Funny</MenuItem>
                        <MenuItem value={"Drinking"}>Drinking</MenuItem>
                    </Select>
                </div>
                <div className='buttons-container'>
                    <Link to="/">
                        <AwesomeButton size="xl" type="primary" className="survey-button">Let's get it started 🔥</AwesomeButton>
                    </Link>
                    <Link to="/">
                        <AwesomeButton size="small" type="primary" className="survey-button aws-btn--grey">Skip</AwesomeButton>
                    </Link>
                </div>
            </Paper>
        </>
    );
}

export default Survey;

