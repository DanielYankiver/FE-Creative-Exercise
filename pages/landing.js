import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';

export default function landing() {

  
  return (
    <div className='landing'>
      <div className='w-full h-screen bg-teal-700'>
        <Header />
        <div className="flex justify-center content-center z-10">
          <div className="flip-image absolute top-20">
            <img src="../cloudz.gif" className="md:w-screen"/>
          </div>
          <div className="spin z-30 cursor-pointer">
            <div className="md:w-96 mt-8 md:mt-6 flex justify-center">
              <img src="../topl-Ribn-icon-large.png" className="w-36 md:w-60 lg:w-5/6"  />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white mt-8 lg:mt-20 cursor-pointer">
          <div className="border-2 rounded-lg w-10/12 md:w-1/2 lg:w-1/4 flex-col justify-center hover:bg-white hover:border-teal-500 hover:text-teal-700">
            <div className="text-center text-semibold text-3xl md:text-4xl mt-6 md:mt-10 mb-4">
              Ribn Wallet
            </div>
            <div className="text-center text-md md:text-lg mb-6 md:mb-10">
              {'Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact. '}
            </div>
          </div>
        </div>
        <div className="z-20">
          <div className="absolute bottom-0">
            <img src="https://imagedelivery.net/nADYkEXSJPd0UjYrv7RXLw/839cfbf9-e1e0-4781-5ba3-b95963451e00/public" className="w-full"/>
          </div>
          <div className="flip-image absolute bottom-0 right-0">
            <img src="https://imagedelivery.net/nADYkEXSJPd0UjYrv7RXLw/839cfbf9-e1e0-4781-5ba3-b95963451e00/public" className="w-full hidden md:block"/>
          </div>
        </div>
      </div>
    </div>
  )
}