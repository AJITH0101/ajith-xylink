import React from 'react'
import bargraph from '../assets/bargraph.jpg'
import negro from '../assets/negro.jpg'
import yellow from '../assets/yellowmodel.jpg'

const Social = () => {
  return (
    <>
    <div className='lg:w-[80%] md:w-[80%] w-[100%] h-auto lg:mt-8 md:mt-8 mt-4 border border-stone-800 rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg  shadow-black'>  
      <div className='w-[100%] flex justify-center  flex-col items-center'>    
        <img src={bargraph} alt='bargraph' className='w-48 rounded-lg mt-2' />
        <label className='text-white text-sm mt-2'>Growing gradually</label> 
        </div>  
        <div className='w-[100%] flex justify-center  flex-row '>
          <div>
            <img src={negro} alt='bargraph' className='lg:w-20 lg:h-24 md:w-28 md:h-auto w-14 mx-3 rounded-lg mt-2' />
            <label className='text-white text-xs '>Emma</label>
            </div>
            <div>
            <img src={yellow} alt='bargraph' className='lg:w-18  lg:h-24 md:w-28 w-14 rounded-lg mt-2 ' />
            <label className='text-white text-xs'>Maati</label>
            </div>
          
        </div>
          <label className='text-stone-500 text-xs ml-2'>Social Media Influenzers</label>
    </div>
    </>
  )
}

export default Social