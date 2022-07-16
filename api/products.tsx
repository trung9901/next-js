import instance from './instance';
export const get = () => {
  return instance.get('products');
};
export const gets = (url: string) => {
  return instance.get(url);
};
