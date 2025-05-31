'use client'
import React, { useState } from 'react'

function Header() {

  const headersLinks = ['Home','Fleet','Services','Pricing','Contact']
  const [currentLink,setCurrentLink] = useState(0)

  return (
    <header className='flex justify-between px-44 py-5 w-full items-center'>
      <h1 className='text-[rgb(191,163,113)] flex gap-3 text-[25px] font-semibold'>Limo <span className='text-white'>Rent</span></h1>
      <div className='flex gap-5'>
        {headersLinks.map((item,index) => (
          <p key={index} className={`${index === currentLink ? 'text-[rgb(191,163,113)] font-semibold' : 'text-gray-500'} hover:cursor-pointer`} onClick={() => setCurrentLink(index)}>{item}</p>
        ))}
      </div>
      <div className="flex gap-12 items-center group">
        <button className="px-4 py-2 rounded-[20px] transition-all duration-500 text-white hover:bg-[rgb(255,203,103)] hover:text-black hover:cursor-pointer">Sign In</button>
        <button className="px-4 py-2 rounded-[20px] transition-all duration-500 bg-[rgb(255,203,103)] text-black group-hover:bg-black hover:cursor-pointer group-hover:text-white hover:text-white hover:bg-black">Sign Up</button>
      </div>

    </header>
  )
}

export default Header