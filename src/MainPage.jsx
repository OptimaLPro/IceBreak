import Menu from './components/Menu';
import Carousel from './components/Carousel';
import FlickingCarousel from './components/FlickingCarousel';
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from 'react-router-dom';

const MainPage = () => {

return (
    <>
        <Menu />
        
        <div className="main-page">
            <Link to="/enter">
            <div className="category-headers">
                New Games 🔥
            </div>
            </Link>
            <Carousel />
            <div className="category-headers">
                Short games 🕒
            </div>
            <Carousel />
            <div className="category-headers">
                Funny games 😂
            </div>
            <Carousel />
            <div className="category-headers">
                Drinking Games 🍻
            </div>
            <Carousel />
        </div>

    </>
);
}

export default MainPage;
