import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './fixedBottomNavigationStyle.css';
import dummyData from "../dummyData";

 const refreshMessages= () => {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
 const FixedBottomNavigation = () => {
  const [value, setValue] = React.useState('recents');
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <>
      <CssBaseline />
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          '& .css-16lloyr-MuiBottomNavigation-root': {
            backgroundColor: 'transparent', 
          },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction value={'recents'} label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction value={'favorites'} label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
      <Box sx={{ pb: 7 }} ref={ref}>
        <List>
          {dummyData[value].map(({ gameName, description, image }, index) => (
            <ListItemButton key={index + gameName}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={image} />
              </ListItemAvatar>
              <ListItemText primary={gameName} secondary={description} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  }
];

export default FixedBottomNavigation;