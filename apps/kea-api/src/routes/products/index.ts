import express, { type Router } from 'express';

import { type ProductsResponse } from '@kea-commerce/shared/models';

import { generateMockProducts } from './generate-mock-products';

const router: Router = express.Router();

router.get('/', async (request, response, next) => {
  const products = generateMockProducts({
    count: 24,
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
      totalPages: 1,
      totalItems: products.length,
      itemsPerPage: 24,
      hasMore: false,
    },
  } as ProductsResponse);
});

export default router;
