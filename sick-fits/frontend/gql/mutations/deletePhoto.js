import gql from 'graphql-tag';

export const DELETE_PHOTO_MUTATION = gql`
  mutation deletePhotoMutation($id: ID!) {
    deleteProductImage(id: $id) {
      id
    }
  }
`;
