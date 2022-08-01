import React from 'react';
import { LayoutProps } from '../../models/Layouts';

import Footer from '../Footer';
import Header from './../Header/index';

// type Props = {
//   children: React.ReactNode;
// };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
