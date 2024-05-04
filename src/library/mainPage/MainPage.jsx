import Menu from "../utils/menu/Menu";
import Carousel from "./mainPageComponents/Carousel";
import SignUp from "../logInPages/SignUp";
import ProfilePage from "../profilePage/ProfilePage";

const MainPage = () => {
  return (
    <>
      <Menu />{" "}
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
        <Carousel />{" "}
      </div>
    </>
  );
};

export default MainPage;
