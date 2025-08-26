import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-16 flex  bg-purple-700 text-white  items-center justify-between px-4'>
        <div className='logo flex justify-center items-center text-2xl font-bold'>
            
             <Link href='/'>BitLinks</Link>
        </div>
        <ul className='flex space-x-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/shorten'><li>Shorten</li></Link>
            
             <li className='flex space-x-2'>
            <Link href='/shorten'><button className=' bg-purple-400 rounded-lg shadow-lg p-2 py-0'>Try Now</button></Link>
            <Link href='/github'><button className=' bg-purple-400 rounded-lg shadow-lg p-2 py-0'>Github</button></Link>
            </li>

        </ul>
    </nav>
  )

}

export default Navbar