import React from 'react'
import { useEffect, useState } from "react";
import './App.css'
import Firstpage from './section/Firstpage'
import Navbar from './section/Navbar'
import Secondpage from './section/Secondpage'
import Trialpage from './section/Trialpage';
import Thirdpage from './section/Thirdpage';
import Dummy from './section/Dummy';


const App = () => {  
  const[topPixel,setTopPixel] = useState(560)
  const[topPixelOne,setTopPixelOne] = useState(1120)

  useEffect(()=>{
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const changeTop = Math.max(560 - Math.floor(scrollY), 0);
      const changeTop1 = Math.max(1120 - Math.floor(scrollY), 0);
    console.log("change to 1",changeTop, "change top 2",changeTop1);

      //setTimeout(()=>{
 setTopPixel(changeTop)
 setTopPixelOne(changeTop1)
     // },200)
      
   
     
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  },[])

 
  

  return (
        <div className='relative w-full h-[200rem]' >  
        <Navbar/>     
        <div className='absolute fixed  w-full'>
          <Firstpage />        
       </div>
    <div className={`absolute   w-full fixed  transition-all duration-800 ${topPixel === 0 ? "right-4 top-1":""}`} style={{ transform: `translateY(${topPixel}px)` }}>         
          <Dummy getValue={560}/>        
       </div>
        <div className={`absolute   w-full fixed  transition-all duration-800 ${topPixelOne === 0 ? "right-8 top-2":""}`} style={{ transform: `translateY(${topPixelOne}px)` }}>         
          <Dummy getValue={1120}/>        
       </div>
       

      
       {/* <div className='absolute top-0 justify-center flex w-full min-h-[150vh]'>
        <Secondpage/> 
       </div> */}

      </div>
  )
}
export default App


