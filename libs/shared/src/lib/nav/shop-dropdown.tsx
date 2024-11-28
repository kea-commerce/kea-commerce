import { Link } from 'react-router-dom';

import type { Collection } from './types';

const collections: Collection[] = [
  { title: 'All Products', link: 'shop' },
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Household', link: 'household' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
];

export const ShopDropdown = () => {
  return (
    <ul className='pl-7 pb-4 md:bg-lighterYellow md:pr-5 md:pl-2'>
      {collections.map((category) => (
        <Link aria-label={`shop for ${category.title}`} key={category.title} to={`collections/${category.link}`}>
          <li className='py-1.5 hover:text-xl hover:font-medium'>{category.title}</li>
        </Link>
      ))}
    </ul>
  );
};
