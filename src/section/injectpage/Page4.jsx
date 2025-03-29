import React from 'react'
import callcenter1 from '../../assets/callcenter1.jpg'
import callcenter2 from '../../assets/callcenter2.jpg'
import client from '../../assets/client.jpg'

const Page4 = () => {
  return (
   <>
       <div className='w-full h-auto flex lg:flex-row md:flex-row   flex-col justify-center items-center'>
   
           
           <div className='lg:w-1/2 md:w-1/2 w-full h-auto justify-center items-center align-center lg:text-left md:text-left text-center'>
           <div className='flex flex-col lg:ml-8 md:ml-8'>
                               <label className='text-pink-500 lg:text-3xl md:text-2xl text-3xl mt-8'>
                               Templates
                               </label>
   
                               <label className='lg:w-[90%] md:w-[90%] w-[100%] text-white lg:text-7xl md:text-7xl text-3xl font-bold mt-8'>
                               Presents anywhere, anytime.
                               </label>
   
   
           </div>
           <div className='w-full flex justify-center'>
           <div className='w-[80%] h-44  rounded-lg mt-4'>
               <label className='text-yellow-500 text-lg ml-0'>Our worldwide Support available </label>
               <div className='flex flex-row w-full mt-2 flex lg:justify-start md:justify-start justify-center'>
               <img src={callcenter1} alt='call1' className='w-1/3 h-auto rounded-full' />
               <img src={callcenter2} alt='call2' className='w-1/3 h-auto rounded-full ml-2' /> 
               </div>
               
           </div>
               
   
   
   </div>
                  
   
                   
           </div>
            <div className='lg:w-1/2 md:w-1/2 w-full flex justify-center items-center flex-col text-center'>
            <div className='w-[100%] h-full rounded-xl'>
                    <img src={client} alt='building' className='lg:w-[80%] md:w-[80%] w-full rounded-xl' /> 
                    {/* <div className='lg:w-[80%] md:w-[80%] mt-10 font-semibold pt-1 lg:text-lg md:text-lg text-sm w-full lg:h-10 md:h-10 h-8 text-stone-500 rounded-xl bg-stone-900'>Road map Planning v2.0</div> */}
                </div>
                </div>
            </div>
               
       </>
  )
}

export default Page4