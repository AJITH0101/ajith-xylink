import React, { useEffect, useState } from 'react'
import { SlGraph } from "react-icons/sl";
import { LuHandHeart } from "react-icons/lu";
import { PiMoneyBold } from "react-icons/pi";
import { FaWineGlassEmpty } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
const graph = <SlGraph size={25} />
const wellBeing = <LuHandHeart size={17} />
const expense = <PiMoneyBold  size={15} />
const beverages = <FaWineGlassEmpty size={12}/>
const groceries = <MdOutlineLocalGroceryStore size={10}/>

//let formattedNum = new Intl.NumberFormat('en-US').format(expNum);


const Numbers = () => {

   

    const startNum1 = 2276; // Start from 2276
    const stopNum1 = 2312; // Stop at 2312
    const startNum2 = 789; 
    const stopNum2 = 837; 
    const startNum3 = 13597; 
    const stopNum3 = 13643; 
    const startNum4 = 2777; 
    const stopNum4 = 2813; 
  
    const [numState, setNumState] = useState({
        start1:startNum1,
        strNum1:"",
        start2:startNum2,
        strNum2:"",
        start3:startNum3,
        strNum3:"",
        start4:startNum4,
        strNum4:"",

    });

   
    
    useEffect(() => {

        let expTime1,expTime2,expTime3,expTime4
        
        if (numState.start1 <= stopNum1) {
        expTime1 = setTimeout(() => {
        setNumState((prev)=>{            
            return{
                ...prev,
                start1:prev.start1+1,
                strNum1:new Intl.NumberFormat('en-US').format(prev.start1+1)
            }
        })        
      }, 50);  
     
      } 

      if (numState.start2 <= stopNum2) {
        expTime2 = setTimeout(() => {
        setNumState((prev)=>{            
            return{
                ...prev,
                start2:prev.start2+1,
                strNum2:new Intl.NumberFormat('en-US').format(prev.start2+1)
            }
        })        
      }, 50);  
     
      } 

      if (numState.start3 <= stopNum3) {
        expTime3 = setTimeout(() => {
        setNumState((prev)=>{            
            return{
                ...prev,
                start3:prev.start3+1,
                strNum3:new Intl.NumberFormat('en-US').format(prev.start3+1)
            }
        })        
      }, 50);  


      if (numState.start4 <= stopNum4) {
        expTime4 = setTimeout(() => {
        setNumState((prev)=>{            
            return{
                ...prev,
                start4:prev.start4+1,
                strNum4:new Intl.NumberFormat('en-US').format(prev.start4+1)
            }
        })        
      }, 50); 
     
      } 
    }

      return () => {
        if (expTime1) clearTimeout(expTime1); // Cleanup only if a timeout was set
        if (expTime2) clearTimeout(expTime2); 
        if (expTime3) clearTimeout(expTime3); 
        //
    };
      
    }, [numState.start1,numState.start2,numState.start3]);

 
  return (
    <div className='w-[100%] h-full flex justify-center items-center flex-col'>
    <div className='flex flex-col w-[90%] h-[35%] bg-stone-800 rounded-md shadow-lg shadow-black flex justify-center mt-2'>
        <div className='lg:w-[90%] md:w-[80%] flex flex-row justify-between mt-2'>
            <div className='mb-[-4px]'>
        <label className='text-stone-300 text-2xl px-4'>${numState.strNum1}</label>
        <label className='text-xs text-stone-400'>+18%</label>
        </div>
        <div className=' text-blue-600'>{graph}</div>

        <div className='  w-6 h-6 bg-blue-500 rounded-full text-white flex justify-center items-center mx-1'>
        {expense}
        </div>
        </div>

        

        <div>
         <label className='text-stone-300 text-xs mx-4'>Travel Expenses</label>   
        </div>
        <div className='flex flex-col'>
         <label className='text-stone-500 text-[10px] mx-4  mb-[-3px] '>Staff International and Domestic</label> 
         <label className='text-stone-500 text-[10px] mx-4 '>travel for work or meeting.</label>  
        </div>
        
       
    </div>

    <div className='flex flex-row w-[90%] h-[75%]'>



        <div className='flex w-[45%] h-[70%] justify-center bg-stone-800 rounded-md shadow-lg shadow-black mt-3'>
         <div className='flex flex-col mt-3 ml-2'>  
            <div className=' w-6 h-6 bg-yellow-600 rounded-full text-white flex justify-center items-center'>
                {wellBeing}
            </div>
            <div className='mt-2'>
                <label className='text-stone-300 text-xl'>${numState.strNum2}</label>
                <label className='text-xs text-stone-400 ml-1'>+18%</label>
                
            </div>
            <label className='text-stone-300 text-xs'>Wellbeing</label>  
           <div className='   leading-[12px]'>
            
            <label className='text-stone-500 text-[10px]'>Events or everyday wellbeing expense.</label> 
            
            </div>

               
        </div> 

        </div>




    <div className='w-[50%] h-[100%]'>

    <div className='flex flex-col justify-center items-center w-full h-[32%] bg-stone-800 rounded-md shadow-lg shadow-black mt-3 ml-3'>

{/* Centering the number and percentage */}
<div className='w-[100%] flex flex-col justify-center items-center'>
    <div className='flex flex-row justify-center items-center text-center'>
        
        <label className='text-stone-300 lg:text-xl md:text-md text-lg mb-[-4px]'>${numState.strNum3}</label>
        <label className='text-xs text-stone-400 ml-1'>+18%</label> 
                   
    </div>
</div> 

{/* Centering the icon and label */}
<div className='flex flex-row justify-center items-center w-full mt-2'>

    <div className='w-5 h-5 bg-pink-600 rounded-full mb-2 text-white flex justify-center items-center'>
        {beverages}
    </div> 
    <label className='text-stone-300 ml-3 mb-2 lg:text-xs md:text-[11px] text-xs'>Beverages</label> 
</div>

</div>




<div className='flex flex-col justify-center items-center w-[100%] h-[32%] bg-stone-800 rounded-md shadow-lg shadow-black mt-3 ml-3'>

    {/* Centering this container */}
    <div className=' w-[50%] flex justify-center'>
        <div className='flex flex-row  items-center text-center flex-wrap'>
            <div className='flex flex-row '>
            <label className='text-stone-300 lg:text-xl md:text-xl text-md'>${numState.strNum4}</label>
            <label className='text-xs text-stone-400 mt-1'>+18%</label> 
            </div>               
        </div>
    </div> 

    {/* Centering this container */}
    <div className='flex flex-row  items-center w-full justify-center'>

        <div className='w-5 h-5 bg-green-600 rounded-full text-white flex justify-center items-center'>
            {groceries}
        </div> 
        <label className='text-stone-300 ml-2 lg:text-xs md:text-[11px] text-xs'>Groceries</label> 
    </div>


</div>
    </div>
    
    </div>
    </div>
  )
}

export default Numbers