import { type Product } from '@kea-commerce/shared/models';

export const mockProduct = () => {
  const createdAtDate = new Date('2024-05-18T04:33:59.275Z');
  const updatedAtDate = new Date('2024-11-14T05:50:29.052Z');

  const product: Product = {
    id: '2d16767d-935a-4b98-ad4d-d8f6bb61aac6',
    name: 'Coffee Robot',
    price: 60,
    productImage: 'https://dummyimage.com/200x200/e28743/21130d&text=coffee+robot',
    description: 'This robot will make your coffee every morning to wake you, stunning',
    category: 'Home',
    stock: 15,
    rating: 5,
    createdAt: createdAtDate,
    updatedAt: updatedAtDate,
  };
  return product;
};
