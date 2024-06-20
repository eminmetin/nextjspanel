import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import calendarIcon from '../../../public/infocompany/calendar.png';

const Calendar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='w-full mt-5   font-semibold '
    >
      <div className='shadow-xl h-full justify-center bg-white items-start flex rounded-md'>
        <div className='turbo w-full p-2  flex flex-col justify-between'>
          <div className='flex justify-between items-center p-4'>
            <p className='text-xl'>Ödemelerim</p>
            <p className='text-sm p-0 m-0 text-red-600'>Fatura Detayına Git</p>
          </div>
          <div className='flex flex-col  justify-center items-center flex-grow'>
            <Image
              src={calendarIcon}
              className='w-36 mt-16 h-36'
              alt='calendarIcon'
            />
          </div>
          <div className='calendarInfo text-center p-4'>
            <p className='uppercase'>yaklaşan ödemeleriniz var</p>
            <p className='text-slate-300 mt-2 text-base'>
              <b className='text-red-600'>15 gün sonra </b>
              taksit ödemeniz var hatırlatmak istedik <br />
              {':)'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calendar;
