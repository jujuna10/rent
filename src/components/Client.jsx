import Image from 'next/image';
import React from 'react'
import { Quote } from 'lucide-react';


function Client() {
    const clients = [
        {
            fullname: "Emily Carter",
            work: "Travel Blogger",
            text: "The limousine was exquisite, and the customized experience made my special day even more memorable.",
            photoUrl: "/women1.jpg"
        },
        {
            fullname: "John Alexander",
            work: "Designer",
            text: "The service was amazing. From the moment the chauffeur arrived to the luxurious ride itself, every detail was perfection.",
            photoUrl: "/men1.webp"
        },
        {
            fullname: "Jessica L.",
            work: "Lawyer",
            text: "I’ve worked with many car rental services, but none match the professionalism and luxury of this one. Always my top choice for VIP events.",
            photoUrl: "/women2.webp"
        }
    ];

  return (
    <section className='flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-[55px] font-serif'>What Our Clients Saying</p>
            <p className='text-gray-500 text-[20px]'>Trusted by ELite Travelers Worldwide</p>
        </div>
        <div className='flex justify-center gap-[10%]'>
            {clients.map((item,index) => (
                <div key={index} className='w-[25%] flex flex-col gap-5 justify-start items-start px-15 py-12 bg-gradient-to-b from-[#251e0b] to-[#030303] rounded-[20px]'>
                    <div>
                        <div className='flex justify-between gap-5'>
                            <Image src={item.photoUrl} width={50} height={65} alt={item.fullname} className='rounded-[50%] w-[50px] h-[50px]' />
                            <div className='flex flex-col'>
                                <p className='text-[20px] font-semibold text-white'>{item.fullname}</p>
                                <p className='text-[15px] text-green-500 font-semibold'>{item.work}</p>
                            </div>
                            <Quote color='white' className='w-[45px] h-[45px]' />
                        </div>
                        {/* comma */}
                    </div>
                    <p className='text-white text-[18px] max-w-[90%]'>{item.text}</p>
                    <div className='flex justify-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.174L12 18.896l-7.336 3.87 1.402-8.174L.132 9.21l8.2-1.192z"/>
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Client