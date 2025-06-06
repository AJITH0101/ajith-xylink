import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Uplift from './Uplift'

const Dummy= ({getValue,sendDataToParent,pageData}) => {
    const [scrollValue, setScrollValue] = useState(100)
    const [degreeValue, setDegreeValue] = useState(0)
    const [bounce,setBounce] = useState({
      bounceX:0,
      bounceY:0
    })
      
  
     useEffect(()=>{
   
        const handleScroll = () => {
          
          
          const scrollY = window.scrollY;       
          sendDataToParent(scrollY)   
       
          if(scrollY>getValue){        
          const scale = Math.max(30, Math.floor(100 - ((scrollY / 360) * (100 - 30))));
          const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
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
    
      },[sendDataToParent])
  
      const selectPage = ()=>{
        window.scrollTo({
          top: getValue, // Adjusted value
          behavior: "smooth",
        });
    
    sendDataToParent(getValue) 
    }

     
      
    return (
      <div className='w-full relative h-auto'>  
            <div
              
              style={{
                transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)
                `,
                transition: "transform 0.5s ease-out",
               
              }}
  
  
              onClick={selectPage} 
              /*
              
              onMouseEnter={() => {
                if (scrollValue < 50) {
                  setBounce((prev) => ({ ...prev, bounceX: 20, bounceY: 20 }));
                }
               
              }}
  
              onMouseLeave={()=>{
                setBounce((prev) => ({ ...prev, bounceX: 0, bounceY: 0 }));
                }            
  
              }*/
              
            >
              <div className='absolute w-full flex justify-center ' onClick={selectPage}>
                 <div className='w-[95%] h-[100vh] md:w-[95%] md:h-[100vh] w-[100%] h-[100vh] border border-stone-800 rounded-lg flex justify-center items-center  transition-transform duration-1000  mt-13 '>

                    <div className='lg:w-[93%] lg:h-[90vh] md:w-[93%] md:h-[90vh] w-[95%] h-[95vh] border border-stone-800 bg-stone-950 rounded-lg '>   
                      {pageData}
                    </div>
                 </div>
              </div>
              
            </div>
          </div>
    )
  }

export default Dummy