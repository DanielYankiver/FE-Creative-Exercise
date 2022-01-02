import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import Footer2 from '../components/Footer2';

export default function landing() {

  
  return (
    <div className="landing">
      <div className="w-full h-screen bg-teal-700">
        <Header />
        <div className="flex justify-center content-center z-10">
          <div className="flip-image absolute top-20">
            <img src="../cloudz.gif" className="md:w-screen"/>
          </div>
          <div className="spin z-30 cursor-pointer">
            <div className="md:w-96 mt-8 md:mt-6 flex justify-center">
              <img src="../topl-Ribn-icon-large.png" className="w-44 md:w-60 lg:w-5/6"/>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white mt-0 md:mt-10 lg:mt-20 cursor-pointer">
          <div className="md:border-2 rounded-lg w-10/12 md:w-1/2 lg:w-1/4 flex-col justify-center hover:bg-white hover:border-teal-500 hover:text-teal-700">
            <div className="text-center text-semibold text-4xl mt-6 md:mt-10 mb-4">
              Ribn Wallet
            </div>
            <div className="text-center text-lg mb-6 md:mb-10">
              {"Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact."}
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </div>
  )
}