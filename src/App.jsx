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

 
  

  return (
        <div className='relative w-full h-[200rem]' >  
        <Navbar/>     
        <div className='absolute fixed top-10 w-full'>
         <Firstpage />        
       </div>
       <div className='absolute fixed  w-full top-10'>         
          <Dummy/>        
       </div>

       

      
       {/* <div className='absolute top-0 justify-center flex w-full min-h-[150vh]'>
        <Secondpage/> 
       </div> */}

      </div>
  )
}
export default App


