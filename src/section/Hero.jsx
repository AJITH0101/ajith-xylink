import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
   <>
   <div className="flex h-screen text-white font-semibold">
      <div className="typewriter-container text-[4rem] leading-tight">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Impactful stories.Made effortlessly..")
              .start();
          }}
          options={{
            loop: false,
            delay: 75, // Typing speed
            cursor: '', // Hide cursor
          }}
        />
      </div>
    </div>
   </>
  )
}

export default Hero