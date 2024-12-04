import express, { type Request, type Response, type Router } from 'express';

import { keaCommDatabase } from '@kea-commerce/db';
import { type Product, type ProductsResponse } from '@kea-commerce/shared/models';

const router: Router = express.Router();

type GetByIDParams = {
  id?: string;
};
type GetByIDRequest = Readonly<Request<GetByIDParams>>;

type GetByIDBody = {
  error?: string;
  message?: string;
  product?: Product;
};
type GetByIDResponse = Readonly<Response<GetByIDBody>>;

router.get('/:id', async (request: GetByIDRequest, response: GetByIDResponse, next): Promise<void> => {
  try {
    const product: Product = await keaCommDatabase('products').select('*').where({ id: request.params.id }).first();

    if (!product) {
      response.status(404).json({
        error: 'Product not found',
        message: `Product with ID ${request.params.id} does not exist`,
      });

      return;
    }

    response.json({ product });
  } catch (error) {
    // Handle invalid UUID format error specifically
    if (error instanceof Error && error.message.includes('invalid input syntax for type uuid')) {
      response.status(400).json({
        error: 'Invalid ID format',
        message: 'The provided ID is not a valid UUID',
      });

      return;
    }

    console.error('Error fetching product:', error);
    response.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch product',
    });
  }
});

router.get('/', async (request, response, next): Promise<void> => {
  const products = await keaCommDatabase<Product>('products').select('*');

  response.status(200).json({
    data: products,
    metadata: {
      currentPage: 0,
      totalPages: 1,
      totalItems: products.length,
      itemsPerPage: products.length,
      hasMore: false,
    },
  } as ProductsResponse);
});

export default router;
