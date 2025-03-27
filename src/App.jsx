import React from 'react'
import './App.css'
import Navbar from './section/Navbar'
import Pagescroll from './section/Pagescroll'


const App = () => { 
  

  return (
        <div className='relative w-full h-[200rem] flex justify-center' >  
        <Navbar/>  
        <Pagescroll/>   
      </div>
  )
}
export default App


