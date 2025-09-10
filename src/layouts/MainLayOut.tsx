import type { ReactNode } from 'react';
import MainNavBar from '../components/MainNavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-b from-blue-50 to-white">
      <MainNavBar />
      {children}
    </div>
  );
};

export default Layout;
