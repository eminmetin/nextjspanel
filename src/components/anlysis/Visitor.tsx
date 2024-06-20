import { motion } from 'framer-motion';
import React from 'react';

const Visitor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='w-full mt-5  font-semibold'
    >
      <div className='shadow-xl h-full visitor-bg justify-center items-center flex rounded-md'>
        <div className='visitor w-full'>
          <div className='visitorBanner p-4 rounded-t-md'>
            <p>Ziyaretçi Sayısı (Son 24 Saat)</p>
            <span className='font-mono text-7xl'>19</span>
          </div>
          <div className='visitorMainInfo p-4 w-full'>
            <div className='flex justify-between items-center border-b-2 mb-2 '>
              <p className='text-sm mb-2'>En Çok Ziyaret Edilen 3 İlan</p>
              <p className='text-sm mb-2'>Ziyaretçi Sayısı</p>
            </div>
            <div className='mostVisited flex-col '>
              <div className='flex justify-between border-b-2 mb-2 text-center items-center '>
                <span className='p-2'>
                  <p>Uzun İlan Başlığı 1</p>
                  <p>12.500.500TL</p>
                </span>
                <span className='text-2xl'>45</span>
              </div>
              <div className='flex justify-between border-b-2 mb-2 text-center items-center '>
                <span className='p-2'>
                  <p>Uzun İlan Başlığı 1</p>
                  <p>12.500.500TL</p>
                </span>
                <span className='text-2xl'>45</span>
              </div>
              <div className='flex justify-between items-center border-b-2 mb-2 text-center '>
                <span className='p-2'>
                  <p>Uzun İlan Başlığı 1</p>
                  <p>12.500.500TL</p>
                </span>
                <span className='text-2xl'>45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Visitor;
