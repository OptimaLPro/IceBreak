import Menu from "../utils/menu/Menu";
import Carousel from "./main page components/Carousel";
import SignUp from "../logInPages/SignUp";
import SignIn from "../logInPages/SignIn";

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
