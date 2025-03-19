import React from 'react'
import { useEffect, useState } from "react";
import './App.css'
import Firstpage from './section/Firstpage'
import Navbar from './section/Navbar'
import Secondpage from './section/Secondpage'


const App = () => {  

 
  

  return (
        <div className='relative w-full'>  
        <Navbar/>     
        <div>
         <Firstpage />        
       </div>
       {/* <div className='absolute top-0 justify-center flex w-full min-h-[150vh]'>
        <Secondpage/> 
       </div> */}

      </div>
  )
}
export default App


