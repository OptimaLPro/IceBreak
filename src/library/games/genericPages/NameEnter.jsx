import { micah } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import { roomJoined, socket } from '../../../utils/socket/socket';

const NameEnter = () => {
    const [avatarSeed, setAvatarSeed] = useState(Date.now());
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * 16777215).toString(16));
    const [isDisabled, setDisabled] = useState(true);
    const gamePIN = useParams().pin;
    const navigateTo = useNavigate();

    const avatar = createAvatar(micah, {
        seed: avatarSeed.toString(),
        size: 128,
        backgroundColor: [randomColor]
    }).toDataUriSync();

    const handleRandomizeConfig = () => {
        setAvatarSeed(Date.now());
        setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (value.length < 3 || value.length > 10) {
            setError("Name must be between 3 and 10 characters.");
            setDisabled(true);
        } else {
            setError("");
            setDisabled(false);
        }
        setName(value);
    };

    const clickHandler = () => {
        if (name.length >= 3 && name.length <= 10) {
            localStorage.setItem('name', name);
            localStorage.setItem('avatar', avatar);
            socket.emit('joinRoom', { gamePIN: gamePIN, name: localStorage.getItem('name'), avatar: localStorage.getItem('avatar') });

            navigateTo(`/${gamePIN}/waitingroom`);
        } else {
            setError("Name must be between 3 and 10 characters.");
        }
    };

    useEffect(() => {
        setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
        roomJoined();
    }, []);

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
                        <TextField
                            id="outlined-basic"
                            label="Enter Your Name"
                            variant="outlined"
                            value={name}
                            onChange={handleNameChange}
                            error={!!error}
                            helperText={error === "" ? "Name must be between 3 and 10 characters." : error}
                            fullWidth />
                    </div>
                    <div className="bottom-button" style={{ width: '100%', maxWidth: '500px' }}>
                        <AwesomeButton type="primary" disabled={isDisabled} onPress={clickHandler} style={{ width: '100%', maxWidth: '500px' }}>Done!</AwesomeButton>
                    </div>
                </Paper>
            </div>
        </AnimatedPage>
    );
}

export default NameEnter;
