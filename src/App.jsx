import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './section/Navbar'
import Pagescroll from './section/Pagescroll'
import Bottomsection from './section/Bottomsection'
import Story from './section/Story';
import Careers from './section/Careers';



const App = () => { 
 

 
  

  return (
        <div className='relative w-full auto flex justify-center  overflow-x-hidden' >  
        <Router>
         <Navbar/>  
         <Routes>
         <Route path="/" element={<div className="w-full h-[180rem]"><Pagescroll/></div>} />
         <Route path="/story" element={<div className="w-full h-[180rem]"><Story/></div>} />
            <Route path="/careers" element={<Careers/>} />
        </Routes>      
        
        </Router>
      
 
      </div>
  )
}
export default App


