import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Layout from './../../components/Layout/index';
import LayoutAdmin from './../../components/Layout/admin';

type Props = {}
const useUser = () => ({ user: 1 })


const admin = (props: Props) => {
    // const { user } = useUser()
    // const router = useRouter()
    // useEffect(() => {
    //     if (user === 1) {
    //         console.log('admin')
    //         router.push('/')
    //         alert('abc')
    //     }
    // }, [])
    return (
        <div>admin</div>
    )
}
admin.Layout = LayoutAdmin
export default admin