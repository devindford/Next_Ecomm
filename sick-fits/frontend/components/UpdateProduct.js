import { useMutation, useQuery } from '@apollo/client';
import Router from 'next/router';
import { UPDATE_PRODUCT_MUTATION } from '../gql/mutations/updateProduct';
import { QUERY_ALL_PRODUCTS } from '../gql/queries/queryAllProducts';
import { QUERY_SINGLE_PRODUCT } from '../gql/queries/querySingleProduct';
import { useForm } from '../hooks/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const UpdateProduct = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id },
  });

  const [
    updateProduct,
    {
      error: updateProductError,
      loading: updateProductLoading,
      data: updatedProductData,
    },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    refetchQueries: [{ query: QUERY_ALL_PRODUCTS }],
  });

  const { inputs, handleChange } = useForm(data?.Product);
  if (loading) return <p>Loading...</p>;
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });
        // Router.push({ pathname: `/product/${res.data.createProduct.id}` });
      }}
    >
      <DisplayError error={error || updateProductError} />
      <fieldset
        disabled={updateProductLoading}
        aria-busy={updateProductLoading}
      >
        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            name="price"
            id="price"
            type="number"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">✎ Update Item</button>
      </fieldset>
    </Form>
  );
};

export default UpdateProduct;
