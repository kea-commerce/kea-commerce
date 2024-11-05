import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShopDropdown } from './shop-dropdown';

export const NavLinks = () => {
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  };
  const navLinks = [
    {
      title: 'SHOP',
      url: '/collections/:collection',
      icon: {
        iconDown: <FaChevronDown className="w-8" />,
        iconUp: <FaChevronUp className="w-8" />,
      },
    },
    { title: 'OUR STORY', url: '/about' },

    { title: 'ACCOUNT', url: '/profile/:name' },
  ];

  return (
    <div className="gap-5 bg-white bg-opacity-50 rounded">
      <ul className="gap-4 py-5">
        {navLinks.map((link, index) => (
          <Link to={link.url}>
            <div className="flex items-center pb-3">
              <li key={index} className="text-2xl pl-4">
                {link.title}
              </li>
              {link.icon && (
                <button onClick={toggleShop}>
                  {shopOpen ? link.icon.iconUp : link.icon.iconDown}
                </button>
              )}
            </div>
            {link.icon && shopOpen && <ShopDropdown />}
          </Link>
        ))}
      </ul>
    </div>
  );
};
