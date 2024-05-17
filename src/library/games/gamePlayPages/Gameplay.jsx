import React, { useEffect, useState } from "react";
import Trivia from "../Trivia/Trivia";
import { useParams } from "react-router-dom";
import { socket } from "../../../utils/socket/socket";

const Gameplay = () => {
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { pin } = useParams();
    const [questionSec, setQuestionSec] = useState(0);

    useEffect(() => {
        socket.emit('getRoomData', { gamePIN: pin });
        const handleRoomData = (data) => {
            console.log('Room data:', data);
            setData(data);
            setIsLoaded(true);
        };
        socket.on('resRoomData', handleRoomData);

        socket.emit('getQuestionSec', { gamePIN: pin });
        socket.on('resQuestionSec', (data) => {
            setQuestionSec(data);
        });

        return () => {
            socket.off('resRoomData', handleRoomData);
        };
    }, [pin]);

    return (
        <>
            {isLoaded && <Trivia data={data} gamePIN={pin} questionSec={questionSec} />}
        </>
    );
}

export default Gameplay;