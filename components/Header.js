import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full h-16  flex justify-between items-center">
      <img src="/topl-Ribn-icon-large.png" className="w-12 ml-4"/>
      <Link href="/">
        <button className="text-teal-50 bg-teal-500 w-32 h-8 rounded-md mr-4">
          Logout
        </button>
      </Link>
    </div>
  )
}