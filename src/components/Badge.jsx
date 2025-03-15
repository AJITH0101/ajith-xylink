import React from 'react'
import desert from '../assets/desert.jpg'; 
import { useState, useEffect } from 'react';

const Badge = ({image, details}) => {
  const [effect,setEffect] = useState(false)
  
     useEffect(()=>{
        const timeout = setTimeout(() => {
            setEffect(true);
          }, 50); // Small delay to trigger transition effect
      

      return () => {
        clearTimeout(timeout);
        setEffect(false); // Set effect to false when component unmounts
      };
     },[])
    
  return (
    <div>
        <div className={`w-64 h-44 bg-stone-800 rounded-md shadow-lg shadow-black mt-1 flex justify-center  transition-transform duration-800  ${effect ? "scale-100" : "scale-90"}`}>
            <div className='w-56 h-28 rounded-lg mt-4'>
            <img src={image} alt="Desert" className="w-full h-full object-cover rounded-lg" />
            <div className='flex flex-col'>
            <label className='ml-1 text-white text-[10px] mt-2'>{details.head}</label>
            <label className='ml-1 text-stone-500 text-[9px]'>{details.desc}</label>  
            </div>
            </div> 
        </div>

        <div className={`flex flex-row items-center w-64 h-20 bg-stone-800 rounded-md shadow-lg shadow-black mt-3 transition-transform duration-800  ${effect ? "scale-100" : "scale-90"}`}>
            <div className='w-12 h-12 ml-4'>
                <img src={image} alt="Desert" className="w-full h-full object-cover rounded-lg" />
            </div>
      
            <div className='flex flex-col'>
                <label className='ml-1 text-white text-[10px]'>{details.bottom}</label> 
                <label className='ml-1 text-stone-500 text-[9px]'>{details.desc}</label>  
            </div>       

        </div>
    </div>
  )
}

export default Badge