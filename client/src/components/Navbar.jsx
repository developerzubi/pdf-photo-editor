import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full p-4'>
  <div className='flex justify-between items-center'>
    <h1 className='text-white text-2xl font-bold'><Link to={'/'}>PDf & Photo Editor</Link></h1>
    <nav>
      <ul className='flex space-x-8'>
        <li className='text-white text-lg font-semibold px-4 py-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300 cursor-pointer'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='text-white text-lg font-semibold px-4 py-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300 cursor-pointer'>
        <Link to={'/signup'}>Register</Link>
        </li>
        <li className='text-white text-lg font-semibold px-4 py-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300 cursor-pointer'>
        <Link to={'/login'}>Signin</Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
)}

export default Navbar
