import React from 'react';
import LineChartDataSection from '@/components/anlysis/LineChartDataSection';
import Footer from '@/components/footer/Footer';
import Card from '@/components/helpers/Card';
import Navbar from '@/components/navbar/Navbar';
import SliderComponent from '@/components/slider/SliderComponent';

const Home = () => {
  return (
    <main className='min-h-screen w-full'>
      <div className='flex flex-col bg-white items-center justify-between w-full'>
        <Navbar />
      </div>
      <div className='slider'>
        <SliderComponent />
      </div>
      <div className='chart w-4/5 flex flex-col sm:flex-row md:flex-row justify-between mx-auto mt-8 gap-5'>
        <LineChartDataSection className='w-full sm:w-2/3 md:w-2/3' />
        <Card
          title='Paketim'
          linkText='Paket Detayına Git'
          packageDetail='Taahhütlü Klasik Paket'
          packetDetails={[
            {
              rightsTitle: 'İlan Hakkım',
              rightsValue: 50,
              remainingTitle: 'Kalan',
              remainingValue: 6,
            },
            {
              rightsTitle: 'Danışman Hakkım',
              rightsValue: 10,
              remainingTitle: 'Kalan',
              remainingValue: 2,
            },
            {
              rightsTitle: 'Turbo Hakkım',
              rightsValue: 30,
              remainingTitle: 'Kalan',
              remainingValue: 5,
            },
            {
              rightsTitle: 'Güncelleme Hakkım',
              rightsValue: 12,
              remainingTitle: 'Kalan',
              remainingValue: 4,
            },
          ]}
          className='w-full sm:w-1/3 md:w-1/3 mt-5 sm:mt-0 md:mt-0'
        />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
