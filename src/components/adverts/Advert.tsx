import Image from 'next/image';
import React from 'react';
import image from '../../../public/infocompany/rocker.png';
import { FaClock } from 'react-icons/fa';

const Advert = () => {
  return (
    <div className='w-full flex flex-col md:flex-row border-slate-300 border-2'>
      <div className='leftSide  text-left border-b-2 md:border-b-0 md:border-r-2 flex md:flex-row flex-col space-y-2 md:space-y-0 w-full md:w-4/5 p-2'>
        <Image
          src={image}
          alt='advertImage'
          className='h-28 w-28 p-2 self-center md:self-auto'
        />
        <div className='advertInfo ml-2 flex-row justify-center items-center'>
          <div className='price text-center md:text-left'>3.500.000TL</div>
          <div className='state text-slate-400 text-xs text-center md:text-left'>
            Sahibinden 3+1 satılık daire
          </div>
          <div className='stateDetail font-bold text-sm text-center md:text-left'>
            Satılık Daire * 3+1 160m2 6.Kat
          </div>
          <div className='location text-xs text-center md:text-left'>
            Uşak {'>'} Merkez {'>'} Kemalöz
          </div>
        </div>
      </div>
      <div className='rightSide flex justify-center items-center w-full md:w-1/5 p-2'>
        <div className='timeZone flex flex-col items-center'>
          <p className='text-red-600'>
            <FaClock />
          </p>
          <div className='daysAgo text-sm'>10 Gün Önce</div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
