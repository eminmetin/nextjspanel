import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import rockerIcon from '../../../public/infocompany/rocker.png';

const Turbo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='w-full mt-5 font-semibold'
    >
      <div className='shadow-xl h-full bg-white justify-center items-center flex rounded-md'>
        <div className='turbo w-full p-2 h-full flex flex-col justify-between'>
          <div>
            <p className='text-xl p-4'>Turbolar</p>
            <div className='turbo border border-slate-400 p-2 rounded-md mx-5 flex justify-between items-center gap-2 my-7'>
              <p className='font-semibold'>Turbolarım</p>
              <div className='hakkim flex flex-col items-center justify-center'>
                <p className='font-light'>Turbo Hakkı</p>
                <p className='text-blue-600'>4</p>
              </div>
              <div className='hakkim flex flex-col items-center justify-center'>
                <p className='font-light'>Kalan Hakkım</p>
                <p className='text-blue-600'>4</p>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <Image
              src={rockerIcon}
              alt='rockerIcon'
              className='w-20 mx-auto h-20'
            />
            <h5 className='text-2xl text-red-600 my-2'>
              İlanını Turbolayanlar Hemen Kazanıyor!
            </h5>
            <p className='text-sm text-slate-400 font-extralight'>
              <b className=''>Turbo kullanarak</b> ilanlarınızı ön plana
              çıkarın, daha çok alıcı ve kiracıya, daha kısa sürede ulaşın!
            </p>
            <button className='w-full p-2 mt-2 text-white bg-red-600 text-center'>
              Turboları İncele
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Turbo;
