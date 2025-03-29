import React from 'react'
import { useEffect, useState } from "react";
import Firstpage from './Firstpage'
import Dummy from './Dummy';
import Page2 from './injectpage/Page2';
import Page3 from './injectpage/Page3';
import Page4 from './injectpage/Page4';
const scrollData1 = 560
const scrollData2 = 1120
const scrollData3 = 1680

const Pagescroll = () => {
    const[topControl, setTopControl]= useState({
        top1:scrollData1,
        top2:scrollData2,
        top3:scrollData3
      })
    
    
      const[scrollValue, setScrollValue] = useState(0)

      useEffect(()=>{
   
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const changeTop = Math.max(scrollData1 - Math.floor(scrollY), 0);
          const changeTop1 = Math.max(scrollData2 - Math.floor(scrollY), 0);
          const changeTop2 = Math.max(scrollData3 - Math.floor(scrollY), 0);

    
        setTopControl((prev)=>{
          
      
          return{
            ...prev,
            top1:changeTop,
            top2:changeTop1,
            top3:changeTop2,
          }
        })
    
        }
    
          
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    
      },[])
    
    
    
      const handleChildData = (val) => {
       setScrollValue(val)
       //console.log("received prop",val, "scrollData",scrollValue);
       
      };
  return (
    <>
     <div className='fixed  w-full'>
          <Firstpage />        
       </div>
        <div className={`w-full fixed  transition-all duration-800 ${scrollValue <= scrollData1 ? "right-0 top-0" : "right-4 top-1"} `} style={{ transform: `translateY(${topControl.top1}px)` }}>         
          <Dummy getValue={scrollData1} sendDataToParent={handleChildData} pageData={<Page2/>}/>        
       </div>
        <div className={`w-full fixed  transition-all duration-800 ${scrollValue <= scrollData2 ? "right-0 top-0" : "right-8 top-2"}`} style={{ transform: `translateY(${topControl.top2}px)` }}>         
          <Dummy getValue={scrollData2} sendDataToParent={handleChildData} pageData={<Page3/>}/>        
       </div>

       <div className={`w-full fixed  transition-all duration-800 ${scrollValue <= scrollData3 ? "right-0 top-0" : "right-12 top-3"}`} style={{ transform: `translateY(${topControl.top3}px)` }}>         
          <Dummy getValue={scrollData3}  sendDataToParent={handleChildData} pageData={<Page4/>}/>        
       </div>
     
    </>
  )
}

export default Pagescroll