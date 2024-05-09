import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './Trivia.css';
import "../../../assets/css/Awesome_Buttons.css"
import { triviaData } from './triviaData.js';
import CountdownCounter from '../genericPages/components/CountdownCounter.jsx';

const Trivia = () => {
    const [questionIndex, setQuestionIndex] = useState(0); // State to store the current question index
    const [disable, setDisable] = useState(false); // State to disable buttons after click
    const [selectedOption, setSelectedOption] = useState(-1); // State to store the selected option

    // Function to handle button click
    const handleButtonClick = (index) => {
        setDisable(true);
        setSelectedOption(index);
    };

    const currentQuestion = triviaData[questionIndex];
    const options = currentQuestion.options;

    const buttonColors = ['green', 'purple', 'pink', 'orange'];

    const onCompleteState = () => {
        if (selectedOption === -1) {
            setSelectedOption(999);
            setDisable(true);
        }
        else {
            return true;
        }
    }

    return (
        <div className="container">
            <div className="question">{currentQuestion.question}</div>
            <div><CountdownCounter duration={15} size={130} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setDisable={setDisable} onCompleteState={onCompleteState} /></div>
            <div className="button-container">
                <div className="button-group">
                    {options.slice(0, 2).map((option, index) => (
                        <AwesomeButton
                            key={index}
                            type="primary"
                            onPress={() => handleButtonClick(index)}
                            className={`button aws-btn aws-btn--${selectedOption !== -1 && selectedOption === index ? buttonColors[index] : selectedOption === -1 ? buttonColors[index] : 'grey'}`}
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
                            onPress={() => handleButtonClick(index + 2)}
                            className={`button aws-btn aws-btn--${selectedOption !== -1 && selectedOption === index + 2 ? buttonColors[index + 2] : selectedOption === -1 ? buttonColors[index + 2] : 'grey'}`}
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
