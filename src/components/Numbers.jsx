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
    <div>
    <div className='relative flex flex-col w-68 h-28 bg-stone-800 rounded-md shadow-lg shadow-black flex justify-center mt-2'>
        <div>
        <label className='absolute text-stone-300 text-2xl top-3 left-4'>${numState.strNum1}</label>
        <label className='absolute text-xs text-stone-400 ml-1 top-4 left-21'>+18%</label>
        <div className='absolute top-4 left-34 text-blue-600'>{graph}</div>
        </div>

        <div className='absolute left-52 top-4  w-6 h-6 bg-blue-500 rounded-full text-white flex justify-center items-center'>
        {expense}
        </div>

        <div>
         <label className='absolute text-stone-300 text-xs top-12 left-4'>Travel Expenses</label>   
        </div>
        <div>
         <label className='absolute text-stone-500 text-[10px] top-17 left-4'>Staff International and Domestic<br/>travel for work or meeting.</label>   
        </div>
        
       
    </div>

    <div className='relative flex flex-row'>



        <div className='flex items-center w-32 h-38 bg-stone-800 rounded-md shadow-lg shadow-black mt-3'>
            <div className='absolute left-3 top-5  w-6 h-6 bg-yellow-600 rounded-full text-white flex justify-center items-center'>
                {wellBeing}
            </div>
            <div>
                <label className='absolute text-stone-300 text-xl top-12 left-4'>${numState.strNum2}</label>
                <label className='absolute text-xs text-stone-400 ml-1 top-13 left-16'>+18%</label>
            </div>
            <div>
            <label className='absolute text-stone-300 text-xs top-20 left-4'>Wellbeing</label>  
            </div>

            <div>
         <label className='absolute text-stone-500 text-[10px] top-24 left-4'>Events or everyday<br/>wellbeing expense.</label>   
        </div>
        </div>




    <div>

    <div className='relative flex items-center w-32 h-17 bg-stone-800 rounded-md shadow-lg shadow-black mt-3 ml-3'>
            <div>
                <label className='absolute text-stone-300 text-xl top-2 left-2'>${numState.strNum3}</label>
                <label className='absolute text-xs text-stone-400 ml-1 top-3 left-19'>+18%</label>                
            </div> 

            <div className='absolute left-3 top-10  w-5 h-5 bg-pink-600 rounded-full text-white flex justify-center items-center'>
                {beverages}
            </div> 
            <label className='absolute text-stone-300 text-[11px] top-10 left-9'>Beverages</label> 
    </div>

    <div className='flex items-center w-32 h-17 bg-stone-800 rounded-md shadow-lg shadow-black mt-3 ml-3'>

            <div>
                <label className='absolute text-stone-300 text-xl top-24 left-37'>${numState.strNum4}</label>
                <label className='absolute text-xs text-stone-400 ml-1 top-25 left-51'>+18%</label>                
            </div> 

            <div className='absolute left-38 top-32  w-5 h-5 bg-green-600 rounded-full text-white flex justify-center items-center'>
                {groceries}
            </div> 
            <label className='absolute text-stone-300 text-[11px] top-32 left-44'>Groceries</label> 


              

    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Numbers