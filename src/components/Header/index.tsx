import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <ul className="flex gap-5 bg-red-400 p-3">
        <li>
          <Link href="/">
            <a>Home page</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>User</a>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
