import { useState } from 'react';
import { Link } from 'react-router-dom';

import type { LinkIcons, Links } from './nav-links';
import { ShopDropdown } from './shop-dropdown';

type Props = {
  links: Links;
  icons?: LinkIcons;
};

export const NavLink = ({ links, icons }: Props) => {
  const [shopOpen, setShopOpen] = useState(false);

  const toggleShop = () => {
    setShopOpen(!shopOpen);
  };

  return (
    <Link key={links.title} to={links.url}>
      <div className='flex items-center pb-3 md:p-0'>
        <li className='text-2xl pl-4 md:p-0'>{links.title}</li>
        {icons ? (
          <button onClick={toggleShop} type='button'>
            {shopOpen ? icons.iconUp : icons.iconDown}
          </button>
        ) : undefined}
      </div>
      {links.icon && shopOpen ? <ShopDropdown /> : undefined}
    </Link>
  );
};
