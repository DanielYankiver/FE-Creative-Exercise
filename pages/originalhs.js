
import { QuestionMarkCircleIcon, EyeIcon} from '@heroicons/react/solid'

export default function originalhs() {

  return(
    <div className="w-full h-screen bg-teal-100">
      <div className='flex justify-center'>
      {/* <div className= 'border border-black rounded-md mt-16 w-2/5 flex-col align-middle'> */}
        <div className='mt-16 w-full md:w-3/5 lg:w-2/5 flex-col align-middle'>
          <div className='text-4xl text-center mt-6 lg:mt-10 mb-6'>Ribn Wallet</div>
          <div className='flex justify-center my-6'>
            <img src='./topl-Ribn-icon-large.png' className='w-28' />
          </div>
          <div className='text-lg text-center my-6 mx-2 md:mx-12'>
            {'Topl\'s blockchain wallet for tracking,'} <br/> {'tokenizing, and transaction impact. '}
          </div>
          <form className='mx-8 my-16'>
            <div className='mb-4'>
              <div className='flex'>
                <label className='text-xl font-semibold mb-2' htmlFor="username">
                  Enter Wallet Password
                </label>
                <QuestionMarkCircleIcon className='h-3 w-3 text-teal-500 mt-2 ml-1'/>    
              </div> 
              <div className='relative w-full'>
                <div className='absolute inset-y-0 right-0 flex items-center px-2'>
                  <EyeIcon className='h-4 w-4 text-gray-700 mt-1 ml-1'/> 
                </div>
                <input className='text-sm justify-between border rounded-md w-full h-10 py-2 px-3 text-gray-400 focus:outline-teal-500' id="username" type="show ? 'password' : 'text'" placeholder='Type something' />
              </div>
            </div>
            <div className='mt-8'>
              <button className='bg-teal-500 text-white text-xl w-full h-12 rounded-md'>CONTINUE</button>
              <button className='bg-teal-200 text-teal-500 text-xl w-full h-12 rounded-md my-4'>RESTORE WALLET</button>
            </div>
            <span className='text-lg flex justify-center mt-4'>Need Help? Contact <a href='https://www.google.com/' className='text-teal-500 pl-1 '>Ribn Support</a></span>
          </form>
        </div>
      </div>
    </div>
  )
}