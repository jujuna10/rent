import React from 'react'
import { Hand, Clock, Headset } from 'lucide-react';


function WhyChoose() {
    const services = [
        {
            title: "White-Glove Service",
            text: "Experience unparalleled service with professional chauffeurs and personalized attention to every detail.",
            icon: Hand // Using the component directly
        },
        {
            title: "Punctuality & Reliability",
            text: "Arrive in style and on time. We ensure reliable service for a seamless journey, every time.",
            icon: Clock // Using the component directly
        },
        {
            title: "24/7 Support",
            text: "Need assistance? Our round-the-clock support team is here to help with bookings and inquiries.",
            icon: Headset // Using the component directly
        }
    ];
  return (
    <section className='flex flex-col gap-24'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-[55px] font-serif'>Why CHoose Lux Rent</p>
            <p className='text-gray-500 text-[20px]'>Expreience the Pinnacle of Luxuary and Service</p>
        </div>
        <div className='w-full flex gap-[7%] justify-center'>
            {services.map((item,index) => (
                <div key={index} className='w-[20%] flex flex-col gap-5 items-center'>
                    <div className='bg-[rgb(65,64,54)] w-[105px] h-[105px] flex justify-center items-center rounded-[50%]'>
                        <div className='bg-[rgb(92,87,79)] w-[85px] h-[85px] rounded-full flex items-center justify-center'>
                            <item.icon  className="text-yellow-200 w-12 h-12" /> {/* Rendering the icon component */}
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-[25px] font-semibold'>{item.title}</p>
                        <p className='text-gray-400 text-[15px]'>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhyChoose