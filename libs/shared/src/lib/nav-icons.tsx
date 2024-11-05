import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';

export const NavIcons = () => {
  const iconClass = 'border-2 rounded p-0.5 w-8 h-8';
  const iconList = [
    { icon: <IoSearch className={iconClass} />, url: '/search' },
    { icon: <MdOutlineShoppingCart className={iconClass} />, url: '/cart' },
    // {
    //   icon: <MdOutlineAccountCircle className={iconClass} />,
    //   url: '/profile/:name',
    // },
  ];

  return (
    <ul className="flex items-center gap-2">
      {iconList.map((icon, index) => (
        <Link to={icon.url}>
          <li key={index}>{icon.icon}</li>
        </Link>
      ))}
    </ul>
  );
};
