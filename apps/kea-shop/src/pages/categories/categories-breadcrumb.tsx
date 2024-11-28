import { Link } from 'react-router-dom';

type CategoriesBreadcrumbProps = Readonly<{
  collectionName: string | undefined;
  collectionType: string | undefined;
}>;

export const CategoriesBreadcrumb = ({ collectionName, collectionType }: CategoriesBreadcrumbProps) => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to={`/collections/${collectionType}`}>{collectionName}</Link>
      </div>
    </div>
  );
};
