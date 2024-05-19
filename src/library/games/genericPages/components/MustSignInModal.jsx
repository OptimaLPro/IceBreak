import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router-dom';

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

const MustSignInModal = ({ isOpen, handleClose }) => {
    const navigateTo = useNavigate();
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
                        <Typography variant="h6" component="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>
                            Opppssss...
                        </Typography>
                        <Typography variant="h6" component="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>
                            To create a room you need to sign in first!
                        </Typography>
                        <AwesomeButton type="primary" className='aws-btn--pink' style={{marginBottom: '10px'}} onPress={() => navigateTo('/signin')}>Signin</AwesomeButton>
                        <AwesomeButton type="primary" onPress={handleClose}>Close</AwesomeButton>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default MustSignInModal;