import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { isMobile } from 'react-device-detect';

export const NavIcons = () => {
  const iconClass = 'border rounded p-0.5 w-8 h-8 md:p-1';
  const iconList = [
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

  const filteredNavIcons = iconList.filter(
    (icon) => icon.showAlways || (icon.desktopOnly && !isMobile)
  );

  return (
    <ul className="flex items-center gap-2 md:p-2 md:gap-3">
      {filteredNavIcons.map((icon) => (
        <Link to={icon.url} aria-label={icon.label} key={icon.label}>
          <li>{icon.icon}</li>
        </Link>
      ))}
    </ul>
  );
};
