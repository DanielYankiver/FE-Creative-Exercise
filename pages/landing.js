import Header from '../components/Header'
import Footer from '../components/Footer'

export default function landing() {

  return (
    <div className='w-full h-screen bg-teal-700'>
      <div> 
        <Header />
      </div>
      <div className=" flex justify-center content-center">
        <div className="hover:spin">
          <div className="spin w-96 mt-8 md:mt-24">
            <img src="../topl-Ribn-icon-large.png" className=""  />
          </div>
        </div>
      </div>
      <div className=''>
        <div className="absolute bottom-0">
          <img src="https://imagedelivery.net/nADYkEXSJPd0UjYrv7RXLw/839cfbf9-e1e0-4781-5ba3-b95963451e00/public" className="w-full"/>
        </div>
        <div className="flip-image absolute bottom-0 right-0">
          <img src="https://imagedelivery.net/nADYkEXSJPd0UjYrv7RXLw/839cfbf9-e1e0-4781-5ba3-b95963451e00/public" className="w-full hidden md:block"/>
        </div>
      </div>
    </div>
  )
}