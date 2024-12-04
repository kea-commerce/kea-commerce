export type Collection = {
  title: string;
  link: string;
};

export const defaultCollection: Collection = {
  title: 'All Products',
  link: 'all',
};

export const collections: Collection[] = [
  defaultCollection,
  { title: 'Bath & Body', link: 'bath-body' },
  { title: 'Household', link: 'household' },
  { title: 'Kids & Baby', link: 'kids-baby' },
  { title: 'Kitchen', link: 'kitchen' },
  { title: 'Laundry & Cleaning', link: 'laundry-cleaning' },
  { title: 'Pets', link: 'pets' },
] as const;

export type CollectionType = (typeof collections)[number]['link'];
