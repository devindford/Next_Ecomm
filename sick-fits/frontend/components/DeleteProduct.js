import { useMutation } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { DELETE_PHOTO_MUTATION } from '../gql/mutations/deletePhoto';
import { DELETE_PRODUCT_MUTATION } from '../gql/mutations/deleteProduct';
import DisplayError from './ErrorMessage';
import { InnerModalStyles, StyledModal } from './styles/StyledModal';

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteProduct));
};

const DeleteProduct = ({ id, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [deleteProduct, { error, loading, data: deleteData }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      update,
    }
  );

  const [
    deletePhoto,
    { error: photoError, loading: photoLoading },
  ] = useMutation(DELETE_PHOTO_MUTATION, {
    variables: { id: deleteData?.deleteProduct?.photo?.id },
  });

  const isLoading = photoLoading || loading;

  return (
    <>
      <DisplayError error={error || photoError} />
      <StyledModal
        open={modalOpen}
        onClose={() => console.log('delete')}
        aria-labelledby="Confirm Deletion"
        aria-describedby="This confirms that you want to delete this product"
      >
        <InnerModalStyles>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <h2>
                Are you sure you want to delete this product? This can not be
                undone.
              </h2>
              <div className="btn-wrapper">
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="delete-btn"
                  type="button"
                  disabled={isLoading}
                  onClick={async () => {
                    await deleteProduct({
                      variables: { id },
                    });
                    await deletePhoto();
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </InnerModalStyles>
      </StyledModal>

      <button
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default DeleteProduct;
