import React from 'react'
import { useEffect } from 'react';

const Story = () => {
     useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top on page load
      }, []);
  return (
    <div className='text-white'>Story</div>
  )
}

export default Story