import Menu from './components/Menu';
import Divider from '@mui/material/Divider';
import { Parallax } from 'react-scroll-parallax';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import shadows from '@mui/material/styles/shadows';
import Search from './components/Search';

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


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh'
            }}>
                    <Search />
                {/* <Search >
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: 'gray' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ color: 'black' }}
                    />
                </Search> */}
            </div>



            {/* </div > */}
            {/* <div style={{ height: 'calc(100vh)' }}>
                

            </div> */}
            {/* <Divider sx={{ borderBottom: '10px solid #1ba5e0' }} /> */}
            {/* <div style={{ height: 'calc(100vh - 10px)' }}>
                <div className="parallax">
                    Hey
                </div>

            </div>
            <Divider sx={{ borderBottom: '10px solid #1ba5e0' }} />
            <div style={{ height: 'calc(100vh - 10px)' }}>
                there

            </div>
            <Divider sx={{ borderBottom: '10px solid #1ba5e0' }} /> */}
        </>
    );
}

export default MainPage;
