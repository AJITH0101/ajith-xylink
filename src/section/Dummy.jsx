import React from 'react'
import { useEffect, useState } from "react";
import Uplift from './Uplift'

const Dummy= () => {
    const [scrollValue, setScrollValue] = useState(100)
    const [degreeValue, setDegreeValue] = useState(0)
    const [bounce,setBounce] = useState({
      bounceX:0,
      bounceY:0
    })
      
  
     useEffect(()=>{
    
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if(scrollY>560){
          const scale = Math.max(30, Math.floor(100 - ((scrollY / 360) * (100 - 30))));
          const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
          //console.log("scroll y position", scrollY);
          setScrollValue(scale);
          setDegreeValue(degree) 
          }
          else{
            setScrollValue(100);
            setDegreeValue(0) 
           
          }
         
          
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  
        //transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`  
      },[])
  
      const selectPage = ()=>{
        window.scrollTo({
          top: 560, // Adjusted value
          behavior: "smooth",
        });
        console.log("Second page");
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
                  setBounce((prev) => ({ ...prev, bounceX: 50, bounceY: 50 }));
                }
               
              }}
  
              onMouseLeave={()=>{
                setBounce((prev) => ({ ...prev, bounceX: 0, bounceY: 0 }));
                }            
  
              }
              
            >
              <div className='absolute w-full flex justify-center ' onClick={selectPage}>
                 <div className='lg:w-[75rem] h-[35rem] border border-stone-800 rounded-lg flex justify-center items-center  transition-transform duration-1000'>

                    <div className='lg:w-[70rem] h-[30rem] border border-stone-800 bg-stone-950 rounded-lg '>

                    </div>
                 </div>
              </div>
              
            </div>
          </div>
    )
  }

export default Dummy