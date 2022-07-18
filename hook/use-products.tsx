import useSWR, { useSWRConfig } from 'swr';

import instance from "../api/instance";
import { add, removeItem, updateItem } from "../api/products";
const useProducts = () => {
    const { data, error, mutate } = useSWR("/products");

    // create
    const create = async (item: any) => {
        const product = await add(item);
        mutate([...data, product]);
    };
    // update
    const update = async (id: any, item: any) => {
        const product = await updateItem(id, item);
        mutate([...data, product]);
    }
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
        update
    };
};

export default useProducts;