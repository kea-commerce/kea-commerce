import express, { type Router } from 'express';

import { type ProductsResponse } from '@kea-commerce/shared/models';

import { mockProduct } from '../mock-product';

import { generateMockProducts } from './generate-mock-products';

const router: Router = express.Router();

router.get('/:id', async (request, response) => {
  const product = mockProduct();
  response.status(200).json({ product: product });
});

router.get('/', async (request, response) => {
  const products = generateMockProducts({
    count: 116,
    minPrice: 10,
    maxPrice: 200,
    includeDescription: true,
    imageWidth: 300,
    imageHeight: 300,
  });

  response.status(200).json({
    data: products,
    metadata: {
      currentPage: 0,
      totalItems: products.length,
      itemsPerPage: 5,
      totalPages: products.length / 5,
      hasMore: false,
    },
  } as ProductsResponse);
});

export default router;
