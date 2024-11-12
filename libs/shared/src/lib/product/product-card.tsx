import type { Product } from './types';

type ProductCardProps = Readonly<{
  product: Product;
}>;

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};
