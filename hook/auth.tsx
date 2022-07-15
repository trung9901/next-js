import React from 'react'
import useSWR, { useSWRConfig } from 'swr';
import { list, signup } from '../api/auth'


export const useAuth = () => {
    const fetcher = async (url: string) => {
        const { data } = await list(url)
        return data
    }
    const { data, error } = useSWR("/users", fetcher)
    const { mutate } = useSWRConfig();
    const register = () => {
        mutate('/users', async () => {
            const { data: user } = await signup({ email: "trung@gmail.com", password: "123456" });
            return [...data, user]
        })
    }
    return {
        data,
        error,
        register
    }
}