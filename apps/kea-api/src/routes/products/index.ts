import express, { type Router } from 'express';

import { type ProductsResponse } from '@kea-commerce/shared/models';

import { mockProduct } from '../mock-product';

import { generateMockProducts } from './generate-mock-products';

const router: Router = express.Router();

router.get('/:id', async (request, response) => {
  const product = mockProduct();
  response.status(200).json({ product: product });
});

router.get('/page/:currentPage', async (request, response) => {
  const { currentPage } = request.query;
  const pageNumber = Number(currentPage);

  const products = generateMockProducts({
    count: 5,
    minPrice: 10,
    maxPrice: 200,
    includeDescription: true,
    imageWidth: 300,
    imageHeight: 300,
  });

  const productsPerPage = 5;
  response.status(200).json({
    data: products,

    metadata: {
      currentPage: pageNumber,
      totalItems: products.length,
      itemsPerPage: productsPerPage,
      totalPages: products.length / productsPerPage,
      hasMore: false,
      nextPage: pageNumber + 1,
      previousPage: pageNumber - 1,
    },
  } as ProductsResponse);
});

export default router;
