import { parse } from 'node:path/win32';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { list, signin, signup } from '../api/auth';

export const useAuth = () => {
  // get list user
  const fetcher = async (url: string) => {
    const { data } = await list(url);
    return data;
  };
  const { data, error } = useSWR('/users', fetcher);
  const { mutate } = useSWRConfig();
  // register
  const register = (account: {}) => {
    mutate('/users', async () => {
      const { data: user } = await signup(account);
      return [...data, user];
    });
  };
  // login
  const login = (account: {}, next: () => void) => {
    mutate('/users', async () => {
      const { data: user } = await signin(account);
      return [...data, user];
    });
    if (data) {
      localStorage.setItem('user', JSON.stringify(account));
      next();
      console.log(data);
    }
  };
  // logout
  const logout = (next: () => void) => {
    localStorage.removeItem('user');
    next();
  };
  return {
    data,
    error,
    register,
    login,
    logout,
  };
};
