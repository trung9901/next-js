import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';

import instance from '../api/instance';
import { add, removeItem, updateItem, getItem } from '../api/products';

const useProducts = (params?: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const router = useRouter();
  //   const { id } = router.query;

  //   let url = '';

  //   if (id) {
  //     url = `/products/${id}`;
  //   } else {
  //     url = `/products`;
  //   }
  //   const { data, error, mutate } = useSWR(url);

  const { data, error, mutate } = useSWR(`/products`);

  // get one
  //   const get = async (id?: any) => {
  //     await getItem(id);
  //     mutate([...data]);
  //   };

  // create
  const create = async (item: any) => {
    const product = await add(item);
    mutate([...data, product]);
  };
  // update
  const update = async (id: any, item: any) => {
    const product = await updateItem(id, item);
    mutate([...data, product]);
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
