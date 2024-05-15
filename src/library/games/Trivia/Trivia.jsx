import React, { useEffect, useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import './Trivia.css';
import "../../../assets/css/Awesome_Buttons.css"
import CountdownCounter from '../genericPages/components/CountdownCounter.jsx';
import Confetti from 'react-confetti'
import PreQuestion from './components/PreQuestion.jsx';
import { Box } from '@mui/material';

const Trivia = ({ data }) => {
    const defaultButtonColors = ['green', 'purple', 'pink', 'orange'];
    const [questionIndex, setQuestionIndex] = useState(0);
    const [randomOptions, setRandomOptions] = useState([]);
    const [disable, setDisable] = useState(false);
    const [selectedOption, setSelectedOption] = useState(-1);
    const [playerAnswer, setPlayerAnswer] = useState(null);
    const [answerIndex, setAnswerIndex] = useState(-1);
    const [buttonColors, setButtonColors] = useState(defaultButtonColors);
    const [confetti, setConfetti] = useState(false);
    const [showPreQuestion, setShowPreQuestion] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        console.log(data);
        const fetchedQuestion = data[questionIndex];
        setCurrentQuestion(fetchedQuestion);
        setAnswer(fetchedQuestion.options[0]);
        setRandomOptions(fetchedQuestion.options.sort(() => Math.random() - 0.5));
    }, [questionIndex]);

    const toggleShowPreQuestion = () => {
        setShowPreQuestion(!showPreQuestion);
    };

    const checkAnswer = (playerAnswer) => {
        const updatedColors = [...buttonColors];
        console.log(playerAnswer);
        console.log(answer);
        if (playerAnswer === answer) {
            updatedColors[selectedOption] = 'green';
            setConfetti(true);
        } else {
            if (playerAnswer) {
                updatedColors[selectedOption] = 'red';
            }
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

    const onCompleteState = () => {
        if (selectedOption === -1) {
            setSelectedOption(999);
            setDisable(true);
            checkAnswer(null);
        }
        else {
            checkAnswer(playerAnswer);
        }

        setTimeout(() => {
            setShowPreQuestion(true);
            setQuestionIndex(questionIndex + 1);
            setDisable(false);
            setSelectedOption(-1);
            setPlayerAnswer(null);
            setAnswerIndex(-1);
            setConfetti(false);
            setButtonColors(defaultButtonColors);
        }, 5000);
        return { shouldRepeat: true, delay: 5 };
    }

    return (
        <div className="container">
            {confetti && <Confetti numberOfPieces={1500} recycle={false} />}
            {showPreQuestion && (
                <Box sx={{ width: '100%' }}>
                    <PreQuestion question={currentQuestion ? currentQuestion.question : ''}
                        toggleShowPreQuestion={toggleShowPreQuestion} />
                </Box>
            )}
            {!showPreQuestion && (<>
                <div className="question">{currentQuestion.question}</div>
                <div><CountdownCounter duration={7} size={130} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setDisable={setDisable} onCompleteState={onCompleteState} /></div>
                <div className="button-container">
                    <div className="button-group">
                        {randomOptions.slice(0, 2).map((option, index) => (
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
                        {randomOptions.slice(2).map((option, index) => (
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
            </>)}
        </div>
    );
};

export default Trivia;