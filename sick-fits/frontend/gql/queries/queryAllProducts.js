import gql from 'graphql-tag';

export const QUERY_ALL_PRODUCTS = gql`
  query QUERY_ALL_PRODUCTS($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
