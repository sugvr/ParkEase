
import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image'; // Import the Image component from the correct package
import { NAV_LINKS } from '@/Constants/NavData';
import Getcolor from '@/Constants/GetColors';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
    return (
        <>
            <nav className={`flex items-center justify-center text-center fixed z-40 top-0 left-0 w-full h-full bg-white transform ${isOpen ? "translate-x-0" :
                "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
                <div className="flexBetween padding-container absolute top-0 left-0 right-0 p-5 text-center">
                    <Link href='#main' onClick={toggleSidebar}>
                        <div className="border-4 border-black" />
                        <h1 className='text-2xl py-2 font-bold'><span className={`text-${Getcolor(1)}`}>Park</span>Ease.</h1>
                        <div className="border-4 border-black" />
                    </Link>
                    <button className="text-gray-600 hover:text-gray-900 p-2" onClick={toggleSidebar}>
                        <Image
                            src="/close-menu.svg"
                            alt='menu'
                            height={24}
                            width={24}
                            className='inline-block lg:hidden cursor-pointer'
                        />
                    </button>
                </div>

                <ul className='regular-24 space-y-9'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className='transition-all hover:font-bold'>
                            <Link href={link.href} className='text-gray-50' onClick={toggleSidebar}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Overlay */}
            <div className={`fixed inset-0 z-30 bg-black opacity-50 transition-opacity ${isOpen ? "block" : "hidden"}`} onClick={toggleSidebar}></div>
        </>
    );
};

export default Sidebar;
