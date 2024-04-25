import { Link } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css"; // Import the button styles

const GameEnter = () => {
    return (<>
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Game Enter</h1>

                <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '30px', borderRadius: '15px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <TextField id="outlined-basic" label="Enter Room PIN" variant="outlined" />
                    </div>
                    <div>
                        <AwesomeButton type="primary" style={{ width: '100%' }}>Enter Game!</AwesomeButton>
                    </div>
                </Paper>
            </div>
        </AnimatedPage>
    </>);
}

export default GameEnter;
