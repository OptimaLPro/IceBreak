import Menu from './components/Menu';
import Carousel from './components/Carousel';


const MainPage = () => {
    return (
        <>
            <Menu />
            <div className="category-headers">
                New Games 🔥
            </div>
            <Carousel />
            <div className="category-headers">
                Short games 🕒
            </div>
            <Carousel />

        </>
    );
}

export default MainPage;
