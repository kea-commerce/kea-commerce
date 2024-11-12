import type { Product } from '../models';

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
