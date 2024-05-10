import React, { useState } from 'react';
import './genericPages.css';
import Slider from "@mui/material/Slider";
import { MenuItem, Paper, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import AnimatedPage from '../../../theme/AnimatedPage';

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

    const handleChange = (event) => {
        setSelectedAtmosphere(event.target.value);
    };

    return (
        <>
            <AnimatedPage>
                <div className="content">
                    <div className="survey-header">Before we start..</div>
                    <Paper elevation={8} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '30px',
                        borderRadius: '15px',
                        width: '80%',
                    }}>
                        <span className='titles'>Number of players: <span className="slider-value">{numPlayers}</span></span>
                        <Slider
                            value={numPlayers}
                            onChange={handleNumPlayersChange}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            min={0}
                            max={100}
                        />

                        <span className='titles'>Game time: <span className="slider-value">{gameTime}</span></span>
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
                            <span className='titles'>Atmosphere:</span>
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
                                <AwesomeButton size="xl" type="primary" className="survey-button">Bring it on! 🔥</AwesomeButton>
                            </Link>
                            <Link to="/">
                                <AwesomeButton size="small" type="primary" className="survey-button aws-btn--grey">Skip</AwesomeButton>
                            </Link>
                        </div>
                    </Paper>
                </div>
            </AnimatedPage>
        </>
    );
}

export default Survey;