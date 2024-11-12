import express, { type Router } from 'express';

import { type Product } from '@kea-commerce/shared/models';

import { generateMockProducts } from './generate-mock-products';

type Metadata = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasMore: boolean;
};

type ProductsPayload = {
  data: Product[];
  metadata: Metadata;
};

const router: Router = express.Router();

router.get('/', async (request, response, next) => {
  const products = generateMockProducts({
    count: 5,
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
      itemsPerPage: 10,
      hasMore: false,
    },
  } as ProductsPayload);
});

export default router;
