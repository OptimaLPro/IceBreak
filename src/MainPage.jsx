import Menu from './components/Menu';
import Carousel from './components/Carousel';


const MainPage = () => {
    return (
        <>
            <Menu />
            <div className="main-page">
                <div className="category-headers">
                    New Games 🔥
                </div>
                <Carousel />
                <div className="category-headers">
                    Short games 🕒
                </div>
                <Carousel />
                <div className="category-headers">
                    Short games 🕒
                </div>
                <Carousel />
                <div className="category-headers">
                    Short games 🕒
                </div>
                <Carousel />
                <div className="category-headers">
                    Short games 🕒
                </div>
                <Carousel />
            </div>

        </>
    );
}

export default MainPage;
