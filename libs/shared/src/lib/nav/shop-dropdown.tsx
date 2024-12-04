import { Link } from 'react-router-dom';

import { collections } from '../collections/types';

export const ShopDropdown = () => {
  return (
    <ul className='pl-7 pb-4 md:bg-lighterYellow md:pr-5 md:pl-2'>
      {collections.map((collection) => (
        <Link aria-label={`shop for ${collection.title}`} key={collection.title} to={`collections/${collection.link}`}>
          <li className='py-1.5 hover:text-xl hover:font-medium'>{collection.title}</li>
        </Link>
      ))}
    </ul>
  );
};
