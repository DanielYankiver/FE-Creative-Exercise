import Header from '../components/Header';
import { useState } from 'react';
import { BanIcon } from '@heroicons/react/solid';

export default function Landing() {
  const [toggleWind, setToggleWind] = useState(false);

  function handleWind() {
    setToggleWind(!toggleWind)
  }

  return (
    <div className="landing">
      <div className="w-full h-screen bg-teal-700 md:bg-red-700 lg:bg-blue-700 xl:bg-teal-700">
        <Header />
        
        <div className="flex justify-center content-center z-10">
          <div className="flip-image absolute top-20">
            <img src={toggleWind ? "../cloudz.gif" : "../cloudz.png"} className="md:w-screen"/>
          </div>
          <div className="z-30 ">
            <div className="spin cursor-pointer">
              <div className="flex justify-center md:w-96 mt-0 md:mt-6 md:absolute md:right-48 md:top-32">
                <div>
                  <img src="../topl-Ribn-icon-large.png" className="w-32 md:w-60 lg:w-5/6"/>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 md:mt-0 md:absolute md:left-72 md:top-44">
              <div className="text-teal-700 cursor-pointer border-4 rounded-lg w-10/12 md:w-1/2 lg:w-3/5 flex-col justify-center bg-white border-teal-500 hover:text-white hover:bg-teal-600 active:bg-transparent active:text-teal-500">
                <div className="mt-2 -mb-8 md:mt-4 md:-mb-6">
                  <img src="../topl-leaf2.svg" className="w-12 md:w-24"/>
                </div>
                <div className="text-center text-bold text-2xl md:text-4xl mt-6 md:mt-4 md:mb-2">
                  Ribn Wallet
                </div>
                <div className="text-center text-base md:text-lg text-semibold mb-6 md:mb-8">
                  {"Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact."}
                </div>
                <div className="mb-2 -mt-6 md:mb-4 md:-mt-10 rotate-180">
                  <img src="../topl-leaf2.svg" className="w-12 md:w-24"/>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <div className="md:absolute md:bottom-24">
            <button onClick={handleWind}>
              {toggleWind ? 
                <div className="border-4 rounded-full w-44 h-16 md:w-64 md:h-24 border-teal-500 text-white bg-teal-600 flex justify-center items-center">
                  {/* <div className="text-3xl mr-4">No Wind</div> */}
                  <BanIcon className="h-14 w-14 md:h-20 md:w-20 text-white mr-2 opacity-90" />
                  <img src="../wind-icon.png" className="w-10 md:w-14 mt-1"/>
                </div>
                :  
                <div className="border-4 rounded-full w-44 h-16 md:w-64 md:h-24 border-teal-500 text-white bg-teal-600 flex justify-center items-center">
                  <div className="text-2xl md:text-3xl mr-4">Wind</div>
                  <img src="../wind-icon.png" className="w-10 md:w-14 mt-1"/>
                </div>
              }
            </button>
          </div>
        </div>
        <footer>
          <div className="z-20">
            <div className="absolute bottom-0">
              <img src={toggleWind ? "../wind-turbines.gif" : "../wind-turbines.png"} className="w-full"/>
            </div>
            <div className="flip-image absolute bottom-0 right-0">
              <img src={toggleWind ? "../wind-turbines.gif" : "../wind-turbines.png"} className="w-full hidden md:block"/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}