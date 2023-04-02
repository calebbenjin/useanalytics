import React from 'react';
import SideNav from './SideNav';
import Navbar from './Navbar';

interface layoutProps {
  children: React.ReactElement | React.ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div className="flex">
      <SideNav />
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
