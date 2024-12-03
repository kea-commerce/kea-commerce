import { type Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Clean the table first
  await knex('products').del();

  // Insert sample products
  await knex('products').insert([
    {
      name: 'Sample Product 1',
      price: 29.99,
      product_image: 'https://placeholder.co/400',
      stock: 100,
      description: 'This is a sample product description',
      category: 'Electronics',
      rating: 4.5,
    },
    {
      name: 'Sample Product 2',
      price: 49.99,
      product_image: 'https://placeholder.co/400',
      stock: 50,
      description: 'Another sample product description',
      category: 'Home & Garden',
      rating: 4.8,
    },
  ]);
}
