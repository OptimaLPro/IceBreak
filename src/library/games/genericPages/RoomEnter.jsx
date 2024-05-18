import { TextField } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import * as socketFunctions from '../../../utils/socket/socket';
import CustomModal from './components/Modal';

const RoomEnter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Move useNavigate outside of useEffect

    const handleClose = () => {
        setIsOpen(false);
    };

    const clickHandler = () => {
        const input = document.querySelector('input').value;
        console.log(input.toUpperCase());
        socketFunctions.checkRoom(input.toUpperCase());
    };

    useEffect(() => {
        socketFunctions.roomChecked((data) => {
            if (!data) {
                setIsOpen(true);
            } else {
                navigate(`/${document.querySelector('input').value.toUpperCase()}/nameenter`);
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