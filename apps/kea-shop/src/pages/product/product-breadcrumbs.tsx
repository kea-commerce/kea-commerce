import { Link } from 'react-router-dom';

type ProductBreadcrumbProps = Readonly<{
  collectionLink: string | undefined;
  productName: string;
  collectionName: string | undefined;
}>;

export const ProductBreadcrumb = ({ collectionName, collectionLink, productName }: ProductBreadcrumbProps) => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to={`/collections/${collectionLink}`}>{collectionName}</Link>
      </div>
      <div>{productName}</div>
    </div>
  );
};
