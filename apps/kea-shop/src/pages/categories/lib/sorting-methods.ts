import { type Product } from '@kea-commerce/shared/models';

type SortingFunction = (products: Product[]) => Product[];

export const sortingMethods: { [key: string]: SortingFunction } = {
  alphabeticallyFromA: (products: Product[]) => [...products].sort((a, b) => a.name.localeCompare(b.name)),
  alphabeticallyFromZ: (products: Product[]) => [...products].sort((a, b) => b.name.localeCompare(a.name)),
  lowToHighPrice: (products: Product[]) => [...products].sort((a, b) => a.price - b.price),
  highToLowPrice: (products: Product[]) => [...products].sort((a, b) => b.price - a.price),
  featured: (products: Product[]) => [...products].sort((a, b) => b.stock - a.stock),
  bestSelling: (products: Product[]) => [...products].sort((a, b) => a.stock - b.stock),
};
