'use client';
import { SessionProvider } from 'next-auth/react';
import Sidebar from './sidebar';
import { useState, useEffect, ReactNode } from 'react';
import { getMyAccountProps } from './myaccountUtils';

interface MyAccountProps {
  session: any;
  children : ReactNode | ReactNode[];
}


const MyAccount: React.FC<MyAccountProps> = ({ session, children}) => {
  const [activeRoute, setActiveRoute] = useState<string>('');

  const handleRouteChange = (route: string) => {
    setActiveRoute(route);
  };

  return (
    <SessionProvider session={session}>
      <div className="relative bg-white overflow-hidden max-h-screen">
        <header className="fixed right-0 top-0 left-60 bg-amber-500 py-3 px-4 h-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">

            </div>
          </div>
        </header>
        <Sidebar activeRoute={activeRoute} handleRouteChange={handleRouteChange} />
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};

export { getMyAccountProps }; // Export the utility function
export default MyAccount;
