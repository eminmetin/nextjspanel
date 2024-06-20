'use client';
import React, { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHome } from 'react-icons/io';
import { LuLibrary } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import { IoRocket } from 'react-icons/io5';
import NavbarBanner from './NavbarBanner';
import Link from 'next/link';

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.nav
      className='bg-white w-full md:w-4/5 gap-4 md:gap-10 mx-auto p-2'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavbarBanner />
      <div className='flex flex-wrap items-center justify-between my-2'>
        <ul className='flex flex-wrap gap-4 mt-5 justify-center md:justify-start w-full md:w-auto'>
          {menuItems.map((menuItem, index) => (
            <motion.li
              key={index}
              className='navbar__item text-slate-950'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            >
              <Link
                href={menuItem.href}
                className='flex items-center space-x-2 hover:bg-gray-100 p-2 rounded'
              >
                {menuItem.icon}
                <span className='text-sm'>{menuItem.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className='bg-green-600  mx-auto lg:m-0 hover:bg-green-900 text-white font-bold py-2 px-8 rounded-full mt-4 md:mt-0'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * menuItems.length, duration: 1 }}
        >
          İlan Ver
        </motion.button>
      </div>
    </motion.nav>
  );
};

const menuItems = [
  { icon: <IoMdHome className='text-2xl' />, label: 'Ana Sayfa', href: '/' },
  {
    icon: <LuLibrary className='text-2xl' />,
    label: 'Portföyüm',
    href: 'adverts',
  },
  {
    icon: <MdOutlineMessage className='text-2xl' />,
    label: 'Mesajlarım',
    href: 'mesajlarım',
  },
  {
    icon: <FaUsers className='text-2xl' />,
    label: 'Ofisim/Hesabım',
    href: 'ofisim',
  },
  {
    icon: <IoRocket className='text-2xl' />,
    label: 'Tekliflerim',
    href: 'tekliflerim',
  },
  {
    icon: <TbReportAnalytics className='text-2xl' />,
    label: 'Raporlarım',
    href: 'raporlarım',
  },
];

export default Navbar;
