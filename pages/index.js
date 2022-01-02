import Link from 'next/link'
import { QuestionMarkCircleIcon, EyeIcon} from '@heroicons/react/solid'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="w-full h-screen bg-teal-700">
      <div className="flex justify-center shadow-lg">
        <div className= "md:bg-teal-600 rounded-lg mt-20 md:mt-36 lg:mt-8 w-11/12 md:w-1/2 lg:w-1/4 flex-col align-middle">
          <div className="flex justify-center mt-8 animate-bounce">
            <img src="./topl-Ribn-icon-large.png" className="w-16"/>
          </div>
          <div className="text-teal-50 text-3xl font-medium text-center mt-4 lg:mt-2 mb-1">Ribn Wallet</div>
          <div className="text-medium font-medium text-teal-50 text-center mx-2 md:mx-12 lg:mx-8 xl:mx-4">
            {"Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact."}
          </div>
          <form className="mx-4 md:mx-8 my-10">
            <div className="mb-4">
              <div className="flex">
                <label className="text-medium text-teal-50 font-medium mb-2" htmlFor="username">
                  Enter Wallet Password
                </label>
                <QuestionMarkCircleIcon className="h-3 w-3 text-teal-100 mt-2 ml-1"/>    
              </div> 
              <div className="relative w-full">
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <EyeIcon className="h-4 w-4 text-teal-600 mt-1 ml-1"/> 
                </div>
                <input className="text-sm justify-between border rounded-md w-full h-9 py-2 px-3 bg-teal-50 text-gray-300 focus:outline-teal-500" id="username" type="password" placeholder='Type something...' />
              </div>
            </div>
            <div className="mt-8 tracking-wide">
              <Link href="/landing">
                <button className="bg-teal-500 text-white text-xl font-medium w-full h-10 rounded-md">CONTINUE</button>
              </Link>
              <button className="bg-teal-100 text-teal-500 text-xl font-medium w-full h-10 rounded-md mt-4">RESTORE WALLET</button>
            </div>
            <span className="md:text-lg text-teal-50 flex justify-center mt-4 ">Need Help? Contact <a href="https://www.google.com/" className="text-teal-200 pl-1 ">Ribn Support</a></span>
          </form>
        </div>
      </div>
      <div className="h-12 w-full bg-teal-700"></div>
      <div> 
        <Footer />
      </div>
    </div>
  )
}
