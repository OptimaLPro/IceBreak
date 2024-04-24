import Menu from './components/Menu';
import Carousel from './components/Carousel';
import FlickingCarousel from './components/FlickingCarousel';
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const MainPage = () => {

return (
    <>
        <Menu />
        
        {/* <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div className=" number-slide1 " onClick={() => setFlip(!flip)}>1</div>
            <div className=" number-slide2 " onClick={() => setFlip(!flip)}>2</div>
        </ReactCardFlip> */}
        <div className="main-page">

            {/* <div className="category-headers">
                New Games 🔥
            </div>
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
            <div className="category-headers">
                Short games 🕒
            </div>
            <Carousel /> */}
        </div>

    </>
);
}

export default MainPage;
