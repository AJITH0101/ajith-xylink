import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import './App.css'
import Mainbadge from './components/Mainbadge'
import Hero from './section/Hero'
import Uplift from './section/Uplift'



const App = () => {
  const [scrollValue, setScrollValue] = useState(100)
  const [degreeValue, setDegreeValue] = useState(0)

  useEffect(()=>{

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = Math.max(40, Math.floor(100 - ((scrollY / 360) * (100 - 40))));
      const degree = Math.max(-45, Math.floor(0 - ((scrollY / 360) * 45)));
      console.log("scroll y position", scale);
      setScrollValue(scale);
      setDegreeValue(degree)
      
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  },[])



  
  return (
      <>  
<div
        className="min-h-[150vh] mt-24" // ✅ Only keeping the height
        style={{
          transform: `scale(${scrollValue / 100}) perspective(1000px) rotateY(${degreeValue}deg)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <Uplift />
      </div>
    </>
  )
}
export default App


