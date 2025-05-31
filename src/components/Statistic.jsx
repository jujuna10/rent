import React from 'react'

function Statistic() {
    const stats = [
        { number: "150+", text: "Luxury Cars in Our Fleet" },
        { number: "8000+", text: "Satisfied Clients Worldwide" },
        { number: "200+", text: "Successful Corporate Partnerships" },
        { number: "10+ Years", text: "Providing Premium Services" },
        { number: "4.9", text: "Customer Ratings" }
    ];

  return (
    <section className='flex flex-col items-center gap-7'>
        <p className='text-white text-[55px] font-serif text-center'>Step Into the World of <br /> Luxuary</p>
        <p className='text-gray-500 text-[20px]'>Experience,trust,and unmatched service crafted over the years.</p>
        <div className='flex justify-between w-[90%]'>
            {stats.map((item,index) => (
                <div key={index} className='flex flex-col gap-5 w-[14%] items-center'>
                    <p className='text-green-400 text-[45px]'>{item.number}</p>
                    <p className='text-gray-500 text-[22px] max-w-[90%] text-center'>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Statistic