import Link from 'next/link';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import useProducts from './../../hook/use-products';
type Props = {
  products: any[];
};

// const url = 'https://620237e9b8735d00174cb87f.mockapi.io/products';

// const fetcher = async (url: any) => await (await fetch(url)).json();

const ProductsList = () => {
  // const { data, error } = useSWR(url, fetcher, { dedupingInterval: 10000 });
  const { data: products, error, create, remove, update } = useProducts();
  if (error) return <div>Failed to load</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div>
      <div className="container mx-auto">
        {products.map((item: any) => (
          <div key={item.id} className="flex gap-3 mt-2">
            <div className="">
              <Link href={`/products/${item.id}`} className="">
                {item.name}
              </Link>
            </div>

            <div className="bg-red-500 p-2 rounded-md text-white ">
              <button
                onClick={() => {
                  remove(item.id), console.log(item.id);
                }}
              >
                Delete
              </button>
            </div>
            <div className="bg-cyan-500 p-2 rounded-md text-white ">
              <button
                onClick={() => {
                  update(item.id, { name: 'Product update2' });
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
        <div>
          <button
            className="bg-green-500 p-2 rounded-md text-white"
            onClick={() => create({ name: 'Product new' })}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

// SSG-----------
// const ProductsList = ({ products }: Props) => {
//   return (
//     <div>
//       <div className="container mx-auto">
//         {products.map((item) => (
//           <div key={item.id}>
//             <Link href={`/products/${item.id}`} className="">
//               {item.name}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export const getStaticProps: GetStaticProps<Props> = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch(
//     'https://620237e9b8735d00174cb87f.mockapi.io/products'
//   );
//   const data = await res.json();
//   // console.log('data', data);
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
export default ProductsList;
