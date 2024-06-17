import React from 'react';
import Image from 'next/image';
import { CgShoppingCart } from 'react-icons/cg';
import { BsFillBellFill } from 'react-icons/bs';
import { GiFactory } from 'react-icons/gi';
import AraziIcon from '../../../public/infocompany/logo.png';

const NavbarBanner = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:space-x-3 mt-4 items-center justify-between'>
      <div className='flex justify-center w-full md:w-auto'>
        <Image
          src={AraziIcon}
          alt='arazi-sepeti-icon'
          height={250}
          width={250}
          className='max-w-full h-auto'
        />
      </div>

      <div className='flex items-center h-full md:mt-0 gap-1'>
        <div className='flex items-center justify-center space-x-1 p-2 border rounded-full h-12'>
          <span className='text-sm p-0 font-extrabold'>Sepetim</span>
          <span className='border rounded-full p-1'>
            <CgShoppingCart className='' />
          </span>
        </div>
        <div className='border rounded-full px-2 h-10 flex items-center'>
          <BsFillBellFill className='' />
        </div>
        <div className='flex items-center border font-semibold rounded-full h-12'>
          <span className='border flex ml-1 rounded-full p-1'>
            <GiFactory className=' ' />
          </span>
          <div className='flex flex-col p-3 text-sm'>
            <p className='font-semibold '>Milton Gayrimenkul</p>
            <p className='text-slate-400 font-bold'>Muhammet Emin METİN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;
