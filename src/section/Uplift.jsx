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
  

<div>
<div style={{ fontFamily: "Poppins, sans-serif" }} className='w-full'>
      <div className='lg:w-[70rem] h-[35rem] border border-stone-800 rounded-lg flex justify-center items-center  transition-transform duration-1000' style={{
        transform: `perspective(600px) rotateX(${lift ? "0deg" : "90deg"})`,
        transformOrigin: "bottom",
      }}>

            <div className='lg:w-[65rem] h-[30rem] border border-stone-800 rounded-lg flex justify-end bg-stone-950 '
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='%23111111'/%3E%3C/svg%3E")`,
            backgroundSize: "10px 10px"
          }}>
          <div className='w-[23.5rem] h-56 mt-28 ml-4 mr-14 border border-stone-900'>
            {startWrite && <Hero/>}
          </div>

            <div className='w-1/2 '>
      
                <div className='mt-20 mr-12 transition-transform duration-1000'style={{
                transform: `perspective(600px) rotateX(${startBadge ? "0deg" : "-90deg"})`,
                transformOrigin: "top",
                    }}>
                <Mainbadge/>                
                </div>
            </div>

        </div>

       
        
      </div>
      
    </div> 
    </div>


 
  )
}

export default Uplift