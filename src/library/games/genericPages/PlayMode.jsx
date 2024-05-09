import { Link } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { Margin } from "@mui/icons-material";

const RoomEnter = () => {
    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">What you wanna do?</h1>
                <div style={{ marginTop: '50px' }}>
                    <Link to="/enter">
                        <AwesomeButton type="pink" className="playmode">🔗 Join Game</AwesomeButton>
                    </Link>
                    <Link to="/waitingroom">
                        <AwesomeButton type="orange" className="playmode" >➕ Create Game</AwesomeButton>
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default RoomEnter;
