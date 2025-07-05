import React from 'react';
import MintCard from '../../components/mintCard';
import city from '../../assets/outline-landmarks-skyline 1.png'
import Header from '../../components/header';
import Footer from '../../components/footer';

const Mint: React.FC = () => {
  return (
    <div className='pt-20'>
    <Header/>
    <section className='w-full min-h-screen relative'>
      <img src={city} alt='space' className='absolute inset-0 w-full  object-cover z-0'></img>
      <section className='relative z-20'>
        <div className="p-6 rounded-lg text-center pt-20">
          <h1 className="text-3xl font-bold text-purple-700 mb-2">WHI THERE YOU GOT A SNAP</h1>
        </div>
        <div className='md: px-56'>
          <MintCard />
        </div>
      </section>
    </section>
    <Footer/>
    </div>
  );
};

export default Mint;
