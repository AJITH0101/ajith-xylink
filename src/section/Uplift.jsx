import React from 'react'
import { useEffect, useState } from "react";
import Mainbadge from '../components/Mainbadge';
import Hero from './Hero';

const Uplift = () => {

    const [lift, setLift] = useState(false);

    const[startWrite, setStartWrite]= useState(false)
    const[startBadge, setStartBadge]= useState(false)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLift(true);
      }, 100);

      const timerWrite = setTimeout(()=>{
            setStartWrite(true)
        },1000);

        const timerBadge= setTimeout(()=>{
            setStartBadge(true)
        },3000);
  
      return () => {
        clearTimeout(timeout,timerWrite,timerBadge);
        //clearTimeout(timerWrite); 
      }
    }, []);

   

  return (
  



      <div className='w-[95%] h-[100vh] md:w-[95%] md:h-[100vh] w-[100%] h-[100vh] border border-stone-800 rounded-lg flex justify-center items-center  transition-transform duration-1000 mt-13' style={{
        transform: `perspective(600px) rotateX(${lift ? "0deg" : "90deg"})`,
        transformOrigin: "bottom",
        fontFamily: "Poppins, sans-serif" 
      }}>

            <div className='lg:w-[93%] lg:h-[90vh] md:w-[93%] md:h-[90vh] w-[95%] h-[95vh] border border-stone-800 bg-black rounded-lg flex lg:flex-row md:flex-row flex-col items-center justify-center bg-stone-950 '
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='%23111111'/%3E%3C/svg%3E")`,
                    backgroundSize: "10px 10px"
                  }}>

            <div className='lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] w-[100%] h-[40%] flex justify-center items-center'>
                <div className='lg:w-[65%] lg:h-[80%] lg:w-[65%] lg:h-[80%] w-[70%] h-[60%] border border-stone-900 '>
                  {startWrite && <Hero/>}
                </div>
             </div>   

             <div className='w-[50%] h-[60%] md:w-[50%] md:h-[60%] w-[100%] h-[60%]   flex justify-center'>
            
                      <div className='w-[100%] h-[100%] transition-transform duration-1000'style={{
                      transform: `perspective(600px) rotateX(${startBadge ? "0deg" : "-90deg"})`,
                      transformOrigin: "top",
                          }}>
                      <Mainbadge/>                
                      </div>
                  </div>

        </div>

       
        
      </div>
      




 
  )
}

export default Uplift