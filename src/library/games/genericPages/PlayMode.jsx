import { Link } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import { AwesomeButton } from "react-awesome-button";

const RoomEnter = () => {
    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">What you wanna do?</h1>
                <div style={{ marginTop: '50px' }}>
                    <Link to="/enter">
                        <AwesomeButton type="pink" className="playmode">🔗 Join Game</AwesomeButton>
                    </Link>
                    <Link to="/type">
                        <AwesomeButton type="orange" className="playmode" >➕ Create Game</AwesomeButton>
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default RoomEnter;
