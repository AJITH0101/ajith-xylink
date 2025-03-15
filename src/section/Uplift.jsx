import React from 'react'
import { useEffect, useState } from "react";

const Uplift = () => {

    const [lift, setLift] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLift(true);
      }, 100);
  
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div
      className={`w-96 h-48 bg-stone-600 rounded-lg shadow-lg transition-transform duration-1000`}
      style={{
        transform: `perspective(600px) rotateX(${lift ? "0deg" : "90deg"})`,
        transformOrigin: "bottom",
      }}
    ></div>
  </div>
  )
}

export default Uplift