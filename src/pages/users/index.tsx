import React from 'react';
import { useAuth } from '../../hook/auth';
import { useRouter } from 'next/router';
type Props = {};

const userList = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, register, login, logout } = useAuth();
  if (error) return <div>fail to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((user: any, index: any) => (
        <div key={index}>{user.email}</div>
      ))}
      <div className="">
        <div className="btn btn-blue">
          <button
            className=""
            onClick={() =>
              register({ email: 'trung@gmail.com', password: '123456' })
            }
          >
            Register
          </button>
        </div>

        <div className="">
          <button
            className=""
            onClick={() =>
              login({ email: 'trung@gmail.com', password: '123456' }, () => {
                alert('dang nhap thanh cong');
              })
            }
          >
            Login
          </button>
        </div>

        <div className="">
          <button
            onClick={() =>
              logout(() => {
                alert('dang xuat thanh cong');
              })
            }
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default userList;
