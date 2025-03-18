import React from 'react'
import { useEffect, useState } from "react";
import Uplift from './Uplift'

const Firstpage = () => {
  const [scrollValue, setScrollValue] = useState(100)
    const [degreeValue, setDegreeValue] = useState(0)

   useEffect(()=>{
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scale = Math.max(40, Math.floor(100 - ((scrollY / 360) * (100 - 40))));
        const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
        console.log("scroll y position", scale);
        setScrollValue(scale);
        setDegreeValue(degree)
        
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);

      //transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`
  
    },[])
  return (
    <div className='w-full relative'>  
          <div
            className="min-h-[150vh]"
            style={{
              transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Uplift />
          </div>
        </div>
  )
}

export default Firstpage