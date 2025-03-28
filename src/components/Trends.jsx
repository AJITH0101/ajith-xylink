import React, { useEffect, useState } from 'react'
import girl1 from '../assets/girlnew1.jpg'; 
import girl2 from '../assets/girlnew2.png';

const Trends = () => {
    const [newPoint, setNewPoint] = useState([
        { x: 0, y: 560 },
        { x: 50, y: 500 },
        { x: 230, y: 440 },
        { x: 210, y: 390 },
        { x: 290, y: 320 },
        { x: 370, y: 280 },
        { x: 350, y: 230 },
        { x: 430, y: 190 },
        { x: 410, y: 140 },
        { x: 570, y: 40 }
    ]);

    const [visiblePoints, setVisiblePoints] = useState([]);
    
    const [heightClass, setHeightClass] = useState({
        h1:"h-1",
        h2:"h-1",
        h3:"h-1",
        h4:"h-1",
        h5:"h-1"
    });

    useEffect(() => {
        let increment = 0;
        const timer = setInterval(() => {
            if (increment < newPoint.length) {
                setVisiblePoints((prev) => [...prev, newPoint[increment]]);
                increment++;
            } else {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        setTimeout(() => {
          //setHeightClass("h-12");
          setHeightClass((prev)=>{
            return{
                ...prev,
                h1:"h-8",
                h2:"h-10",
                h3:"h-12",
                h4:"h-10",
                h5:"h-13"
            }

          })
        }, 100); // Small delay for smoother effect
      }, []);

  return (
    <>
        <div className='w-[100%] h-full'>
        <div className='relative  flex flex-col w-[95%] h-[40%] bg-stone-800 ml-1 rounded-md shadow-lg shadow-black justify-center mt-2'>
                <div className='absolute w-[100%] top-0 left-0 flex flex-row mt-3 justify-between'>
                <label className='absolute w-[55%] top-0 left-0 text-stone-300 text-3xl ml-2'>37.65k</label>  
                <div className='absolute top-0 left-32 w-[45%] h-full'>

           

            <svg viewBox="0 0 800 600" >

            <polyline points="150,560 250,500 230,440 210,390 290,320 370,280 380,230 400,250 450,270 500,290 550,310 600,330"
                fill="none" 
                stroke="red"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg> 

        </div>   



    





        </div>

        <div className='absolute top-2 left-22 w-[75%] h-full flex justify-center items-center'>

            <svg viewBox="0 0 800 600" className="w-96 h-full">
            <polyline
            points={visiblePoints
            .filter(point => point && typeof point.x === "number" && typeof point.y === "number") 
            .map(({ x, y }) => `${x},${y}`)
            .join(" ")}
            fill="none"
            stroke="green"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
            </svg>


        </div>


 <label className='absolute text-stone-300 text-xs top-12 left-2'>JUNE 2024</label>  
 <label className='absolute text-stone-500 text-[10px] top-17 left-2'>Marketing campaign<br/>effectiveness.</label>   
        </div>
        {/*


        

        <div>
         
        </div>
        <div>
        
        </div> */}
        
       
    



    
        <div className='w-[100%] h-[50%] flex flex-row mt-2 ml-1'>
            <div className='relative flex flex-col w-[45%] h-auto bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2'>
                <div className=' flex flex-row w-[90%] h-auto justify-center'>
                    
                        <div className="relative flex items-end h-10 ml-0 mt-2">
                            <span className={`lg:w-3 md:w-2.5 w-2.5 ml-1 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h1}`} ></span>
                            <span className="absolute top-12 left-0 text-[9px] text-stone-500 inline-block rotate-270">2020</span>
                        </div> 
                        
                        <div className="relative flex items-end h-10 ml-2 mt-2">
                            <span className={`lg:w-3 md:w-2.5 w-2.5 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h2}`} ></span>
                            <span className="absolute top-12 left-0 text-[9px] text-stone-500 inline-block rotate-270">2021</span>
                        </div>   
                       
               
                        <div className="relative flex items-end h-10 ml-2 mt-2">
                            <span className={`lg:w-3 md:w-2.5 w-2.5 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h3}`} ></span>
                            <span className="absolute top-12 left-0 text-[9px] text-stone-500 inline-block rotate-270">2022</span>
                        </div>  
                        <div className="relative flex items-end h-10 ml-2 mt-2">
                            <span className={`lg:w-3 md:w-2.5 w-2.5 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h4}`} ></span>
                            <span className="absolute top-12 left-0 text-[9px] text-stone-500 inline-block rotate-270">2023</span>
                        </div> 
                        <div className="relative flex items-end h-10 ml-2 mt-2">
                            <span className={`lg:w-3 md:w-2.5 w-2.5 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h5}`} ></span>
                            <span className="absolute top-12 left-0 text-[9px] text-stone-500 inline-block rotate-270">2024</span>
                        </div> 
                
                
                </div>
            </div>
            <div className='relative flex flex-col w-[45%] h-auto bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2 ml-4'>
           
           <div className='relative'>
            <div className='flex flex-row'>
                <span className='w-9 h-9 rounded-full overflow-hidden ml-2'>
                    <img src={girl2} alt='girl1' className='w-full h-full' />                    
                </span>
                <label className='text-stone-400 text-[12px] mt-1 ml-2'>21.60k</label>
             </div> 
             <label className='absolute top-5 left-13 text-stone-300 text-[10px]'>Jessica Tez</label>
            </div>
            <div className='relative'>
             <div className='flex flex-row'>  
                <span className='w-9 h-9 rounded-full overflow-hidden mt-2 ml-2'>
                    <img src={girl1} alt='girl1' className='w-full h-full' />
                </span>
                <label className='text-stone-400 text-[12px] mt-3 ml-2'>16.05k</label>
            </div>
            <label className='absolute top-7 left-13 text-stone-300 text-[10px]'>Meliza Lee</label>
            </div>

               
            </div>

        </div>   
    </div>

    
    </>
  )
}

export default Trends