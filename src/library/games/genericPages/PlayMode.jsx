import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import MustSignInModal from "./components/MustSignInModal";

const PlayMode = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [isOpen, setIsOpen] = useState(false);
    const { game } = useParams();
    const navigateTo = useNavigate();

    const handleClose = () => {
        setIsOpen(false);
    };

    const clickHandler = () => {
        if (!accessToken) {
            setIsOpen(true);
        }
        else {
            navigateTo(`/${game}/type`);
        }
    };

    return (
        <AnimatedPage>
            <div className="content">
                <MustSignInModal isOpen={isOpen} handleClose={handleClose} />
                <h1 className="page-title">What you wanna do?</h1>
                <div style={{ marginTop: '50px' }}>
                    <Link to={`/enter`}>
                        <AwesomeButton type="pink" className="playmode" onPress={() => clickHandler()}>🔗 Join Game</AwesomeButton>
                    </Link>
                    <AwesomeButton type="orange" className="playmode" onPress={() => clickHandler()} >➕ Create Game</AwesomeButton>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default PlayMode;