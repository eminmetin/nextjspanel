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
      <div className='chart w-4/5 flex justify-between mx-auto bg-white mt-8 p-8 shadow-xl'>
        <LineChartDataSection />
        <Card />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
