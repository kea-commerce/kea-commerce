cimport { Link } from 'react-router-dom';

const collections = [
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Home', link: 'home' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
  { title: 'Shop All Products', link: 'shop' },
];

export const ShopDropdown = () => {
  return (
    <ul className="pl-7 pb-4">
      {collections.map((category, index) => (
        <Link
          to={`collections/${category.link}`}
          aria-label={`shop for ${category.title}`}
        >
          <li key={index}>{category.title}</li>
        </Link>
      ))}
    </ul>
  );
};
