import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="flex justify-center">
        <div className="bg-red-100 border border-black mt-16 w-2/5 flex-col align-middle">
          <div className="text-4xl text-center mt-16 mb-6">
            Ribn Wallet
          </div>
          <div className="flex justify-center my-6">
            <img src="./topl-Ribn-icon-large.png" className="w-28" />
          </div>
          <div className="text-lg text-center my-6 mx-12">
            Topl's blockchain wallet for tracking, tokenizing, and transcation impact. 
          </div>
        </div>
      </div>
    </div>
  )
}
