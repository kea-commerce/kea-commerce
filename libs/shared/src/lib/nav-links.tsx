import { FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const NavLinks = () => {
  const navLinks = [
    { title: 'OUR STORY', url: '/about' },
    {
      title: 'SHOP',
      url: '/collections/:collection',
      icon: <FaChevronDown className="w-8" />,
    },
    { title: 'ACCOUNT', url: '/profile/:name' },
  ];

  return (
    <div className="gap-5">
      <ul className="gap-4">
        {navLinks.map((link, index) => (
          <Link to={link.url}>
            <div className="flex items-center">
              <li key={index} className="text-2xl">
                {link.title}
              </li>
              {link.icon && <span>{link.icon}</span>}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
