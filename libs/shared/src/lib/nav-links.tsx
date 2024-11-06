import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShopDropdown } from './shop-dropdown';
import { isMobile } from 'react-device-detect';

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
      showAlways: true,
    },
    { title: 'OUR STORY', url: '/about', showAlways: true },

    { title: 'ACCOUNT', url: '/profile/:name', mobileOnly: true },
  ];

  const filteredNavLinks = navLinks.filter(
    (link) => link.showAlways || (link.mobileOnly && isMobile)
  );

  return (
    <div className="gap-5 bg-white bg-opacity-50 rounded md:bg-lightYellow md:flex md:items-center">
      <ul className="md:flex md:items-center gap-4 py-5">
        {filteredNavLinks.map((link) => (
          <Link to={link.url} key={link.title}>
            <div className="flex items-center pb-3 md:p-0">
              <li className="text-2xl pl-4 md:p-0">{link.title}</li>
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
