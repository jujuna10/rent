import React from 'react'
import Image from 'next/image'
import { MoveRight, MapPin, CalendarDays, Minus } from 'lucide-react';


function HeroSection() {
  return (
    <section className='flex flex-col items-center justify-center gap-12 relative pb-12'>
        <div className="absolute top-[0%] right-[-15%] w-[900px] h-[900px] bg-[radial-gradient(circle,_#998543_0%,_transparent_70%)] opacity-30 blur-2xl pointer-events-none" />

        <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[65px] font-serif max-w-[65%] text-center font-semibold'>Your <span className='text-[rgb(191,163,113)]'>Ultimate</span> Luxury Drive Awaits</p>
            <p className='text-gray-600'>Rent the world's finest cars and readefine luxuary travel</p>
        </div>
        <div className='flex justify-center items-start'>
            <div className='w-full flex flex-col items-center relative'>
                <Image src='/car.png' width={100000} height={100000} className='w-[100%] h-[350px]' />
                <div className='w-full flex items-center justify-between rounded-[50px] bg-white/10 backdrop-blur-md shadow-lg absolute bottom-[10%]'>
                  <div className='flex flex-col gap-2 items-center px-7 py-2'>
                    <div className='flex gap-2 items-center'>
                      <MapPin color='green' />
                      <p className='text-white text-[13px] font-semibold'>Location</p>
                    </div>
                    <p className='text-gray-500 text-[10px] font-semibold'>City Or Airport</p>
                  </div>
                  <div>
                    <Minus color='gray' className='rotate-90' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                      <CalendarDays color='green' />
                      <p className='text-white text-[13px] font-semibold'>Pick Up Date</p>
                    </div>
                    <p className='text-gray-500 text-[10px] font-semibold'>Tue 20 Jan, 9:00</p>
                  </div>
                  <div>
                    <Minus color='gray' className='rotate-90' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                      <CalendarDays color='green' />
                      <p className='text-white text-[13px] font-semibold'>Return Date</p>
                    </div>
                    <p className='text-gray-500 text-[10px] font-semibold'>Fri 24 Jan, 11:00</p>
                  </div>
                  <button className='bg-[rgb(255,203,103)] px-5 py-3 rounded-[50px] mr-[2%]'>Search</button>
                </div>
                <div className='flex gap-5 absolute bottom-[-10%]'>
                  <p className='text-white text-[20px]'>Popular Search:</p>
                  <div className='flex gap-2'>
                    <button className='bg-[rgb(41,41,41)] px-5 py-2 rounded-[20px] text-gray-500 text-[15px]'>Cadillac Limousines</button>
                    <button className='bg-[rgb(41,41,41)] px-5 py-2 rounded-[20px] text-gray-500 text-[15px]'>BMW 2 Series</button>
                    <button className='bg-[rgb(41,41,41)] px-5 py-2 rounded-[20px] text-gray-500 text-[15px]'>Hummer H3 Limo</button>
                  </div>
                </div>

            </div>
            <div className='w-[35%] flex gap-5 items-center'>
              <div className='border-[1px] border-yellow-400 w-[50px] h-[50px] border-dashed rounded-[50%] flex justify-center items-center'>
                  <MoveRight color='green' />
              </div>
              <p className='text-yellow-500 text-[19px]'>Explore All Cars</p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection