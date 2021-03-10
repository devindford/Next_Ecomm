import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../../gql/queries/querySingleProduct';
import SingleProduct from '../../components/SingleProduct';

const SingleProductPage = ({ query }) => <SingleProduct id={query.id} />;

export default SingleProductPage;
