import express, { type Request, type Response, type Router } from 'express';

import { keaCommDatabase } from '@kea-commerce/db';
import { type Product, type ProductsResponse } from '@kea-commerce/shared/models';

const router: Router = express.Router();

type CollectionRequest = Request<{
  readonly collection?: string;
}>;

router.get('/:collection', async (request: CollectionRequest, response: Response<ProductsResponse>) => {
  try {
    const products: Product[] = await keaCommDatabase('products')
      .select('*')
      .where({ category: request.params.collection });

    if (!products) {
      response.status(404).json({
        error: 'Collection not found',
        message: `Products for collection: ${request.params.collection} do not exist`,
      });

      return;
    }

    response.json({ data: products });
  } catch (error) {
    console.error('Error fetching collection:', error);
    response.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch collection',
    });
  }
});

export default router;
