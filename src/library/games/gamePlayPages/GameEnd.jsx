import { useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import Confetti from 'react-confetti';
import { Link } from "react-router-dom";
import { socket } from "../../../utils/socket/socket";
import ScoreTable from "./ScoreTable";

const GameEnd = ({ gamePIN }) => {
    useEffect(() => {
        socket.emit('checkRoomOwner', { gamePIN });

        socket.on('isRoomOwner', (isOwner) => {
            if (isOwner) {
                socket.emit('gameEnd', { gamePIN });
            }
        });

        return () => {
            socket.off('isRoomOwner');
        };
    }, [gamePIN]);
    return (
        <>
            <div className="game-end">
                <Confetti
                    drawShape={ctx => {
                        ctx.beginPath()
                        for (let i = 0; i < 22; i++) {
                            const angle = 0.35 * i
                            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                            ctx.lineTo(x, y)
                        }
                        ctx.stroke()
                        ctx.closePath()
                    }}
                />
                <Link to="/">
                    <AwesomeButton type="primary" className="aws-btn--orange">Back Home</AwesomeButton>
                </Link>
                <ScoreTable gamePIN={gamePIN} />
            </div>
        </>
    );
}

export default GameEnd;