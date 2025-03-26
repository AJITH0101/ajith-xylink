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
     // console.log("new change top",changeTop, "scrollY:",scrollY);

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
    <div className='absolute   w-full fixed  transition-all duration-800 ' style={{ transform: `translateY(${topPixel}px)` }}>         
          <Dummy />        
       </div>
       {/* <div className='absolute   w-full fixed  transition-all duration-800 ' style={{ transform: `translateY(${topPixelOne}px)` }}>         
          <Dummy />        
       </div> */}
       

      
       {/* <div className='absolute top-0 justify-center flex w-full min-h-[150vh]'>
        <Secondpage/> 
       </div> */}

      </div>
  )
}
export default App


