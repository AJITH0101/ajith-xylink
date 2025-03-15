import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import './App.css'
import Mainbadge from './components/Mainbadge'
import Hero from './section/Hero'
import Uplift from './section/Uplift'



const App = () => {



  
  return (
      <>  
      <div className="scale-40"  style={{
    transform: "perspective(1000px) rotateY(-100deg)",
  }}><Uplift/></div>



   

    </>
  )
}
export default App


