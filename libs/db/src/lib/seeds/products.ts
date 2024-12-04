import { type Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Clean the table first
  await knex('products').del();

  // Insert sample products
  await knex('products').insert([
    // Bath & Body
    {
      name: 'Natural Lavender Bar Soap',
      price: 8.99,
      product_image: 'https://i.imgur.com/kWvEsnr.jpeg',
      stock: 150,
      description:
        'Handmade soap bar with pure lavender essential oil and moisturizing shea butter. Gentle on skin and naturally antiseptic.',
      category: 'bath-body',
      rating: 4.8,
    },
    {
      name: 'Bamboo Loofah Sponge',
      price: 6.99,
      product_image: 'https://i.imgur.com/Do1ku9X.jpeg',
      stock: 200,
      description: 'Eco-friendly natural loofah made from sustainable bamboo. Perfect for gentle exfoliation.',
      category: 'bath-body',
      rating: 4.6,
    },

    // Household
    {
      name: 'Reusable Microfiber Cleaning Cloths (Pack of 6)',
      price: 15.99,
      product_image: 'https://i.imgur.com/iYh1z0k.jpeg',
      stock: 120,
      description: 'Ultra-absorbent microfiber cloths for all surfaces. Machine washable and eco-friendly.',
      category: 'household',
      rating: 4.9,
    },
    {
      name: 'Natural Reed Diffuser Set',
      price: 24.99,
      product_image: 'https://i.imgur.com/a72ymNf.jpeg',
      stock: 75,
      description: 'Long-lasting essential oil diffuser with natural reed sticks. Fresh linen scent.',
      category: 'household',
      rating: 4.7,
    },

    // Kids & Baby
    {
      name: 'Organic Cotton Baby Wipes',
      price: 12.99,
      product_image: 'https://i.imgur.com/1rECAoP.jpeg',
      stock: 300,
      description: 'Ultra-soft, reusable baby wipes made from 100% organic cotton. Gentle on sensitive skin.',
      category: 'kids-baby',
      rating: 4.9,
    },
    {
      name: 'Natural Rubber Teething Toy',
      price: 14.99,
      product_image: 'https://i.imgur.com/2CgwBMd.jpeg',
      stock: 100,
      description: 'Safe, non-toxic rubber teething toy made from natural rubber. BPA-free.',
      category: 'kids-baby',
      rating: 4.7,
    },

    // Kitchen
    {
      name: 'Bamboo Dish Brush Set',
      price: 11.99,
      product_image: 'https://i.imgur.com/yeSD3Gl.jpeg',
      stock: 200,
      description: 'Sustainable dish brush set with replaceable heads. Tough on grease, gentle on non-stick surfaces.',
      category: 'kitchen',
      rating: 4.6,
    },
    {
      name: 'Compostable Kitchen Bin Bags (Pack of 50)',
      price: 18.99,
      product_image: 'https://i.imgur.com/eKxDd0u.jpeg',
      stock: 150,
      description: 'Plant-based, compostable bin bags. Extra strong and leakproof.',
      category: 'kitchen',
      rating: 4.8,
    },

    // Laundry & Cleaning
    {
      name: 'Eco Laundry Detergent Strips (60 Loads)',
      price: 19.99,
      product_image: 'https://i.imgur.com/u4xas4j.jpeg',
      stock: 200,
      description: 'Zero-waste laundry detergent strips. Plastic-free packaging, effective in cold water.',
      category: 'laundry-cleaning',
      rating: 4.7,
    },
    {
      name: 'Wool Dryer Balls (Set of 6)',
      price: 16.99,
      product_image: 'https://i.imgur.com/fkOebWp.jpeg',
      stock: 150,
      description: 'Natural wool dryer balls reduce drying time and static. Replace dryer sheets for up to 1000 loads.',
      category: 'laundry-cleaning',
      rating: 4.9,
    },
    // Pets
    {
      name: 'Natural Pet Shampoo Bar',
      price: 9.99,
      product_image: 'https://i.imgur.com/3GtNQCG.jpeg',
      stock: 100,
      description: 'Gentle, soap-free shampoo bar for pets. Made with natural ingredients and essential oils.',
      category: 'pets',
      rating: 4.6,
    },
    {
      name: 'Hemp Pet Cleaning Wipes',
      price: 13.99,
      product_image: 'https://i.imgur.com/QpAapwS.jpeg',
      stock: 250,
      description: 'Biodegradable pet wipes made with organic hemp. Perfect for paws and quick clean-ups.',
      category: 'pets',
      rating: 4.7,
    },
  ]);
}
