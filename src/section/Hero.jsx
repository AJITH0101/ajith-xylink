import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
   <>
   <div className="flex h-screen text-white ml-4 ">
      <div className="typewriter-container text-[3.5rem] leading-tight">
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
   </>
  )
}

export default Hero