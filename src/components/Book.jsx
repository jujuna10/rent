import Image from 'next/image'
import React from 'react'

function Book() {
  return (
    <section>
        <div className='flex justify-between items-center px-24'>
                <div className='flex flex-col justify-center items-start w-[50%]'>
                    <p className='text-white text-[65px] max-w-[80%] font-serif'>Step Into the World off Luxuary!</p>
                    <p className='text-gray-500 text-[20px] max-w-[65%]'>Experience elegance, comfort, and exclusivity with LUX Rent. Whether it's a business event, wedding, or special celebration, your journey begins here.</p>
                    <button className="px-4 py-2 w-[12%] rounded-[20px] transition-all duration-500 bg-[rgb(255,203,103)] hover:cursor-pointer mt-12">Book</button>
                </div>
                <div>
                    <Image src='/limousine.png' width={10000000} height={100000} alt='limousine' className='w-[550px] h-[550px]' />
                </div>
            </div>
    </section>
  )
}

export default Book