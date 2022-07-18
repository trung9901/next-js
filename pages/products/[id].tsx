import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import useProducts from '../../hook/use-products';

type Props = {
  products: any;
};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const url = `https://620237e9b8735d00174cb87f.mockapi.io/products/${id}`;
  const fetcher = async (url: any) => await (await fetch(url)).json();
  const { data, error } = useSWR(id ? url : null, fetcher, {
    dedupingInterval: 10000,
  });
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // const { data, error, create, remove, update } = useProducts(id);

  return (
    <div className="container mx-auto">
      <div>ProductDetail : {data.name}</div>
    </div>
  );
};
// const ProductDetail = ({ products }: Props) => {
//   if (!products) return null;
//   return (
//     <div className="container mx-auto">
//       <div>ProductDetail : {products.name}</div>
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(
//     `https://620237e9b8735d00174cb87f.mockapi.io/products`
//   );
//   const data = await res.json();
//   const paths = data.map((item: { id: any }) => {
//     return { params: { id: item.id } };
//   });

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps: GetStaticProps<Props> = async (
//   context: GetStaticPropsContext
// ) => {
//   // console.log('context', context.params?.id);
//   const res = await fetch(
//     `https://620237e9b8735d00174cb87f.mockapi.io/products/${context.params?.id}`
//   );
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       products: data,
//     },
//   };
// };

export default ProductDetail;
