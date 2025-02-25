import React from 'react'
import Image from 'next/image';

//Navbar Component
const Navbar = () => {
  return (
    <nav className='navbar border-b-[1px] border-customBorder flex justify-between p-4 min-w-full'>
        <div className='flex items-center justify-center gap-2'>
          <Image 
          src="/images/whatbytes_icon.png" 
          alt='whatbytes icon' 
          width={40} 
          height={40}
          className='whatbytes-image'
          />
          <h1 className='capitalise font-bold md:text-1xl lg:text-2xl'>WhatBytes</h1>
        </div>
        <div className='flex items-center justify-center gap-2 border-2 border-customBorder p-1 rounded-md cursor-pointer'>
          <Image 
          src="/images/profile-pic.png" 
          alt='profile picture' 
          width={30} 
          height={5}
          className='profile-image'
          />
          <p className='capitalise font-bold'>Priyanshi Garg</p>
        </div>
      </nav>
  )
}

export default Navbar
