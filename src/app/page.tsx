import LineChart from '@/components/anlysis/LineChart';
import Footer from '@/components/footer/Footer';
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
      <div className='footer'>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
