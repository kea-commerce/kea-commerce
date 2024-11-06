import { Hamburger } from './hamburger';
import { NavLinks } from './nav-links';
import { Logo } from './logo';
import { NavIcons } from './nav-icons';

import { useState } from 'react';
import { isMobile } from 'react-device-detect';

export function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="bg-lightYellow pt-2 pb-2 pl-2.5 pr-2.5">
      <div className="flex justify-between">
        {isMobile && (
          <Hamburger onClick={toggleHamburger} isOpen={hamburgerOpen} />
        )}
        <Logo />
        <div className="flex items-center gap-4">
          {!isMobile && <NavLinks />}
          <NavIcons />
        </div>
      </div>
      {hamburgerOpen && <NavLinks />}
    </nav>
  );
}

export default Nav;
