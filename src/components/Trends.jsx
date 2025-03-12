import React, { useEffect, useState } from 'react'
import girl1 from '../assets/girlnew1.jpg'; 
import girl2 from '../assets/girlnew2.png';

const Trends = () => {
    const [newPoint, setNewPoint] = useState({
        x1:null,y1:null,x2:null,y2:null,x3:null,y3:null,x4:null,y4:null,x5:null,y5:null,x6:null,y6:null,
        x7:null,y7:null,x8:null,y8:null,x9:null,y9:null,x10:null,y10:null,x11:null,y11:null
    })
    const [heightClass, setHeightClass] = useState({
        h1:"h-1",
        h2:"h-1",
        h3:"h-1",
        h4:"h-1",
        h5:"h-1"
    });

    useEffect(()=>{
    let increment=0
    const timer = setInterval(()=>{
            if(increment >= 0 ) setNewPoint((prev) => ({...prev,x1:150,y1:560,x2:250,y2:500,}))        
            if (increment >=1 ) setNewPoint((prev) => ({ ...prev, x3: 230, y3: 440 }));                   
            if (increment >= 2) setNewPoint((prev) => ({ ...prev, x4: 210, y4: 390 }));   
            if (increment >= 3) setNewPoint((prev) => ({ ...prev, x5: 290, y5: 320 }));
            if (increment >= 4) setNewPoint((prev) => ({ ...prev, x6: 370, y6: 280 }));
            if (increment >= 5) setNewPoint((prev) => ({ ...prev, x7: 350, y7: 230 }));
            if (increment >= 6) setNewPoint((prev) => ({ ...prev, x8: 430, y8: 190 }));
            if (increment >= 7) setNewPoint((prev) => ({ ...prev, x9: 410, y9: 140 }));
            if (increment >= 8) setNewPoint((prev) => ({ ...prev, x10: 570, y10: 40 }));     
        increment++       

    },150)
           return ()=>clearInterval(timer)
    },[])


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
        <div>
        <div className='relative flex flex-col w-68 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2'>
        <div>
        <label className='absolute text-stone-300 text-3xl top-3 left-4'>37.65k</label>       
        <div className='absolute top-4 left-34 text-blue-600'></div>
        </div>
        <div className='absolute left-40 top-0  w-32 h-32 flex justify-center items-center'>

        <svg viewBox="0 0 800 600" className="w-96 h-full">
 
        <polyline points="150,560 250,500 230,440 210,390 290,320 370,280 380,230 400,250 450,270 500,290 550,310 600,330"
            fill="none" 
            stroke="red"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg> 

</div>


        <div className='absolute left-44 top-0  w-32 h-32 flex justify-center items-center'>

            <svg viewBox="0 0 800 600" className="w-96 h-full">
                
                    <polyline
                    points={`${newPoint.x1},${newPoint.y1} ${newPoint.x2},${newPoint.y2}  ${newPoint.x3},${newPoint.y3}   ${newPoint.x4},${newPoint.y4} ${newPoint.x5},${newPoint.y5} ${newPoint.x6},${newPoint.y6} ${newPoint.x7},${newPoint.y7} ${newPoint.x8},${newPoint.y8} ${newPoint.x9},${newPoint.y9} ${newPoint.x10},${newPoint.y10}`}
                    fill="none" 
                    stroke="green"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg> 
 
        </div>

        <div>
         <label className='absolute text-stone-300 text-xs top-12 left-4'>JUNE 2024</label>   
        </div>
        <div>
         <label className='absolute text-stone-500 text-[10px] top-17 left-4'>Marketing campaign<br/>effectiveness.</label>   
        </div>
        
       
    </div>
        <div className='flex flex-row mt-2'>
            <div className='relative flex flex-col w-32 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2'>
                <div className='flex flex-row relative '>
                    
                        <div className="flex items-end h-10 ml-4 mt-2">
                            <span className={`w-3 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h1}`} ><span className="absolute top-14 left-3 text-[9px] text-stone-500 inline-block rotate-270">2020</span></span>
                        </div> 
                        
                        <div className="flex items-end h-10 ml-2 mt-2">
                            <span className={`w-3 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h2}`} ><span className="absolute top-14 left-8 text-[9px] text-stone-500 inline-block rotate-270">2021</span></span>
                        </div>   
                       
               
                        <div className="flex items-end h-10 ml-2 mt-2">
                            <span className={`w-3 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h3}`} ><span className="absolute top-14 left-13 text-[9px] text-stone-500 inline-block rotate-270">2022</span></span>
                        </div>  
                        <div className="flex items-end h-10 ml-2 mt-2">
                            <span className={`w-3 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h4}`} ><span className="absolute top-14 left-18 text-[9px] text-stone-500 inline-block rotate-270">2023</span></span>
                        </div> 
                        <div className="flex items-end h-10 ml-2 mt-2">
                            <span className={`w-3 bg-blue-500 transition-all duration-1000 ease-out ${heightClass.h5}`} ><span className="absolute top-14 left-23 text-[9px] text-stone-500 inline-block rotate-270">2024</span></span>
                        </div> 
                
                
                </div>
            </div>
            <div className='relative flex flex-col w-32 h-28 bg-stone-800 rounded-md shadow-lg shadow-black justify-center mt-2 ml-4'>
           
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