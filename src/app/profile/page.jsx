'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


function page() {

  const [data,setData] = useState([])

    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await fetch("http://localhost:8069/web/cars", {
            method: 'GET',
            // headers: {
            //   'Accept': 'application/json',
            //   'Content-Type': 'application/json',
            // },
            mode: 'cors',
          });
  
          if (!response.ok) {
            const errorText = await response.text();
            console.error(`Server response: ${errorText}`);
            // throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          console.log('First item image:', responseData.data[0]?.image?.substring(0, 50));
          console.log(responseData, 'dataa');
          setData(responseData.data);


          console.log("Loaded data:", data);
        } catch (error) {
          console.error("Error during loading:", error);
        }
      };
  
      fetchCars();
    }, []);

    console.log(data,'data')
  return (
    <div className='w-full h-screen bg-[rgb(17,17,17)] px-12 py-5 flex flex-col justify-between'>
          <h1 className='text-[rgb(191,163,113)] flex gap-3 text-[25px] font-semibold'>Limo <span className='text-white'>Rent</span></h1>

        <div className='flex justify-between'>
          <div className='w-[25%]'>

          </div>
          {/* cars */}
          <div className='grid grid-cols-4 w-[100%] gap-5'>
              {data?.map((item, index) => (
                <div key={index} className='flex flex-col w-[100%] bg-black box-border py-5 px-3 rounded-[10px] hover:translate-y-[-10px] shadow-md hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300'>
                  <button className='bg-yellow-500 w-[20%] rounded-[25px] px-2 py-1'>{item.type_name}</button>
                  <img src={item.image} alt={item.brand} />
                  <div className='flex justify-between'>
                    <p className='text-white text-[20px] font-semibold'>{item.brand} {item.model}</p>
                    <p className='text-yellow-400 font-medium text-[20px]'>${item.price}<span className='text-gray-500 text-[15px]'>/day</span></p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Image src='/star.png' width={20} height={20} />
                    <p className='text-gray-400 text-[17px]'>{item.stars}</p>
                    <p className='text-gray-400 text-[17px]'>(20 reviews)</p>
                  </div>
                </div>
              ))}

          </div>
        </div>
    </div>
  )
}

export default page