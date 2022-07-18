import instance from './instance';
export const getItem = (id: any) => {
  return instance.get(`/products/${id}`);
};
// export const gets = () => {
//   return instance.get(`/products`);
// };
export const add = (products: any) => {
  return instance.post('/products', products);
};
export const removeItem = (id: any) => {
  return instance.delete(`/products/${id}`);
};
export const updateItem = (id: any, products: any) => {
  return instance.put(`/products/${id}`, products);
};
