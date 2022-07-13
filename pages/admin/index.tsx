import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from './../../components/Layout/index';
import LayoutAdmin from './../../components/Layout/admin';

type Props = {};

const admin = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = 1;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (user === 1) {
      console.log('ban ko phai admin');
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>admin</div>;
};
admin.Layout = LayoutAdmin;
export default admin;
