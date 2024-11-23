import knex from 'knex';

import { type Product } from '@kea-commerce/shared/models';

export const getAllProducts = async (): Promise<Product[]> => {
  return knex<Product>('products').select('*');
};
