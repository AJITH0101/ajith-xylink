import React from 'react'
import { useEffect, useState } from "react";

const Trialpage = () => {
     const [scrollValue, setScrollValue] = useState(100)
        const [degreeValue, setDegreeValue] = useState(0)

        useEffect(()=>{

            const handleScroll = ()=>{
              const scrollY = window.scrollY;  
              const scale = scrollY <= 500 
              ? 100 
              : Math.max(30, Math.floor(100 - (((scrollY - 500) / 360) * (100 - 30))));

              const degree = scrollY <= 500
              ? 0 
              : Math.max(-45, Math.floor(0 - (((scrollY - 500) / 360) * 45)));
            
              console.log("degree value",degree);
              setScrollValue(scale);
              setDegreeValue(degree)
              
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            

        },[])



        
  return (
    <div className='w-full'>
    <div className='lg:w-[70rem] h-[35rem] rounded-lg border border-stone-600'
     style={{
        transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
        transition: "transform 0.5s ease-out",
      }}
    
    >

    </div>
    </div>
  )
}

export default Trialpage