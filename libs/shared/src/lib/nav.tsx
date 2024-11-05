import { Hamburger } from './hamburger';
import { NavLinks } from './nav-links';
import { Logo } from './logo';
import { NavIcons } from './nav-icons';

export function Nav() {
  return (
    <nav className="bg-lightYellow pt-2 pb-2">
      {/* <NavLinks /> */}

      <div className="flex justify-between">
        <Hamburger />
        <Logo />
        <NavIcons />
      </div>
    </nav>
  );
}

export default Nav;
