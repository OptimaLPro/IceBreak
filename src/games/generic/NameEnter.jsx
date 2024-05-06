import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../../theme/AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css"; // Import the button styles
import Avatar, { genConfig } from 'react-nice-avatar'

const NameEnter = () => {
    const [config, setConfig] = useState(genConfig());

    const handleRandomizeConfig = () => {
        setConfig(genConfig());
    };

    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Avatar and Name</h1>
                <Paper elevation={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center items horizontally
                    padding: '30px',
                    borderRadius: '15px'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Avatar style={{ width: '100px', height: '100px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }} {...config} />
                    </div>
                    <AwesomeButton size="small" type="secondary" style={{ width: '87%', marginBottom: '20px'}} onPress={handleRandomizeConfig}>Random Avatar 🎲</AwesomeButton>

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
