import { isMobile } from 'react-device-detect';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { NavLink } from './nav-link';
import type { NavLinkItem } from './types';

export const NavLinks = () => {
  const navLinks: NavLinkItem[] = [
    {
      title: 'SHOP',
      url: '/collections/shop',
      icon: {
        iconDown: <FaChevronDown className='w-8' />,
        iconUp: <FaChevronUp className='w-8' />,
      },
      showAlways: true,
    },
    { title: 'OUR STORY', url: '/about', showAlways: true },

    { title: 'ACCOUNT', url: '/profile/:name', mobileOnly: true },
  ];

  const filteredNavLinks = navLinks.filter((link) => link.showAlways || (link.mobileOnly && isMobile));

  return (
    <div className='gap-5 bg-white bg-opacity-50 rounded md:bg-lightYellow md:flex md:items-center'>
      <ul className='relative md:flex md:items-center gap-4 py-5'>
        {filteredNavLinks.map((link) => (
          <NavLink icons={link.icon} key={link.title} links={link} />
        ))}
      </ul>
    </div>
  );
};
