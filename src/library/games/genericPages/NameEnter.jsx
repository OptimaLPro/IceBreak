import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

const NameEnter = () => {
    const [avatarSeed, setAvatarSeed] = useState(Date.now());
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const avatar = createAvatar(micah, {
        seed: avatarSeed.toString(),
        size: 128,
        backgroundColor: [randomColor]
    }).toDataUriSync();

    const handleRandomizeConfig = () => {
        setAvatarSeed(Date.now());
    };

    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Avatar and Name</h1>
                <Paper elevation={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '30px',
                    borderRadius: '15px'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <img src={avatar} alt="Avatar" style={{ width: '100px', height: '100px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', borderRadius: '50px' }} />
                    </div>
                    <AwesomeButton size="small" type="secondary" style={{ width: '87%', marginBottom: '20px' }} onPress={handleRandomizeConfig}>Random Avatar 🎲</AwesomeButton>

                    <div style={{ width: '100%', marginBottom: '20px', marginTop: '10px' }}>
                        <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" fullWidth />
                    </div>
                    <div className="bottom-button" style={{ width: '100%', maxWidth: '500px' }}>
                        <Link to="/waitingroom">
                            <AwesomeButton type="primary" style={{ width: '100%', maxWidth: '500px' }}>Done!</AwesomeButton>
                        </Link>
                    </div>
                </Paper>
            </div>
        </AnimatedPage>
    );
}

export default NameEnter;
