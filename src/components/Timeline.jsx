import React from 'react'
import { motion } from "framer-motion";
import girl1 from '../assets/girlnew1.jpg'
import girl2 from '../assets/girlnew2.png'
import girl3 from '../assets/salesgirl.jpg'

const Timeline = () => {

    const images = [
        girl3,girl2,girl1        
      ];
  return (
   <>
   <div className='relative flex flex-col w-[100%] h-[95%] bg-stone-800 rounded-md shadow-lg shadow-black mt-5 overflow-hidden'>
    <label className='text-sm text-white mt-4 ml-4'>Our Journey</label>
<label className='absolute top-8 text-[12px] text-stone-300  ml-8 mt-2'>All start over here</label>
<label className='absolute top-14 text-[10px] text-stone-500  ml-8 mt-2'>Everything starts with an idea. A spark that<br/>we just could not stop thinking about.</label>
    

<label className='absolute top-32 text-[14px] text-stone-300  ml-8 mt-2'>Our Gems</label>
  <div className='ml-4'>
    

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-2 h-2 mt-2 rounded-full bg-stone-500"
      />

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut", delay: 0.5 }}
        className="w-2 h-2 mt-10 rounded-full bg-stone-500"
      />

<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut", delay: 1 }}
        className="w-2 h-2 mt-20 rounded-full bg-stone-500"
      />

    <div className='ml-1'>
    <motion.div
        initial={{ height: 10, top: "50px" }} // Start slightly lower
        animate={{ height: "80%" }} // Grow downward
        transition={{ duration: 2, ease: "easeInOut" }} // Smooth transition
        className="absolute w-[1px] bg-stone-500"
      />
      </div>
   </div>


   <div className="absolute top-42 w-[100%] h-[20%] ml-4 flex overflow-hidden">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`image-${index}`}
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: 0 }} // Move to final position
          transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.5 }} // Staggered effect
          className="lg:w-16 lg:h-16 md:w-16 md:h-16 w-12 h-12 ml-4 rounded-md object-cover"
        />
      ))}
    </div>

   </div>
   </>
  )
}

export default Timeline