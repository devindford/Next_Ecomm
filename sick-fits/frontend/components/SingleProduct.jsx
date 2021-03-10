import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { QUERY_SINGLE_PRODUCT } from '../gql/queries/querySingleProduct';
import DisplayError from './ErrorMessage';
import { ProductStyles } from './styles/ProductStyles';

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id },
  });
  const product = data?.Product;
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  return (
    <ProductStyles>
      <Head>
        <title>Urban Styles | {product.name}</title>
      </Head>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.photo.altText}
      />
      <div className="details">
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;
