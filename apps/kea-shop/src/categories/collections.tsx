import { Link } from 'react-router-dom';

import type { Collection } from '@kea-commerce/shared/nav/types';

const collections: Collection[] = [
  { title: 'All Products', link: 'shop' },
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Home', link: 'home' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
];

export const Collections = () => {
  return (
    <ul className='p-2 md:text-lg'>
      {collections.map((category) => (
        <li key={category.title}>
          <Link aria-label={`shop for ${category.title}`} key={category.title} to={`/collections/${category.link}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
