import axios from "axios";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import { socket } from "../../../utils/socket/socket.js";
import Loading from "./components/Loading.jsx";
import "./genericPages.css";

const GameType = () => {
    const [loading, setLoading] = useState(false);
    const { game } = useParams();

    const navigateTo = useNavigate();
    const navigateToSettings = (buttonText) => {
        navigateTo(`/${game}/${buttonText}/settings`);
    };

    const selectType = (e) => {
        setLoading(true);
        let buttonText;
        if (e.target.tagName === 'IMG') {
            const siblingSpan = e.target.nextSibling;
            buttonText = siblingSpan.textContent.toLowerCase().replace(/\s+/g, '-');
        }
        else {
            buttonText = e.target.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        const apiUrl = `https://icebreak-backend.onrender.com/${game}/triviaByTag/${buttonText}`;

        axios.get(apiUrl)
            .then(response => {
                const fetchedQuestions = response.data;
                socket.emit('sendRoomData', { fetchedQuestions })
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                navigateToSettings(buttonText);
            });
    };

    return (
        <AnimatedPage>
            <div className={`content ${loading ? 'loading-overlay' : ''}`}>
                <h1 className="page-title">Choose your type:</h1>
                <div className="buttons-div">
                    <AwesomeButton type="pink" className="gametype" onPress={selectType} >
                        <div className="button-content">
                            <img className="base-image type-image1" src="https://i.ibb.co/V9gVwNV/globe-3.png" alt="quiz" />
                            <span>Countries</span>
                        </div>
                    </AwesomeButton>
                    <AwesomeButton type="primary" className="gametype" onPress={selectType}>
                        <div className="button-content">
                            <img className="base-image type-image2" src="https://i.ibb.co/7WqHT10/television.png" alt="quiz" />
                            <span>Television</span>
                        </div>
                    </AwesomeButton>
                    <AwesomeButton type="orange" className="gametype" onPress={selectType}>
                        <div className="button-content">
                            <img className="base-image type-image3" src="https://i.ibb.co/r7Wt2xW/download-football-png-1-1.png" alt="quiz" />
                            <span>Sport</span>
                        </div>
                    </AwesomeButton>
                    <AwesomeButton type="purple" className="gametype" onPress={selectType}>
                        <div className="button-content">
                            <img className="base-image type-image4" src="https://i.ibb.co/kc8xVKL/science-1.png" alt="quiz" />
                            <span>Science</span>
                        </div>
                    </AwesomeButton>
                    <AwesomeButton type="green" className="gametype" onPress={selectType}>
                        <div className="button-content">
                            <img className="base-image type-image5" src="https://i.ibb.co/tJj0srQ/pngtree-real-monkey-vector-png-image-6914142-1.png" alt="quiz" />
                            <span>Animals</span>
                        </div>
                    </AwesomeButton>
                </div>
            </div>
            {loading && <Loading />}
        </AnimatedPage>
    );
}

export default GameType;