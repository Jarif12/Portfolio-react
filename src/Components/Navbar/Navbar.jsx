import { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <svg width="120" height="57" viewBox="0 0 120 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68 42.39C68 41.3438 68.9096 40.53 69.9493 40.6459L101.251 44.136C105.227 44.5794 108.591 41.226 108.161 37.2483C107.713 33.1161 103.434 30.5622 99.5844 32.1306L70.4171 44.0151C69.2629 44.4854 68 43.6363 68 42.39Z" fill="url(#paint0_linear_2205_14)" />
        <defs>
          <linearGradient id="paint0_linear_2205_14" x1="219.1" y1="39.9983" x2="202.599" y2="91.4037" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DF8908" />
            <stop offset="1" stopColor="#B415FF" />
          </linearGradient>
        </defs>
        <text x="13" y="44" fontFamily="Share Tech" letterSpacing={3} fontSize="42" fill="white">Zarif</text>
      </svg>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}><p>Home</p></AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => setMenu("about")}><p>About Me</p></AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => setMenu("services")}><p>Services</p></AnchorLink>
          {menu === "services" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => setMenu("work")}><p>Portfolio</p></AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}><p>Contact</p></AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
