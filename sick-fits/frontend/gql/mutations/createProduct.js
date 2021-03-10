import gql from 'graphql-tag';

export const CREATE_PRODUCT_MUTATION = gql`
  mutation createProductMutations(
    $name: String!
    $price: Int!
    $description: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      price
      description
    }
  }
`;
