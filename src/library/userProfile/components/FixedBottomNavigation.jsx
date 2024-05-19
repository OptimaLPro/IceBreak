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


 const FixedBottomNavigation = () => {
  const [value, setValue] = React.useState('recents');
  const ref = React.useRef(null);
 

 

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
              {/* <ListItemAvatar>
                <Avatar alt="Profile Picture" src={image} />
              </ListItemAvatar> */}
              <ListItemText primary={gameName} secondary={description} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
}

export default FixedBottomNavigation;