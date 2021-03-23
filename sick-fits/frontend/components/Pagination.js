import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import PaginationStyles from './styles/PaginationStyles';
import { PAGINATION_QUERY } from '../gql/queries/queryPagination';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const Pagination = ({ page }) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY);
  const itemCount = data?._allProductsMeta.count;
  const pageCount = Math.ceil(itemCount / perPage);
  if (loading) return 'Loading ...';
  if (error) return <DisplayError error={error} />;
  return (
    <PaginationStyles>
      <Head>
        <title>
          Urban Styles - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page === 1}>⬅ Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{itemCount} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next ➡</a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
