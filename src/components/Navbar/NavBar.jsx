import React from 'react'
import { Link } from 'react-router-dom'
import NavData from './NavData'

function NavBar() {
  return (
    <div className='fixed top-0 left-0 w-screen bg-primary/40 backdrop-blur-sm flex justify-between items-center px-4 py-8 z-50'>
      <div className='flex items-center space-x-8'>
        <Link to={'/'}>
      <h1 className='text-2xl bold'>BEST ELECTRIC CAR</h1>
        </Link>
        <div>
        <input type="text" placeholder="Search..." className="input input-bordered w-96" />
        </div>
      </div>
      
      <div className='flex justify-end items-center'>
        {NavData.map((item, index) => (
          <div className='mx-4' key={index}>
            <Link to={item.path}>
            <h2 className='hover:scale-110 duration-300'>{item.title}</h2>
            </Link>
          </div>
      ))}
      </div>
    </div>
  )
}

export default NavBar