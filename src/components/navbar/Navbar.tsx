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

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.nav
      className='bg-white w-4/5 mx-auto'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavbarBanner />
      <div className='flex flex-wrap items-center justify-between my-2'>
        <ul className='flex flex-wrap '>
          {menuItems.map((menuItem, index) => (
            <motion.li
              key={index}
              className='navbar__item text-slate-500 font-extrabold gap-7'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.2 }}
            >
              <button className='flex items-center space-x-2 hover:bg-gray-100 p-2 rounded'>
                {menuItem.icon}
                <span className='text-sm'>{menuItem.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className='bg-green-600 mx-0 sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0 2xl:mx-0 hover:bg-green-900 text-white font-1bold py-2 px-8 rounded-full'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * menuItems.length, duration: 0.2 }}
        >
          İlan Ver
        </motion.button>
      </div>
    </motion.nav>
  );
};

const menuItems = [
  { icon: <IoMdHome className='text-2xl' />, label: 'Ana Sayfa' },
  { icon: <LuLibrary className='text-2xl' />, label: 'Portföyüm' },
  { icon: <MdOutlineMessage className='text-2xl' />, label: 'Mesajlarım' },
  { icon: <FaUsers className='text-2xl' />, label: 'Ofisim/Hesabım' },
  { icon: <IoRocket className='text-2xl' />, label: 'Tekliflerim' },
  { icon: <TbReportAnalytics className='text-2xl' />, label: 'Raporlarım' },
];

export default Navbar;