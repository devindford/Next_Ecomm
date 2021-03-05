import { useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from '../hooks/useForm';
import Form from './styles/Form';
import { CREATE_PRODUCT_MUTATION } from '../gql/mutations/createProduct';
import DisplayError from './ErrorMessage';
import { QUERY_ALL_PRODUCTS } from '../gql/queries/queryAllProducts';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: QUERY_ALL_PRODUCTS }],
    }
  );

  return (

    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await createProduct();
        clearForm();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
            id="price"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            name="image"
            required
            id="image"
            type="file"
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Item</button>
      </fieldset>
    </Form>
  );
};

export default CreateProduct;
