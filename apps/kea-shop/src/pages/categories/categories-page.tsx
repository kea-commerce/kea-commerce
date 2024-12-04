import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router';

import { Collection } from './collection';
import { Collections } from './collections';

export const CategoriesPage = () => {
  const { collection } = useParams<{ collection: string }>();

  return (
    <div className='flex w-full h-fit'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex-row justify-center h-fit px-4 pb-10'>
        <Collection collection={collection} />
      </div>
    </div>
  );
};
