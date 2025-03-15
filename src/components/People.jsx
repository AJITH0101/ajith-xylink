import React, { useEffect, useState } from 'react'
import salesgirl from '../assets/salesgirl.jpg'
import linkedin from '../assets/linked.jpg'

const People = () => {
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
   <>
   <div>
   <div className={`relative flex flex-col w-68 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2 transition-transform duration-800 ${effect ? "scale-100" : "scale-70"}`}>
        <div className='flex flex-row'>
        <img src={salesgirl} alt='sales' className='w-16 h-16 rounded-lg ml-5'/>
        <div className='flex flex-col'>
        <label className='text-stone-300 text-sm ml-2 mt-3'>Alina Paul</label>
        <label className='text-stone-500 text-[10px] ml-2'>Head of Sales Department</label>
        </div>
        </div>

   </div>
   <div className='flex flex-row mt-2'>
   <div className={`relative flex flex-col w-32 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2 transition-transform duration-800 ${effect ? "scale-100" : "scale-70"}`}>
   <div>
        <div className='flex flex-row'>
        <img src={salesgirl} alt='sales' className='w-10 h-10 rounded-lg ml-3'/>
        <img src={linkedin} alt='logo' className='w-6 h-6 rounded-full ml-10 mt-1'/>
        </div>
        <div className='flex flex-col'>
        <label className='text-stone-300 text-[10px] ml-2 mt-3'>Alina Paul</label>
        <label className='text-stone-500 text-[10px] ml-2'>Sales Department</label>
        </div>
        </div>
    </div>

    <div className={`relative flex flex-col w-32 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center ml-4 mt-2 transition-transform duration-800 ${effect ? "scale-100" : "scale-70"}`}>
    <img src={salesgirl} alt="sales" className="w-full h-full object-cover rounded-md" />
    </div>
   </div>
   </div>
   </>
  )
}

export default People