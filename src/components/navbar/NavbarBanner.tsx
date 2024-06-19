import React from 'react';
import Image from 'next/image';
import { CgShoppingCart } from 'react-icons/cg';
import { BsFillBellFill } from 'react-icons/bs';
import { GiFactory } from 'react-icons/gi';
import AraziIcon from '../../../public/infocompany/logo.png';

const NavbarBanner = () => {
  return (
    <div className='w-full flex flex-col gap-2 md:flex-row md:space-x-3 mt-4 items-center justify-between'>
      {/* Logo */}
      <div className='flex justify-center w-full md:w-auto'>
        <Image
          src={AraziIcon}
          alt='arazi-sepeti-icon'
          height={250}
          width={250}
          className='max-w-full h-auto'
        />
      </div>

      {/* Sağ Üst Menü */}
      <div className='flex items-center justify-end md:justify-center mt-4 md:mt-0 md:space-x-2'>
        {/* Sepetim */}
        <div className='flex items-center justify-center space-x-1 p-2 border rounded-full h-12 md:h-10'>
          <span className='text-sm font-extrabold'>Sepetim</span>
          <span className='border rounded-full p-1'>
            <CgShoppingCart className='text-xl md:text-lg' />
          </span>
        </div>

        {/* Bildirim */}
        <div className='border rounded-full  px-2 h-10 flex items-center'>
          <BsFillBellFill className='text-2xl md:text-lg' />
        </div>

        {/* Kullanıcı Bilgileri */}
        <div className='flex items-center border  rounded-full'>
          <span className='border flex ml-1 rounded-full p-1'>
            <GiFactory className=' md:text-2xl' />
          </span>
          <div className='flex-col sm:h-1/4 px-[1em] sm:px-[.5  em]'>
            <p className='font-semibold'>Milton Gayrimenkul</p>
            <p className='text-slate-400'>Muhammet Emin METİN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;
