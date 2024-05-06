import { Link } from "react-router-dom";
import AnimatedPage from "../../theme/AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css"; // Import the button styles
import { Margin } from "@mui/icons-material";

const RoomEnter = () => {
    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Game Enter</h1>

                <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '30px', borderRadius: '15px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <TextField id="outlined-basic" label="Enter Room PIN" variant="outlined" />
                    </div>
                    <div>
                        <Link to="/nameenter">
                            <AwesomeButton type="primary" style={{ width: '100%' }}>Enter Game!</AwesomeButton>
                        </Link>
                    </div>
                </Paper>
            </div>
        </AnimatedPage>
    );
}

export default RoomEnter;
