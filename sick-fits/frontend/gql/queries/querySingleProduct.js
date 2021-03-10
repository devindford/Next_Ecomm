import gql from 'graphql-tag';

export const QUERY_SINGLE_PRODUCT = gql`
  query QUERY_SINGLE_PRODUCT($id: ID!) {
    Product(where: { id: $id }) {
      name
      description
      price
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
