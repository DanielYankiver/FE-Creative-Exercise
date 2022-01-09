import Header from '../components/Header';
import { useState } from 'react';
import { BanIcon } from '@heroicons/react/solid';

export default function landing() {
  const [toggleWind, setToggleWind] = useState(false)

  return (
    <div className="landing">
      <div className="w-full h-screen bg-teal-700">
        <Header />
        
        <div className="flex justify-center content-center z-10">
          <div className="flip-image absolute top-20">
            <img src={toggleWind ? "../cloudz.gif" : "../cloudz.png"} className="md:w-screen"/>
          </div>
          <div className="spin z-30 cursor-pointer">
            <div className="md:w-96 mt-8 md:mt-6 absolute right-48 top-32">
              <div>
                <img src="../topl-Ribn-icon-large.png" className="w-44 md:w-60 lg:w-5/6"/>
              </div>
            </div>
          </div>
          <div className="absolute left-72 top-44">
            <div className="text-teal-700 cursor-pointer md:border-4 rounded-lg w-10/12 md:w-1/2 lg:w-3/5 flex-col justify-center bg-white border-teal-500 hover:text-white hover:bg-teal-600 active:bg-transparent active:text-teal-500">
              <div className="mt-4 -mb-6">
                <img src="../topl-leaf2.svg" className="w-24"/>
              </div>
              <div className="text-center text-bold text-4xl mt-6 md:mt-4 mb-2">
                Ribn Wallet
              </div>
              <div className="text-center text-lg text-semibold mb-6 md:mb-8">
                {"Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact."}
              </div>
              <div className="mb-4 -mt-10 rotate-180">
                <img src="../topl-leaf2.svg" className="w-24"/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-24">
            <button onClick={() => setToggleWind(!toggleWind)} className="">
              {toggleWind ? 
                <div className="border-4 rounded-full w-64 h-24 border-teal-500 text-white bg-teal-600 flex justify-center items-center">
                  {/* <div className="text-3xl mr-4">No Wind</div> */}
                  <BanIcon className="h-20 w-20 text-white mr-2 opacity-90" />
                  <img src="../wind-icon.png" className="w-14 mt-1"/>
                </div>
                :  
                <div className="border-4 rounded-full w-64 h-24 border-teal-500 text-white bg-teal-600 flex justify-center items-center">
                  <div className="text-3xl mr-4">Wind</div>
                  <img src="../wind-icon.png" className="w-14 mt-1"/>
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