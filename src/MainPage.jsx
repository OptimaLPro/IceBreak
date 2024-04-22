import Menu from './components/Menu';
import Divider from '@mui/material/Divider';
import { Parallax } from 'react-scroll-parallax';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import shadows from '@mui/material/styles/shadows';
import Search from './components/Search';
import WeatherApp from './WeatherAPI';
import { Button } from '@mui/material';
import { useState } from 'react';
import GameCards from './components/GameCards';
import Carousel from './components/Carousel';


const SearchTheme = styled('div')(({ theme }) => ({
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
        boxShadow: `0 0 10px ${theme.palette.common.white}`,
        transition: theme.transitions.create('box-shadow'),
    },
    // margin: 'auto',
    width: '60%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const MainPage = () => {
    return (
        <>
            <Menu />
            {/* <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
            }}>
                <Search />
            </div> */}
            <Carousel />

        </>
    );
}

export default MainPage;
