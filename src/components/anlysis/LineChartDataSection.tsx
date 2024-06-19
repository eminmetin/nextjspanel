'use client';
import React from 'react';
import LineChart from './LineChart';
import {
  FaEye,
  FaBullhorn,
  FaPhoneAlt,
  FaHeart,
  FaWhatsapp,
} from 'react-icons/fa';
import StatCard from '../helpers/StatCards';
import { motion } from 'framer-motion';

const LineChartDataSection = ({ className }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='space-y-4 w-full lg:w-auto p-5 bg-white shadow-xl rounded-lg'
    >
      <div className='w-full'>
        <div className='flex flex-col lg:flex-row justify-between items-center mt-4'>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-2xl font-bold'
          >
            İstatistiklerim
          </motion.h2>
          <div className='flex space-x-4'>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='relative h-10'
            >
              <select className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'>
                <option value='brazil'>Son 5 saat </option>
                <option value='bucharest'>Son 7 gün</option>
                <option value='london'>Son 2 hafta </option>
                <option value='washington'>Son 1 ay</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Dönem Seç
              </label>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className='relative h-10 w-36'
            >
              <select className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'>
                <option value='brazil'>Muhammet Emin </option>
                <option value='bucharest'>Hevin Dip</option>
                <option value='london'>Mehmet Bacak </option>
                <option value='washington'>Selma Abla</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Kullanıcı Seç
              </label>
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-gray-600 text-xs'
        >
          03 Haziran - 09 Haziran arasında yayındaki ilanların gösterim sayısı
        </motion.p>
      </div>
      <div className='flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-2/3 flex items-stretch'
        >
          <LineChart className='w-full h-full' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className='w-full lg:w-1/3 flex flex-col space-y-2'
        >
          <StatCard
            icon={<FaEye />}
            title='Görüntülenme'
            description='Önceki 7 güne göre'
            value={170}
          />
          <StatCard
            icon={<FaBullhorn />}
            title='Yayındaki İlan'
            description='Önceki 7 güne göre'
            value={85}
          />
          <StatCard
            icon={<FaPhoneAlt />}
            title='Telefon No Gösterim'
            description='Önceki 7 güne göre'
            value={45}
          />
          <StatCard
            icon={<FaHeart />}
            title='Favoriye Alma'
            description='Önceki 7 güne göre'
            value={30}
          />
          <StatCard
            icon={<FaWhatsapp />}
            title='WhatsApp Mesaj Adedi'
            description='Önceki 7 güne göre'
            value={25}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LineChartDataSection;
