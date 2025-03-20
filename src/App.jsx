import React from 'react'
import { useEffect, useState } from "react";
import './App.css'
import Firstpage from './section/Firstpage'
import Navbar from './section/Navbar'
import Secondpage from './section/Secondpage'
import Trialpage from './section/Trialpage';


const App = () => {  

 
  

  return (
        <div className='relative w-full h-[100rem]' >  
        <Navbar/>     
        <div className='absolute fixed top-10 w-full'>
         <Firstpage />        
       </div>
       <div className='absolute fixed  w-full top-10'> 
        
       <Trialpage/>
        
       </div>
       {/* <div className='absolute top-0 justify-center flex w-full min-h-[150vh]'>
        <Secondpage/> 
       </div> */}

      </div>
  )
}
export default App


