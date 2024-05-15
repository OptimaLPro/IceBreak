import { useState, useEffect } from "react";
import AnimatedPage from "../../../theme/AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import CustomModal from './components/Modal';
import { useNavigate } from "react-router-dom";
import * as socketFunctions from '../../../utils/socket/socket';

const RoomEnter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Move useNavigate outside of useEffect

    const handleClose = () => {
        setIsOpen(false);
    };

    const clickHandler = () => {
        socketFunctions.checkRoom(document.querySelector('input').value);
    };

    useEffect(() => {
        socketFunctions.roomChecked((data) => {
            if (!data) {
                setIsOpen(true);
            } else {
                navigate(`/${document.querySelector('input').value}/nameenter`);
            }
        });
    }, [navigate]);

    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Join Game</h1>
                <CustomModal isOpen={isOpen} handleClose={handleClose} />
                <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '30px', borderRadius: '15px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <TextField id="outlined-basic" label="Enter Game PIN" variant="outlined" />
                    </div>
                    <div>
                        <AwesomeButton type="primary" style={{ width: '100%' }} onPress={clickHandler}>Enter Game!</AwesomeButton>
                    </div>
                </Paper>
            </div>
        </AnimatedPage>
    );
}

export default RoomEnter;
