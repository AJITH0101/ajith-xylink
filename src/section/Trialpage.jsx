import React from 'react'
import { useEffect, useState } from "react";

const Trialpage = () => {
     const [scrollValue, setScrollValue] = useState(100)
        const [degreeValue, setDegreeValue] = useState(0)
        const[topValue, setTopValue] = useState(140)

        useEffect(()=>{

            const handleScroll = ()=>{
            const scrollY = window.scrollY;
            const scale = scrollY <= 500 ? 100: Math.max(30, Math.floor(100 - (((scrollY - 500) / 360) * (100 - 30))));
            const degree = scrollY <= 500 ? 0: Math.max(-45, Math.floor(0 - (((scrollY - 500) / 360) * 45)));
            const changeTop = scrollY > 360 ? Math.max(0, 140 - ((scrollY - 360) * (140 / 140))) : 140;

                console.log("check axis", scrollY);
                setScrollValue(scale);
                setDegreeValue(degree)
                setTopValue(changeTop)
              
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
 
        },[])

        const selectPage = ()=>{
          window.scrollTo({
            top: 500, // Adjusted value
            behavior: "smooth",
          });
        
          // Delay state reset to prevent jerking
          setTimeout(() => {
            setScrollValue(100);
            setDegreeValue(0);
          }, 500); // Adjust delay based on scroll speed
        

          console.log("page selected");
          

        }


   
  return (
    <div className='relative w-full h-auto'>
    <div
     style={{
        transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
        transition: "transform 0.5s ease-out",
      }}    
    >

<div className='absolute w-full flex justify-center '>

    <div className={`lg:w-[75rem] h-[35rem]  absolute  rounded-lg border border-stone-600  transition-[top] duration-800 ease-in-out`}
       style={{ top: `${topValue * 4}px` }} onClick={selectPage}
    ></div>
              
            </div>



    </div>
    </div>
  )
}

export default Trialpage