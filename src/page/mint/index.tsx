import React from 'react';
import MintCard from '../../components/mintCard';
import city from '../../assets/outline-landmarks-skyline 1.png'

const Mint: React.FC = () => {
  return (
    <section className='w-full min-h-screen relative'>
      <img src={city} alt='space' className='absolute inset-0 w-full  object-cover z-0'></img>
      <section className='relative z-20'>
      <div className="p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">WOO HOO!</h1>
        <div className="flex items-center justify-center mb-4">
          <span className="text-green-600 text-xl mr-2">✔</span>
          <span className="text-lg text-blue-600">POAP Minted!</span>
        </div>
        <p className="text-gray-600 mb-4">Now migrating to its forever home... <span className="text-yellow-500">🌙</span></p>
        <p className="text-lg font-semibold">You have 4 POAPs in your collection!</p>
      </div>
      <div className='md: px-56'>
        <MintCard />
      </div>
      </section>

    </section>
  );
};

export default Mint;
