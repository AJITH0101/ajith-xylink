import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (

   <div className="w-full flex h-screen text-white ml-4  lg:text-left md:text-left">
      <div className="typewriter-container lg:text-[3rem] md:text-[2rem] text-[2rem] leading-tight">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Impactful stories.Made effortlessly..")
              .start();
          }}
          options={{
            loop: false,
            delay: 40, // Typing speed
            cursor: '', // Hide cursor
          }}
        />
      </div>
    </div>
  
  )
}

export default Hero