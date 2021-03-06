import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../gql/queries/queryAllProducts.js';
import Product from './Product.js';
import { ProductListStyles } from './styles/ProductListStyles.js';

const Products = () => {
  const { data, error, loading } = useQuery(QUERY_ALL_PRODUCTS);
  const productData = data && data.allProducts;

  if (error) {
    return <p>{error.message}</p>;
  }
  return loading ? (
    <>
      <p>Loading...</p>
    </>
  ) : (
    <ProductListStyles>
      {productData.map((item) => (
        <Product product={item} key={item.id} />
      ))}
    </ProductListStyles>
  );
};

export default Products;
