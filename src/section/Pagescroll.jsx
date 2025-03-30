import React from 'react'
import { useEffect, useState } from "react";
import Firstpage from './Firstpage'
import Dummy from './Dummy';
import Page2 from './injectpage/Page2';
import Page3 from './injectpage/Page3';
import Page4 from './injectpage/Page4';
import { useSelector } from 'react-redux';
import { menuIconAction } from '../redux/select';
import Bottomsection from './Bottomsection';
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
      const[sideBar,setSideBar] = useState(-90)
     const navBar = useSelector((state) => state.select);
     useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top on page load
    }, []);

    //  useEffect(() => {
    //  if (navBar.navBar) {
        
          
         
       
    //      console.log(navBar.navBar);
    //    } else {
    //      console.log(navBar.navBar);
    //    }
    // }, [navBar]); 

     

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
    <div className='relative w-full'>


    <div
  className="absolute top-20 right-0 fixed w-[85%] h-44 bg-black z-10  transition-transform duration-1200 block lg:hidden md:hidden opacity-90 "
  style={{
    transform: `perspective(1000px) rotateY(${navBar.navBar ? "0deg" : "90deg"})`,
    transformOrigin: "right",
    transition: "transform 0.8s ease-out",
    boxShadow: navBar.navBar ? "0px 0px 20px rgba(0,0,0,0.15)" : "none",
  }}
>



        
              
        <div className='text-stone-300 text-xl border-b border-stone-700 pb-1 ml-3 mt-1'>Products</div>
        <div className='text-stone-300 text-xl border-b border-stone-700 pb-1 ml-3 mt-1'>Our Story</div>
        <div className='text-stone-300 text-xl border-b border-stone-700 pb-1 ml-3 mt-1'>Career</div>
        <div className='w-24 h-12 border border-stone-300 rounded-lg text-stone-300 text-xl flex items-center justify-center mt-3 ml-3'>Login</div>

      </div>



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
     </div>
     <Bottomsection/>  
    </>
  )
}

export default Pagescroll