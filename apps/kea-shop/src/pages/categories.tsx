import { isMobile } from 'react-device-detect';

import { Collections } from '../categories/collections';

export const Categories = () => {
  return <div>{isMobile ? undefined : <Collections />}</div>;
};
