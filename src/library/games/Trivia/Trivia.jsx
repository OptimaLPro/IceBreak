import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './Trivia.css';
import "../../../assets/css/Awesome_Buttons.css"
import { triviaData } from './triviaData.js';
import CountdownCounter from '../genericPages/components/CountdownCounter.jsx';
import Confetti from 'react-confetti'

const Trivia = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [disable, setDisable] = useState(false);
    const [selectedOption, setSelectedOption] = useState(-1);
    const [playerAnswer, setPlayerAnswer] = useState(null);
    const [answerIndex, setAnswerIndex] = useState(-1);
    const [buttonColors, setButtonColors] = useState(['green', 'purple', 'pink', 'orange']);
    const [confetti, setConfetti] = useState(false);

    const checkAnswer = (playerAnswer) => {
        const currentQuestion = triviaData[questionIndex];
        const answer = currentQuestion.options[0];
        const updatedColors = [...buttonColors];
        if (playerAnswer === answer) {
            console.log('Correct');
            updatedColors[selectedOption] = 'green';
            setConfetti(true);
        } else {
            console.log('Wrong');
            updatedColors[selectedOption] = 'red';
            currentQuestion.options.forEach((option, index) => {
                if (option === answer) {
                    updatedColors[index] = 'green';
                    setAnswerIndex(index);
                }
            });
        }
        setButtonColors(updatedColors);
    };

    const handleButtonClick = (index, option) => {
        setDisable(true);
        setSelectedOption(index);
        setPlayerAnswer(option);
    };

    const currentQuestion = triviaData[questionIndex];
    const options = currentQuestion.options;

    const onCompleteState = () => {
        if (selectedOption === -1) {
            setSelectedOption(999);
            setDisable(true);
        }
        else {
            checkAnswer(playerAnswer);
            return true;
        }
    }

    return (
        <div className="container">
            { confetti && <Confetti numberOfPieces={1500} recycle={false}/>}
            <div className="question">{currentQuestion.question}</div>
            <div><CountdownCounter duration={2} size={130} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setDisable={setDisable} onCompleteState={onCompleteState} /></div>
            <div className="button-container">
                <div className="button-group">
                    {options.slice(0, 2).map((option, index) => (
                        <AwesomeButton
                            key={index}
                            type="primary"
                            onPress={() => handleButtonClick(index, option)}
                            // className={`button aws-btn aws-btn--${selectedOption !== -1 && selectedOption === index ? buttonColors[index] : selectedOption === -1 ? buttonColors[index] : 'grey'}`}
                            className={`button aws-btn aws-btn--${selectedOption !== -1 && selectedOption === index ? buttonColors[index] : selectedOption === -1 ? buttonColors[index] : answerIndex === index && answerIndex != -1 ? 'green' : 'grey'}`}
                            disabled={disable}
                        >
                            {option}
                        </AwesomeButton>
                    ))}
                </div>
                <div className="button-group">
                    {options.slice(2).map((option, index) => (
                        <AwesomeButton
                            key={index + 2}
                            type="primary"
                            onPress={() => handleButtonClick(index + 2, option)}
                            className={`button aws-btn aws-btn--${selectedOption !== -1 && selectedOption === index + 2 ? buttonColors[index + 2] : selectedOption === -1 ? buttonColors[index + 2] : answerIndex === index + 2 && answerIndex != -1 ? 'green' : 'grey'}`}
                            disabled={disable}
                        >
                            {option}
                        </AwesomeButton>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trivia;