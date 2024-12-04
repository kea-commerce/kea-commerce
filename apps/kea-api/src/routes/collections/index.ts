import express, { type Request, type Response, type Router } from 'express';

import { keaCommDatabase } from '@kea-commerce/db';
import { isValidCollection } from '@kea-commerce/shared/collections';
import { type ProductsResponse, type ProductsResponseMetadata } from '@kea-commerce/shared/models';

const router: Router = express.Router();

interface CollectionQueryParams {
  page?: string;
  limit?: string;
}

type CollectionRequest = Request<
  {
    readonly collection?: string;
  },
  never,
  never,
  CollectionQueryParams
>;

router.get('/:collection', async (request: CollectionRequest, response: Response<ProductsResponse>) => {
  try {
    const page = Math.max(1, Number.parseInt(request.query.page ?? '1', 10));
    const limit = Math.min(50, Math.max(1, Number.parseInt(request.query.limit ?? '20', 10)));
    const offset = (page - 1) * limit;
    const collection = request.params.collection;

    if (!isValidCollection(collection)) {
      response.status(404).json({
        error: 'Collection not found',
        message: `Collection "${collection}" does not exist`,
      });
      return;
    }

    // Base query for counting
    let countQuery = keaCommDatabase('products').count('* as count');
    // Base query for products
    let productsQuery = keaCommDatabase('products')
      .select(
        'id',
        'name',
        'price',
        'product_image as productImage',
        'stock',
        'description',
        'category',
        'rating',
        'created_at as createdAt',
        'updated_at as updatedAt'
      )
      .orderBy('created_at', 'desc')
      .limit(limit)
      .offset(offset);

    // Add category filter only if not 'all'
    if (collection !== 'all') {
      countQuery = countQuery.where({ category: collection });
      productsQuery = productsQuery.where({ category: collection });
    }

    // Execute queries
    const [{ count }] = await countQuery;
    const products = await productsQuery;

    const totalItems = Number.parseInt(count as string, 10);
    const totalPages = Math.ceil(totalItems / limit);

    if (products.length === 0 && page !== 1) {
      response.status(404).json({
        error: 'Page not found',
        message: `Page ${page} does not exist for collection: ${collection}`,
      });
      return;
    }

    const metadata: ProductsResponseMetadata = {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasMore: page < totalPages,
    };

    response.json({
      data: products,
      metadata,
    });
  } catch (error) {
    console.error('Error fetching collection:', error);
    response.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch collection',
    });
  }
});

export default router;
