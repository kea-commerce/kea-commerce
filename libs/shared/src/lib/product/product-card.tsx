import type { Product } from '../models';

type ProductCardProps = Readonly<{
  product: Product;
}>;

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <div className='w-full'>
        <img alt={product.name} className='w-full h-auto' src={product.productImage} />
      </div>
      <div className='mt-2 text-center'>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};
