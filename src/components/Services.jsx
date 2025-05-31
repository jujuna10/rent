import Image from 'next/image';
import React from 'react'

function Services() {
    const rentalServices = [
        {
            title: "Chauffeur Service",
            text: "Travel in ultimate comfort with our highly trained and professional chauffeurs, ensuring a seamless and stress-free experience.",
            photo: "/services1.webp"
        },
        {
            title: "Airport Transfers",
            text: "Arrive in style with our punctual and comfortable airport transfer service. Start or end your journey with class.",
            photo: "/services2.jpeg"
        },
        {
            title: "Corporate Rentals",
            text: "Elevate your business trips with our tailored corporate rental services, perfect for executives and clients.",
            photo: "/services3.jpg"
        },
        {
            title: "Wedding & Events Rentals",
            text: "Make your special moments unforgettable with our luxury cars, perfect for weddings, galas, and events.",
            photo: "/services4.png"
        }
    ];
    
    return (
        <section className='flex flex-col items-center justify-center gap-7 w-full'>
            <div>
                <p className='text-white text-[55px] font-serif text-center'>Exceptional Services for a <br /> Luxurious Drive</p>
                <p className='text-gray-500 text-[20px]'>Our trailored services redfine the way you travel,ensuring comport,convecience,and class.</p>
            </div>
            <div className='grid grid-cols-2 gap-12 w-full justify-items-center'>
                {rentalServices.map((item, index) => (
                    <div key={index} className='relative w-[75%] h-[250px] flex justify-center items-center px-5 gap-5 bg-gradient-to-b from-[#251e0b] to-[#030303] rounded-[20px] border-2 border-black'>
                        {/* ორიგინალური სტილი უცვლელი */}
                        <Image src={item.photo} width={100000} height={100000} className='w-[45%] h-[90%] rounded-[20px]' alt={item.title} />
                        <div className='flex flex-col gap-5'>
                            <p className='text-white text-[20px] font-semibold'>{item.title}</p>
                            <p className='text-gray-400'>{item.text}</p>
                            <button className="px-4 py-2 w-[35%] rounded-[20px] transition-all duration-500 bg-[rgb(255,203,103)] hover:cursor-pointer">Learn More</button>
                        </div>
                        
                        {/* განახლებული ბორდერის სტილი (მხოლოდ ეს ნაწილი შეცვლილია) */}
                        <div className="absolute inset-0 rounded-[20px] border-2 border-[#251e0b] pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services