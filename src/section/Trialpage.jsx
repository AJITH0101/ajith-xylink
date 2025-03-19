import React from 'react'
import { useEffect, useState } from "react";

const Trialpage = () => {
     const [scrollValue, setScrollValue] = useState(100)
        const [degreeValue, setDegreeValue] = useState(0)

        useEffect(()=>{

            const handleScroll = ()=>{
                const scrollY = window.scrollY;
                const scale = Math.max(30, Math.floor(100 - ((scrollY / 360) * (100 - 30))));
        
                const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
                //console.log("scroll y position", scrollY);
                setScrollValue(scale);
                setDegreeValue(degree)
              
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            

        },[])



        
  return (
    <div className='w-full h-auto'>
    <div
     style={{
        transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
        transition: "transform 0.5s ease-out",
      }}
    
    >

<div className='absolute w-full flex justify-center '>

    <div className='lg:w-[70rem] h-[35rem] rounded-lg border border-stone-600'></div>
              
            </div>



    </div>
    </div>
  )
}

export default Trialpage