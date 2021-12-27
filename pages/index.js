import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { QuestionMarkCircleIcon, EyeIcon} from '@heroicons/react/solid'


export default function Home() {
  return (
    <div className='w-full h-screen bg-teal-700'>
      <div className='flex justify-center shadow-lg'>
        <div className= 'bg-teal-600 rounded-lg mt-16 w-11/12 md:w-1/2 lg:w-2/5 flex-col align-middle'>
          <div className='flex justify-center mt-14 animate-bounce'>
            <img src='./topl-Ribn-icon-large.png' className='w-28' />
          </div>
          <div className='text-teal-50 text-4xl font-medium text-center mt-6 lg:mt-2 mb-4'>Ribn Wallet</div>
          <div className='text-lg text-teal-50 text-center mx-2 lg:mx-8'>
            {'Topl\'s blockchain wallet for tracking, tokenizing, and transaction impact. '}
          </div>
          <form className='mx-8 my-10'>
            <div className='mb-4'>
              <div className='flex'>
                <label className='text-xl text-teal-50 font-medium mb-2' htmlFor="username">
                  Enter Wallet Password
                </label>
                <QuestionMarkCircleIcon className='h-3 w-3 text-teal-100 mt-2 ml-1'/>    
              </div> 
              <div className='relative w-full'>
                <div className='absolute inset-y-0 right-0 flex items-center px-2'>
                  <EyeIcon className='h-4 w-4 text-teal-600 mt-1 ml-1'/> 
                </div>
                <input className='text-sm justify-betweenborder rounded-md w-full h-10 py-2 px-3 bg-teal-50 text-gray-400 focus:outline-teal-500' id="username" type="show ? 'password' : 'text'" placeholder='Type something' />
              </div>
            </div>
            <div className='mt-2 tracking-wide'>
              <button className='bg-teal-500 text-white text-xl font-medium w-full h-12 rounded-md'>CONTINUE</button>
              <button className='bg-teal-100 text-teal-500 text-xl font-medium w-full h-12 rounded-md mt-14'>RESTORE WALLET</button>
            </div>
            <span className='text-lg text-teal-50 flex justify-center mt-4 pb-6'>Need Help? Contact <a href='https://www.google.com/' className='text-teal-200 pl-1 '>Ribn Support</a></span>
          </form>
        </div>
      </div>
    </div>
  )
}
