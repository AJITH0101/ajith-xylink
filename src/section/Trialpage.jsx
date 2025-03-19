import React from 'react'
import { useEffect, useState } from "react";

const Trialpage = () => {
     const [scrollValue, setScrollValue] = useState(100)
        const [degreeValue, setDegreeValue] = useState(0)

        useEffect(()=>{

            const handleScroll = ()=>{
              const scrollY = window.scrollY;  
              const scale = scrollY < 500 
              ? 100 
              : Math.max(30, Math.floor(100 - (((scrollY - 600) / 360) * (100 - 30))));
            
              console.log("scale value",scale);
              setScrollValue(scale);
              
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
            

        },[])



        
  return (
    <>
    <div className='lg:w-[70rem] h-[35rem] rounded-lg border border-stone-600'
     style={{
        transform: `scale(${scrollValue / 100})`,
        transition: "transform 0.5s ease-out",
      }}
    
    >

    </div>
    </>
  )
}

export default Trialpage