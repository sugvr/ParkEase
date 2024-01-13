'use client';
import Getcolor from "@/Constants/GetColors";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';  // Agregamos useRouter

interface SidebarProps {
  activeRoute: string;
  handleRouteChange: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeRoute, handleRouteChange }) => {
  const { data: session } = useSession();
  const router = useRouter();  

  const routes = [
    { path: '/myaccount/profile', label: 'Profile', icon: 'path del icono' },
    { path: '', label: 'Nearby Parkings', icon: 'path del icono' },
    { path: '', label: 'Past Reservations', icon: 'path del icono' },
    { path: '', label: 'Payments', icon: 'path del icono' },
    { path: '', label: 'Settings', icon: 'path del icono' },
  ];

  
  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <div className="border-4 border-black" />
            <h1 className="text-2xl py-2 font-bold">
              <span className={`text-${Getcolor(1)}`}>Park</span>Ease
            </h1>
            <div className="border-4 border-black" />
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}
                  className={`flex items-center ${
                        activeRoute === route.path
                          ? 'bg-black text-amber-500'
                          : 'bg-white hover:bg-yellow-50 text-gray-900'
                      } rounded-xl font-bold text-sm py-3 px-4`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                        {route.icon}
                      </svg>
                      {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button
            onClick={() => (session ? signOut() : signIn())}
            type="button"
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button>{' '}
          <span className="font-bold text-sm ml-2">{session ? 'Logout' : 'Login'}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
