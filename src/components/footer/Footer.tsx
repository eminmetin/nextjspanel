'use client';
import { motion } from 'framer-motion';
import React from 'react';
const Footer = () => {
  return (
    // // <!-- Footer section with social media icons and newsletter sign-up -->
    <motion.footer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className='flex flex-col w-4/5 items-center mx-auto mt-5 bg-white text-center text-surface dark:bg-neutral-700 dark:text-white'
    >
      <div className='container px-6 pt-6'>
        {/* <!-- Social media icons container --> */}
        <div className='mb-6 flex justify-center space-x-2'>
          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>

          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>

          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>

          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>

          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>

          <a
            href='#!'
            type='button'
            className='rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'></span>
          </a>
        </div>

        {/* <!-- Newsletter sign-up form --> */}
        <div>
          <form action=''>
            <div className='gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3'>
              <div className='md:mb-6 md:ms-auto'>
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              {/* <!-- Newsletter sign-up input field --> */}
              <div className='relative md:mb-6' data-twe-input-wrapper-init>
                <input
                  type='email'
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                  id='exampleFormControlInputEmail'
                  placeholder='Email address'
                />
                <label
                  htmlFor='exampleFormControlInputEmail'
                  className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'
                >
                  Email address
                </label>
              </div>

              {/* <!-- Newsletter sign-up submit button --> */}
              <div className='mb-6 md:me-auto'>
                <button
                  type='submit'
                  className='inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white'
                  data-twe-ripple-init
                  data-twe-ripple-color='light'
                >
                  AraziSepeti.com Tüm Hakları Saklıdır.
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* <!-- Copyright information --> */}
        <div className='mb-6'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>

        {/* <!-- Links section --> */}
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-4'>
          <div className='mb-6'>
            <h5 className='mb-2.5 font-bold uppercase'>Links</h5>

            <ul className='mb-0 list-none'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h5 className='mb-2.5 font-bold uppercase'>Links</h5>

            <ul className='mb-0 list-none'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h5 className='mb-2.5 font-bold uppercase'>Links</h5>

            <ul className='mb-0 list-none'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>

          <div className='mb-6'>
            <h5 className='mb-2.5 font-bold uppercase'>Links</h5>

            <ul className='mb-0 list-none'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      {/*
//   <!-- Copyright section --> */}
      <div className='w-full bg-black/5 p-4 text-center'>
        © 2023 Copyright:
        <a
          className='font-semibold'
          target='_blank'
          href='https://arazisepeti.com/'
        >
          Arazi Sepeti
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
