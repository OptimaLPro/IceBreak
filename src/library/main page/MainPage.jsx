import Menu from "../utils/menu/Menu";
import Carousel from "./main page components/Carousel";
import SignUp from "../log in pages/SignUp";
import SignIn from "../log in pages/SignIn";

const MainPage = () => {
  return (
    <>
      <Menu />
      <div className="main-page">
        <div className="category-headers">New Games 🔥</div>
        <Carousel />
        <div className="category-headers">Short games 🕒</div>
        <Carousel />
        <div className="category-headers">Short games 🕒</div>
        <Carousel />
        <div className="category-headers">Short games 🕒</div>
        <Carousel />
        <div className="category-headers">Short games 🕒</div>
        <Carousel />
      </div>
    </>
  );
};

export default MainPage;
