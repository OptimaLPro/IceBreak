import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import './gamePlay.css';

const ScoreTable = ({ playersScore }) => {
    return (
        <div className="score-table-container">
            <div>
                <h2>Score Table</h2>
            </div>
            <div className="list-wrapper">
                <List sx={{ width: '100%', '& .MuiListItemText-primary': { fontWeight: 'bold', fontSize: '20px', textAlign: 'center' } }}>
                    {playersScore.map((player, index) => (<>
                        <ListItem className='players-list' key={player.avatar} >
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