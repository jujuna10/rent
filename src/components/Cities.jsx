import React from 'react'
import Image from 'next/image'

function Cities() {
    const cities = [
        {city: 'New York', photo: '/newYork.png'},
        {city: 'Los Angeles', photo: '/losAngeles.png'},
        {city: 'Paris', photo: '/paris.png'},
        {city: 'Dubai', photo: '/dubai.png'},

    ]
  return (
    <section className='w-full px-29 flex justify-between mt-24'>
        <div className='w-[45%] flex flex-col gap-12'>
            <div>
                <p className='text-white text-[45px] font-serif'>Experience Luxuary in the <br /> World's Finest Cities</p>
                <p className='text-gray-500 text-[20px] w-[49%]'>Discover our premium limousine services in top destinations across the globe</p>
            </div>
            <button className="px-4 py-2 w-[12%] rounded-[20px] transition-all duration-500 bg-[rgb(255,203,103)] hover:cursor-pointer">View All</button>
        </div>
        <div className='flex gap-2 w-[35%]'>
            {cities.map((item,index) => (
                <div key={index} className='relative'>
                    <Image src={item.photo} width={1000000} height={20} alt={item.city} className='h-[420px] w-[150px] rounded-[20px]' />
                    <div className='absolute top-5 flex justify-center text-white px-2 py-1 rounded-[20px] w-full'> 
                        <button className='text-white px-2 py-1 rounded-[20px] bg-white/50'>{item.city}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Cities