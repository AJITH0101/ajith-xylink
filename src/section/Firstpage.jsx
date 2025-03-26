import React from 'react'
import { useEffect, useState } from "react";
import Uplift from './Uplift'

const Firstpage = () => {
  const [scrollValue, setScrollValue] = useState(100)
  const [degreeValue, setDegreeValue] = useState(0)
  const [bounce,setBounce] = useState({
    bounceX:0,
    bounceY:0
  })
    

   useEffect(()=>{
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scale = Math.max(30, Math.floor(100 - ((scrollY / 360) * (100 - 30))));
        const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
        //console.log("scroll y position", scrollY);
        setScrollValue(scale);
        setDegreeValue(degree)
        
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);

      //transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`  
    },[])

    const selectPage = ()=>{
      window.scrollTo({
        top: 0, // Adjusted value
        behavior: "smooth",
      });
      console.log("first page");
      
    }
    
  return (
    <div className='w-full relative h-auto transition-transform duration-500 ease-out'>  
          <div
            
            style={{
              transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)
              translateX(${bounce.bounceX}px) translateY(${bounce.bounceY}px)`,
              transition: "transform 0.5s ease-out",
            }}


            onClick={selectPage} onMouseEnter={() => {
              if (scrollValue < 50) {
                setBounce((prev) => ({ ...prev, bounceX: 20, bounceY: 20 }));
              }
             
            }}

            onMouseLeave={()=>{
              setBounce((prev) => ({ ...prev, bounceX: 0, bounceY: 0 }));
              }            

            }
            
          >
            <div className='absolute w-full flex justify-center '>
              <Uplift />
            </div>
            
          </div>
        </div>
  )
}

export default Firstpage