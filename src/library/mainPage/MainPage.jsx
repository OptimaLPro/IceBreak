
import Carousel from './mainPageComponents/Carousel';
import FlickingCarousel from './mainPageComponents/FlickingCarousel';
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../../assets/css/Awesome_Buttons.css';

const MainPage = () => {

    return (
        <>
            <AnimatedPage>
                <div className="main-page">
                    <Link to="/test" style={{textDecoration: 'none'}}>
                        <div className="category-headers">
                            <AwesomeButton type="primary">Test page</AwesomeButton>
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
            </AnimatedPage>
        </>
    );
}

export default MainPage;
