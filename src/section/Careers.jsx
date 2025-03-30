import React from 'react'
import { useEffect } from 'react';

const Careers = () => {
   useEffect(() => {
          window.scrollTo(0, 0); // Scrolls to the top on page load
        }, []);
  return (
    <div className='text-white'>Careers</div>
  )
}

export default Careers