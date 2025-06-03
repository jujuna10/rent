'use client'
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Users, BriefcaseBusiness } from 'lucide-react';
import Image from 'next/image';

function CarCarousel() {
    const allLimousines = [
        {
            name: "Rolls-Royce Limousine",
            price: 500,
            numbers: [4, 6],
            image: "/carpng1.png"
        },
        {
            name: "Mercedes-Benz Limousine",
            price: 450,
            numbers: [3, 5],
            image: "/carpng2.png"
        },
        {
            name: "Hummer H2 Limousine",
            price: 600,
            numbers: [6, 8],
            image: "/carpng3.png"
        },
        {
            name: "Cadillac Escalade Limousine",
            price: 550,
            numbers: [5, 7],
            image: "/carpng4.png"
        },
        {
            name: "Lincoln Limousine",
            price: 480,
            numbers: [4, 6],
            image: "/carpng5.png"
        },
        {
            name: "BMW 7 Series Limousine",
            price: 520,
            numbers: [3, 5],
            image: "/carpng6.png"
        },
        {
            name: "Audi A8 Limousine",
            price: 510,
            numbers: [4, 5],
            image: "/carpng7.png"
        },
        {
            name: "Lexus LS Limousine",
            price: 490,
            numbers: [3, 5],
            image: "/carpng8.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState('transform 500ms ease-in-out');

    const nextSlide = () => {
        if (currentIndex + 4 >= allLimousines.length) return;
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(prev => prev - 1);
    };

    const getTranslateX = () => {
        return `-${currentIndex * 30}%`;
    };

    return (
        <section className='flex flex-col gap-24'>
            <div className='flex justify-between items-center px-24'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-white text-[65px] max-w-[80%] font-serif'>Explore Our Exquisite Fleet</p>
                    <p className='text-gray-500 text-[20px] max-w-[65%]'>From sleek sports cars to executive sedans, our fleet caters to every occasion and style.</p>
                </div>
                <div className='flex gap-5'>
                    <button 
                        onClick={prevSlide} 
                        disabled={currentIndex === 0}
                        className={`w-[55px] h-[55px] rounded-[50%] ${currentIndex === 0 ? 'bg-gray-400' : 'bg-gray-200'} flex justify-center items-center transition-all duration-500 hover:scale-110`}
                    >
                        <ChevronLeft />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        disabled={currentIndex + 4 >= allLimousines.length}
                        className={`w-[55px] h-[55px] rounded-[50%] ${currentIndex + 4 >= allLimousines.length ? 'bg-gray-400' : 'bg-[rgb(255,204,108)]'} flex justify-center items-center transition-all duration-500 hover:scale-110`}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            
            <div className='relative overflow-hidden h-[400px] w-full'>
                <div className='flex gap-[5%] absolute left-[10%]' style={{transform: `translateX(${getTranslateX()})`,transition: transition,width: `${allLimousines.length * 9.5}%`}}>
                    {allLimousines.map((item, index) => (
                        <div key={index} className='flex flex-col w-[25%] flex-shrink-0'>
                            <div className='bg-gradient-to-b from-[#251e0b] to-[#030303] rounded-[20px] px-5 py-5'>
                                <Image src={item.image} width={350} height={270} className='w-full h-[270px] object-contain' alt={item.name} />
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                <p className='text-white font-semibold'>{item.name}</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-5'>
                                        <div className='flex gap-1 bg-[rgb(41,41,41)] px-3 py-1 items-center justify-center rounded-[20px]'>
                                            <Users color='white' width={20} />
                                            <p className='text-white'>{item.numbers[0]}</p>
                                        </div>
                                        <div className='flex gap-1 bg-[rgb(41,41,41)] px-3 py-1 items-center justify-center rounded-[20px]'>
                                            <BriefcaseBusiness color='white' width={20} />
                                            <p className='text-white'>{item.numbers[1]}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-yellow-400 font-semibold text-[25px]'>${item.price}<span className='text-gray-500 text-[10px]'>/day</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarCarousel;