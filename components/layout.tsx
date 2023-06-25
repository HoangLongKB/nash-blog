import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className='bg-white h-[100vh]'>
      <Head>
        <title>Nash Blog</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
