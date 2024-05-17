import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Twirl as Hamburger } from 'hamburger-react';
import '../../../assets/css/Burger_menu.css';
import { Link } from 'react-router-dom';

const BurgerMenuNew = ({ isOpen = false, onStateChange = () => { } }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const handleMenuClick = () => {
    setMenuOpen(false);
    onStateChange({ isOpen: false });
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={(state) => { setMenuOpen(state.isOpen); onStateChange(state); }} customBurgerIcon={<Hamburger rounded size={25} />} >
      <Link to="/" className='menu-item' onClick={handleMenuClick}><div id="home">🏠 Home</div></Link>
      <Link to="/enter" className='menu-item' onClick={handleMenuClick}><div id="join-room">🔗 Join Game</div></Link>
      <Link to="/search" className='menu-item' onClick={handleMenuClick}><div id="search">🔍 Search Game</div></Link>
      <Link to="/survey" className='menu-item' onClick={handleMenuClick}><div id="suvey">📋 Survey</div></Link>
      <Link to="/share" className='menu-item' onClick={handleMenuClick}><div id="share">▶️ Share</div></Link>
      <Link to="/test" className='menu-item' onClick={handleMenuClick}><div id="test">🧪 Test</div></Link>
    </Menu>
  );
};

export default BurgerMenuNew;
