import React from 'react'
import { ChevronRight, PhoneCall, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';



function Footer() {
    const links = ['Our Fleet','Services','Top Cities','Testemonials']
    const support = ['FAQs','Terms & COnditions','Privacy Policy','Cancellation Poclicy']
  return (
    <footer className='w-full px-24 flex justify-between'>
        <div className='w-[25%] flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <p className='text-[rgb(191,163,113)] text-[28px] font-semibold'>Limo <span className='text-white'>Rent</span></p>
                <p className='text-gray-300 max-w-[65%]'>Luxe Rent edefines luxuary travel with our premium limousine rental services</p>
            </div>
            <p className='text-white text-[20px]'>Subscride For Updates</p>
            <div className='relative w-[55%]'>
                <input type="email" name="email" id="email" placeholder='Your EMail' className='border-[1px] border-white rounded-[35px] text-white w-full px-3 py-3 absolute top-0 left-0' />
                <button className={`w-[35px] h-[35px] bg-[rgb(255,204,108)] absolute top-2 right-2 rounded-[50%] flex justify-center items-center`}>
                    <ChevronRight />
                </button>
            </div>
        </div>
        <div className='flex gap-12'>
            <div className='flex flex-col gap-5'>
                <p className='text-white text-[22px] font-medium'>Quick Links</p>
                <div className='flex flex-col gap-1'>
                    {links.map((item,index) => (
                        <div key={index}>
                            <p className='text-gray-400'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-white text-[22px] font-medium'>Support</p>
                <div className='flex flex-col gap-1'>
                    {support.map((item,index) => (
                        <div key={index}>
                            <p className='text-gray-400'>{item}</p>
                        </div>
                    ))}
                </div>
            </div> 
            <div className='flex flex-col gap-5'>
                <p className='text-white text-[22px] font-medium'>Get In Touch</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-5'>
                        <PhoneCall color='green' />
                        <p className='text-gray-400'>+1(888) 456-7890</p>
                    </div>
                    <div className='flex gap-5'>
                        <Mail color='green' />
                        <p className='text-gray-400'>test@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className={`w-[32px] h-[32px] bg-[rgb(255,204,108)] rounded-[50%] flex justify-center items-center`}>
                    <Image src='/fb.png' width={20} height={20} />
                </button><button className={`w-[32px] h-[32px] bg-[rgb(255,204,108)] rounded-[50%] flex justify-center items-center`}>
                    <Image src='/instagram.png' width={20} height={20} />
                </button><button className={`w-[32px] h-[32px] bg-[rgb(255,204,108)] rounded-[50%] flex justify-center items-center`}>
                    <Image src='/twitter.png' width={20} height={20} />
                </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer