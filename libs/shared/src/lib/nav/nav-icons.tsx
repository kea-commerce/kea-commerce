import { isMobile } from 'react-device-detect';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import type { LinkIcon } from './type';

export const NavIcons = () => {
  const iconClass = 'border-2 border-black rounded-full p-0.5 w-8 h-8 md:p-1';

  const iconList: LinkIcon[] = [
    {
      icon: <IoSearch className={iconClass} />,
      url: '/search',
      label: 'search',
      showAlways: true,
    },
    {
      icon: <MdOutlineShoppingCart className={iconClass} />,
      url: '/cart',
      label: 'shopping cart',
      showAlways: true,
    },
    {
      icon: <MdOutlineAccountCircle className={iconClass} />,
      url: '/profile/:name',
      label: 'account',
      desktopOnly: true,
    },
  ];

  const filteredNavIcons = iconList.filter((icon) => icon.showAlways || (icon.desktopOnly && !isMobile));

  return (
    <ul className='flex items-center gap-2 md:p-2 md:gap-3'>
      {filteredNavIcons.map((icon) => (
        <Link aria-label={icon.label} key={icon.label} to={icon.url}>
          <li key={icon.label}>{icon.icon}</li>
        </Link>
      ))}
    </ul>
  );
};
