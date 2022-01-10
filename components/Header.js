import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full h-16  flex justify-between items-center">
      <img src="/topl-Ribn-icon-large.png" className="w-12 ml-4 cursor-pointer"/>
      <Link href="/">
        <button className="border-2 border-teal-500 text-white bg-teal-600 w-32 h-8 rounded-md mr-4 cursor">
          Logout
        </button>
      </Link>
    </div>
  )
}