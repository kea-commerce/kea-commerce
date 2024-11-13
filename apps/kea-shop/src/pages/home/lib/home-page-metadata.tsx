import { type FC } from 'react';

import { type ProductsResponseMetadata } from '@kea-commerce/shared/models';

type HomePageMetadataProps = Readonly<{
  metadata: ProductsResponseMetadata;
}>;

export const HomePageMetadata: FC<HomePageMetadataProps> = ({ metadata }) => {
  return (
    <div className='mt-6 flex justify-between items-center text-sm text-gray-600 p-4'>
      <div>
        Page {metadata.currentPage + 1} of {metadata.totalPages}
      </div>
      <div>Showing {metadata.itemsPerPage} items per page</div>
      <div>Total items: {metadata.totalItems}</div>
    </div>
  );
};
