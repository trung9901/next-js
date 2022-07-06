import Link from 'next/link';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import Image from 'next/image';

type Props = {
  products: any[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <Link href={`/products/${item.id}`} className="">
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    'https://620237e9b8735d00174cb87f.mockapi.io/products'
  );
  const data = await res.json();
  // console.log('data', data);
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
export default ProductsList;
