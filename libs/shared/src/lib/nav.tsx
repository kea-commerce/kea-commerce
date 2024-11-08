import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hamburger } from './hamburger';
import { Logo } from './logo';
import { NavIcons } from './nav-icons';
import { NavLinks } from './nav-links';

export const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className='bg-lightYellow pt-2 pb-2 pl-2.5 pr-2.5'>
      <div className='flex justify-between'>
        {isMobile ? <Hamburger isOpen={hamburgerOpen} onClick={toggleHamburger} /> : null}
        <Logo />
        <div className='flex items-center gap-4'>
          {!isMobile && <NavLinks />}
          <NavIcons />
        </div>
      </div>
      {hamburgerOpen ? <NavLinks /> : null}
    </nav>
  );
};

export default Nav;
