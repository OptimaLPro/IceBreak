import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { socket } from '../../../utils/socket/socket';
import './gamePlay.css';

const ScoreTable = ({ gamePIN }) => {
    const [playersScore, setPlayersScore] = useState([]);

    useEffect(() => {
        socket.emit('getPlayersScore', { gamePIN });

        socket.on('resPlayersScore', (data) => {
            setPlayersScore(data);
        });
    }, []);

    return (
        <div className="score-table-container">
            <div>
                <h2>Score Table</h2>
            </div>
            <div className="list-wrapper">
                <List sx={{ width: '100%', '& .MuiListItemText-primary': { fontWeight: 'bold', fontSize: '20px', textAlign: 'center' } }}>
                    {playersScore.map((player, index) => (<>
                        <ListItem className='players-list' key={index} >
                            <ListItemAvatar>
                                <img src={player.avatar} alt="Avatar" className='avatar-img' />
                            </ListItemAvatar>
                            <ListItemText primary={player.name} />
                            <ListItemText primary={player.score} />
                        </ListItem>
                        {playersScore.length < (index - 1) && <Divider variant="middle" component="li" />}
                    </>))}
                </List>
            </div>
        </div>
    );
};

export default ScoreTable;