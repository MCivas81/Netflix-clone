import { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7b/Eo_circle_red_white_film-camera.svg'
        alt='Movie Logo'
      />
      <img
        className='nav__avatar'
        src='https://lh3.googleusercontent.com/proxy/HzAka9IQokdwXNU-oYZhgzzAZ4l41FR25__YAu5yd0nuHL0P_cQH1my3h9MdEmE59Tm3Cg1qvjtFGTGT2Jgwg_WxoYIswGHxGgjayJPbpO6rwx1Uyk_ebXwDKu_Sai0Guw'
        alt='Movie Avatar'
      />
    </div>
  );
}

export default Nav;
