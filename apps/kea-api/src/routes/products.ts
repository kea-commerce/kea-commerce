import express, { type Router } from 'express';

import { type Product, products } from '../assets/consts';

const router: Router = express.Router();

type Metadata = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasMore: boolean;
};

type ProductsPayload = {
  data: Product[]
  metadata: Metadata;
}

router.get('/', async (request, response, next) => {
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
