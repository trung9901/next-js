import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {
  products: any;
};

const ProductDetail = ({ products }: Props) => {
  if (!products) return null;
  return <div>ProductDetail : {products.name}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://620237e9b8735d00174cb87f.mockapi.io/products`
  );
  const data = await res.json();
  const paths = data.map((item: { id: any }) => {
    return { params: { id: item.id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  // console.log('context', context.params?.id);
  const res = await fetch(
    `https://620237e9b8735d00174cb87f.mockapi.io/products/${context.params?.id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: data,
    },
  };
};

export default ProductDetail;
