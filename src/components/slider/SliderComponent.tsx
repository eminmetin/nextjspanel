'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import banner1 from '../../../public/banner1.jpg';
import banner2 from '../../../public/banner2.jpg';
import banner3 from '../../../public/banner3.jpg';

const SimpleSlider = () => {
  const [hiddenArrow, setHiddenArrow] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 640) {
      // 640px Tailwind'de 'sm' breakpoint'i
      setHiddenArrow(false);
    } else {
      setHiddenArrow(true);
    }
  };

  useEffect(() => {
    handleResize(); // İlk render'da kontrol et
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: hiddenArrow,
  };

  return (
    <motion.div
      className='bg-white slider w-full md:w-4/5 mx-auto p-1'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Slider {...settings}>
        <div className='h-52 relative'>
          <Image src={banner1} alt='Banner 1' layout='fill' objectFit='cover' />
        </div>
        <div className='h-52 relative'>
          <Image src={banner2} alt='Banner 2' layout='fill' objectFit='cover' />
        </div>
        <div className='h-52 relative'>
          <Image src={banner3} alt='Banner 3' layout='fill' objectFit='cover' />
        </div>
        <div className='h-52 relative'>
          <Image src={banner1} alt='Banner 4' layout='fill' objectFit='cover' />
        </div>
        <div className='h-52 relative'>
          <Image src={banner2} alt='Banner 5' layout='fill' objectFit='cover' />
        </div>
        <div className='h-52 relative'>
          <Image src={banner3} alt='Banner 6' layout='fill' objectFit='cover' />
        </div>
      </Slider>
    </motion.div>
  );
};

export default SimpleSlider;
