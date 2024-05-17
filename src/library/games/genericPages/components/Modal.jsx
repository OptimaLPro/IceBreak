import * as React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AwesomeButton } from 'react-awesome-button';

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
    color: 'black',
};

const CustomModal = ({ isOpen, handleClose }) => {
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        <Typography variant="h6" component="h2" style={{marginBottom: '20px'}}>
                            Room not found 😢
                        </Typography>
                        <AwesomeButton type="primary" className='aws-btn--pink' onPress={handleClose}>Try again</AwesomeButton>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default CustomModal;