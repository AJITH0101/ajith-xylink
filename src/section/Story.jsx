import React, { useState } from 'react'
import { useEffect } from 'react';
import ceo from '../assets/together.jpeg'

const Story = () => {
 const[scaleMovement, setScaleMovement] = useState(false)
 const [height, setHeight] = useState(0);
 const [height1, setHeight1] = useState(0);
     useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top on page load
        setScaleMovement(true)
      }, [scaleMovement]);



      useEffect(() => {
       
        
        const handleScroll = () => {
          const scrollHeight = window.scrollY;
          setHeight(Math.min(scrollHeight, 100)); // Limit max height to 300px
          if (scrollHeight >= 650) {
            setHeight1(Math.min(scrollHeight, 150)); // Limit max height to 200px
            console.log("exceeded");
            
          }
          else{
            setHeight1(0)

          }
         
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [height, height1]);


  return (
    <>
    <div className='flex flex-col w-full h-auto'>
    <div className="relative w-full h-screen flex items-center justify-center">
    {/* Background Image */}
    <img src={ceo} alt="CEO" className="absolute w-full h-full object-cover" />

       <div className="absolute text-white text-center px-4">
       <div className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 ${scaleMovement ? "scale-100" : "scale-90"}`}>
        A decade-long affair <br /> with presentation.
        </div>;
      </div>
    
  </div>
      <div className="w-full h-72 flex flex-col items-center">
      <div className="text-white font-bold mt-3 lg:text-3xl md:text-3xl text-lg text-center">
        Allen & Tony's story of creating Xylink Ads
      </div>
          <div
            className="w-[1px] bg-gradient-to-b from-transparent to-stone-500 transition-all duration-600"
            style={{ height: `${height}px` }}
          />

        <div className='w-28 h-10 rounded-full border border-stone-600 text-stone-500 font-semibold flex justify-center items-center'>2012</div>
    </div>


    <div className='w-full h-80 flex flex-col items-center'>
    <div className='px-2 lg:w-1/2 md:w-1/2 w-full text-white flex justify-center text-center lg:text-3xl md:text-3xl text-xl mx-auto text-justify'>The story starts at with both Alex and Tony working at Info Park Bengaluru.</div>
    <div className='px-2 lg:w-1/2 md:w-1/2 w-full text-white flex justify-center text-center lg:text-3xl md:text-3xl text-xl mx-auto text-justify'><br/>While collaborating on various projects, we discovered a shared passion for creativity and innovation.</div>
    <div
            className="w-[1px] bg-gradient-to-b from-transparent to-stone-500 transition-all duration-800"
            style={{ height: `${height1}px` }}
          />
   </div>

   <div className='w-full  flex flex-col items-center'>
    <div className='px-2 lg:w-1/2 md:w-1/2 w-full text-white flex  text-justify justify-center text-center lg:text-3xl md:text-3xl text-xl mx-auto'><br/>Spending time together, we often exchanged groundbreaking ideas, brainstorming ways to make a real impact in the digital world. 
    One such idea led us to explore the world of advertising.
    We envisioned creating our own ad company—one that would redefine 
    marketing strategies with fresh, out-of-the-box concepts.<br/><br/>
    To test our vision, we conducted several trial campaigns, 
    experimenting with different approaches to branding and 
    audience engagement. With every challenge, we learned, 
    adapted, and refined our strategies. What started as casual 
    discussions soon transformed into a concrete plan—one that 
    would mark the beginning of our entrepreneurial journey.
 
    </div>

    
    
   </div>
   <div className='w-full flex lg:flex-row md:flex-row  flex-col justify-center'>
    <div className='lg:w-[40%] md:w-[40%] w-[90%] h-80 rounded-xl border border-stone-500 bg-stone-950 flex text-center  justify-center items-center
    text-stone-600 lg:text-2xl md:text-2xl text-xl font-bold m-4'>
      <div className='w-[70%] h-40  flex text-center items-center'>
        The tools and formats were tedious due to so many choices. 
      </div>
   

    </div>

    <div className='lg:w-[40%] md:w-[40%] w-[90%]  h-80 rounded-xl border border-stone-500 bg-stone-950 flex text-center  justify-center items-center
    text-stone-600 lg:text-2xl md:text-2xl text-xl font-bold m-4'>
      <div className='w-[70%] h-40  flex text-center items-center'>
      Not only was it hard but it is way too easy to make crappy ones. 
      </div>
   

    </div>

   </div>
   <div className='w-full h-auto flex justify-center text-center text-white items-center font-bold lg:text-5xl md:text-4xl text-xl lg:mt-44 md:mt-40 mt-30'>
      Pleople just wanted 
    </div>
    <div className="w-full h-auto flex justify-center text-center items-center font-bold lg:text-9xl md:text-8xl text-2xl
  bg-gradient-to-b from-blue-500 to-blue-900 text-transparent bg-clip-text">
  <span className="bg-gradient-to-b from-blue-200 to-blue-900 text-transparent bg-clip-text">
    Convenience
  </span>
</div>




   


  
  </div>
  </>
  )
}

export default Story