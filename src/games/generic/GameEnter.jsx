import { Link } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";


const GameEnter = () => {
    return (<>
        <AnimatedPage >
            <div>Hello world</div>
            <Link to="/">Back</Link>
        </AnimatedPage>
    </>);
}

export default GameEnter;