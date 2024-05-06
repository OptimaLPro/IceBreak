import React, { useState }from 'react';
import './Survey.css';
import Slider from "@mui/material/Slider";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Survey = () => {
    
    // State to hold the value of the number of players slider
    const [numPlayers, setNumPlayers] = useState(0);

    // State to hold the value of the game time slider
    const [gameTime, setGameTime] = useState(0);

    // State to hold the selected game duration option
    const [selectedAtmosphere, setSelectedAtmosphere] = useState("30 minutes");

    // Event handler to update the number of players slider value
    const handleNumPlayersChange = (event) => {
        setNumPlayers(parseInt(event.target.value));
    };

    // Event handler to update the game time slider value
    const handleGameTimeChange = (event) => {
        setGameTime(parseInt(event.target.value));
    };

    // Event handler to handle dropdown selection
    const handleAtmosphereChange = (event) => {
        setSelectedAtmosphere(event.target.value);
    };

    const handleSkip = () => {
        // Add your skip logic here
        console.log("Survey skipped");
    };


    return (
        
        <div className="survey-wrapper">
            <div className="survey-header">Before we start..</div>
            <div className="survey-container">
                <div class="numPlayers"></div>
                <h3>Number of players:</h3>
                <Slider
                value={numPlayers}
                    onChange={handleNumPlayersChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <div className="slider-value">{numPlayers}</div> 
                <h3>Game time:</h3>
                <Slider
                value={gameTime}
                    onChange={handleGameTimeChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
                <div className="slider-value">{gameTime}</div>
                <h3>Atmosphere:</h3>
                <select value={selectedAtmosphere} onChange={handleAtmosphereChange} className="dropdown">
                    <option value="chooos">Please choose</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                </select>
            </div>
            {/* <button className="skip-button" onClick={handleSkip}>Skip</button> */}
            <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
        </div>
    );
}

export default Survey;

