import ScoreTable from "./ScoreTable";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const GameEnd = ({ gamePIN }) => {
    return (
        <>
            <div className="game-end">
                <Link to="/">
                    <AwesomeButton type="primary" className="aws-btn--orange">Back Home</AwesomeButton>
                </Link>
                <ScoreTable gamePIN={gamePIN} />
            </div>
        </>
    );
}

export default GameEnd;