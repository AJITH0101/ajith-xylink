import React from 'react'
import { useEffect, useState } from "react";

const Secondpage = () => {
   const [scrollValue, setScrollValue] = useState(100)
      const [degreeValue, setDegreeValue] = useState(0)


   useEffect(()=>{
    
        const handleScroll = () => {
        // Keep scale and degree unchanged until scrollY reaches 320
      if (scrollY <= 420) {//320
        setScrollValue(100);
        setDegreeValue(0);
        return;
      }

      // After scrollY = 320, start changing values smoothly
      const maxScrollRange = 360; // You can adjust this
      const progress = Math.min(1, (scrollY - 320) / (maxScrollRange - 320));

      const newScale = 100 - progress * (100 - 30);
      const newDegree = -progress * 45;

      setScrollValue(Math.max(30, newScale));
      setDegreeValue(Math.max(-45, newDegree));
          
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
       
      },[])

  return (
   <>
   <div className='relative'>
    <div className='absolute top-[35rem] w-96 h-[35rem] bg-stone-500' 
            style={{
              transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
              transition: "transform 0.5s ease-out",
            }}>

    </div>
   </div>
   </>
  )
}

export default Secondpage