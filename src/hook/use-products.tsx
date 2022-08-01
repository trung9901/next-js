import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';

import instance from '../api/instance';
import { add, removeItem, updateItem, getItem } from '../api/products';

const useProducts = (params?: any) => {


  const router = useRouter();
  const { id } = router.query;

  // const getParams = () => {
  //   if (id !== undefined) {
  //     return `${id}`;
  //   } else {
  //     return ``;
  //   }
  // }
  // const { data, error, mutate } = useSWR(`/products/` + getParams());

  const { data, error, mutate } = useSWR(`/products`);


  // create
  const create = async (item: any) => {
    const product = await add(item);
    mutate([...data, product]);
  };
  // update
  const update = async (id: any, products: any) => {
    // const product = await updateItem(id, item);
    // mutate([...data, product]);

    const updateData = await updateItem(id, products);
    const product = data.map((item: any) =>
      item.id == id ? updateData : item
    );
    mutate(product);
  };
  // delete
  const remove = async (id: any) => {
    await removeItem(id);
    const newProducts = data.filter((item: any) => item.id != id);
    mutate(newProducts);
  };
  return {
    data,
    error,
    create,
    remove,
    update,
  };
};

export default useProducts;
