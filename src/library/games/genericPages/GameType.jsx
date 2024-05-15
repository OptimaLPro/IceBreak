import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimatedPage from "../../../theme/AnimatedPage";
import { AwesomeButton } from "react-awesome-button";
import "./genericPages.css";
import axios from "axios";
import { socket } from "../../../utils/socket/socket.js";

const GameType = () => {
    const [selectedType, setSelectedType] = useState("");
    const { game } = useParams();
    const selectType = (e) => {
        let buttonText;
        if (e.target.tagName === 'IMG') {
            const siblingSpan = e.target.nextSibling;
            buttonText = siblingSpan.textContent.toLowerCase().replace(/\s+/g, '-');
        }
        else {
            buttonText = e.target.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        const apiUrl = `https://icebreak-backend.onrender.com/${game}/triviaByTag/${buttonText}`;

        setSelectedType(buttonText);

        console.log(apiUrl);
        axios.get(apiUrl)
            .then(response => {
                const fetchedQuestions = response.data;

                console.log(fetchedQuestions);
                socket.emit('sendRoomData', { fetchedQuestions })
            })
            .catch(error => {
                console.log(error);
            });


    };


    return (
        <AnimatedPage>
            <div className="content">
                <h1 className="page-title">Choose your type:</h1>
                <div className="buttons-div">
                    <Link to={`/${game}/${selectedType}/settings`}>
                        <AwesomeButton type="pink" className="gametype" onPress={selectType} >
                            <div className="button-content">
                                <img className="base-image type-image1" src="https://i.ibb.co/V9gVwNV/globe-3.png" alt="quiz" />
                                <span>Countries</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to={`/${game}/${selectedType}/settings`}>
                        <AwesomeButton type="primary" className="gametype" onPress={selectType}>
                            <div className="button-content">
                                <img className="base-image type-image2" src="https://i.ibb.co/7WqHT10/television.png" alt="quiz" />
                                <span>Television</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to={`/${game}/${selectedType}/settings`}>
                        <AwesomeButton type="orange" className="gametype" onPress={selectType}>
                            <div className="button-content">
                                <img className="base-image type-image3" src="https://i.ibb.co/r7Wt2xW/download-football-png-1-1.png" alt="quiz" />
                                <span>Sport</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                    <Link to={`/${game}/${selectedType}/settings`}>
                        <AwesomeButton type="purple" className="gametype" onPress={selectType}>
                            <div className="button-content">
                                <img className="base-image type-image4" src="https://i.ibb.co/kc8xVKL/science-1.png" alt="quiz" />
                                <span>Science</span>
                            </div>
                        </AwesomeButton>

                    </Link>
                    <Link to={`/${game}/${selectedType}/settings`}>
                        <AwesomeButton type="green" className="gametype" onPress={selectType}>
                            <div className="button-content">
                                <img className="base-image type-image5" src="https://i.ibb.co/tJj0srQ/pngtree-real-monkey-vector-png-image-6914142-1.png" alt="quiz" />
                                <span>Animals</span>
                            </div>
                        </AwesomeButton>
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default GameType;
