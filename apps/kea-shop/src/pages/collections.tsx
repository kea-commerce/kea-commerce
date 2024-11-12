import { type Products } from './type';

const products: Products[] = [
  { name: 'Soy Candle', price: 4.99, productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image' },
  {
    name: 'E-Kea Vegan Hand soap',
    price: 5.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'E-Kea Vegan Lip Butter',
    price: 7.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'Mouthwash tablets',
    price: 12.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  { name: 'Face Masks', price: 10.99, productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image' },
  {
    name: 'Shaving Soap',
    price: 4.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'Compostable Pet Waste Bags',
    price: 8.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: "Bee's Wax Bread Wrap",
    price: 10.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'Glass Coffee Cup',
    price: 15.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'Reusable Cutlery Set',
    price: 17.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
  {
    name: 'E-Kea - Vegan Body Soap',
    price: 8.99,
    productImage: 'https://dummyimage.com/200x300/cccccc/000000&text=Product+Image',
  },
];

export const Collections = () => {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.name}>
            {item.productImage}
            {item.name}
            {`$${item.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
