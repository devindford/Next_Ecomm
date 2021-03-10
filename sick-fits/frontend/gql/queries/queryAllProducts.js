import gql from 'graphql-tag';

export const QUERY_ALL_PRODUCTS = gql`
  query QUERY_ALL_PRODUCTS {
    allProducts {
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
