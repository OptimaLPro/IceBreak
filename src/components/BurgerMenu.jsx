import { bubble as Menu } from 'react-burger-menu'
import { Twirl as Hamburger } from 'hamburger-react';
import '../assets/css/Burger_menu.css'

const BurgerMenuNew = () => {
  return (
    <Menu customBurgerIcon={<Hamburger rounded size={25} />}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/">Join Room</a>
      <a id="contact" className="menu-item" href="/">Filter By</a>
      <a id="contact" className="menu-item" href="/">Share</a>
    </Menu>
  );
}

export default BurgerMenuNew;