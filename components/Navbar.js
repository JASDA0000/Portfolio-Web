'use client';
import { Outfit } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useState } from 'react';


const outfit = Outfit({ subsets: ['latin'] })

const Navbar = () => {

  // hamberger menu
  const [isOpen,setOpen] = useState(false)
  {/*nav Link */}
  const pathname = usePathname();

  const navLinks = [
    {name: "About", path: "/"},
    {name: "Resume", path: "/resume"},
    {name: "Portfolio", path: "/portfolio"},
    {name: "Certificate", path: "/learn_cer"},

  ];

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md text-black dark:bg-black dark:text-white'>
    <nav className={`flex flex-wrap justify-between bg-transparent p-3 ${outfit.className}`}>
      <div className='relative group w-fit h-6 cursor-pointer'>
        <div className='absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'><Link href={"/"}>@Jasda</Link></div>
        <div className='absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-2xl font-bold text-black'><Link href={'/'}>@Mangmum</Link></div>
      </div>
      <div className='md:hidden'>
        <button onClick={() => setOpen(!isOpen)} className='material-symbols-outlined'>menu</button>
      </div>
      {isOpen && (
          <div className='md:hidden px-4 pb-4 w-full mt-2'>
            <ul className='flex flex-col space-y-2 '>
              {navLinks.map((link) => 
              <Link key={link.path} href={link.path} className={`text-lg font-bold  ${pathname === link.path ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent   " : ""}`}>{link.name}</Link>)}
            </ul>
          </div>
        )}
      {/* desktop menu */}
      <ul className='space-x-4 hidden md:flex '>
        {navLinks.map((link) => 
          <Link key={link.path}
          href={link.path}
          className={`text-lg font-bold ${pathname === link.path ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent  " : ""}`} >
            {link.name}
          </Link>
        )}
      </ul>
        <div className='max-sm:hidden max-md:hidden'></div>

    </nav>
    </header>
  );
};

export default Navbar;
