import React from 'react'
import { useEffect } from 'react';
import office1 from '../assets/office1.jpg'
import office2 from '../assets/office3.jpg'

const Careers = () => {
   useEffect(() => {
          window.scrollTo(0, 0); // Scrolls to the top on page load
        }, []);
  return (
    <div className='w-full'>
      <div className='w-full h-auto flex justify-center text-center text-white items-center font-bold lg:text-5xl md:text-4xl text-xl lg:mt-24 md:mt-24 mt-14'>
      Careers at Xylink | Flexible Work
    </div>
    <div className='w-full flex flex-row justify-center mt-3'>
    <img src={office1} alt='office1' className='w-[38%] h-auto m-4'/>
    <img src={office2} alt='office2' className='w-[38%] h-auto m-4'/>
    </div>

    <div className='w-full h-auto flex lg:flex-row md:flex-row flex-col justify-center'>
  {/* Column 1 */}
  <div className='lg:w-[40%] md:w-[40%] w-full  h-auto flex flex-col px-2 justify-center text-center'>
    <label className='text-white text-2xl font-semibold   flex justify-center'>Meet Xylink</label>
    <div className='text-stone-700 text-justify flex justify-center'>
      Chronicle is a new presentation format that enables
      people to create impactful stories, effortlessly.
      With remote work, shortening attention spans,
      and the advent of generative AI, the world has
      changed. Chronicle is designing the presentation
      experience that the future deserves.
    </div>
  </div>

  {/* Column 2 */}
  <div className='lg:w-[40%] md:w-[40%] w-full  h-auto flex flex-col px-2 justify-center text-center'>
    
    <label className='text-white text-2xl font-semibold  flex justify-center'>Our product</label>
    
    <div className='text-stone-700 text-justify  flex justify-center'>
    We're not creating a better way to do slides 
    or documents - we're creating a powerful 
    new medium that fundamentally reimagines 
    the role of a creator and consumer of a 
    presentation at work, empowering users 
    to deliver beautiful and engaging output 
    with less effort. 
    </div>
  
  </div>

</div>
<div className='w-full flex lg:flex-row md:flex-row flex-col  justify-center'>
  <div className='lg:w-1/5 md:w-1/5 w-full h-auto border border-stone-800 rounded-lg m-2 flex justify-center items-center'>
  <div className='w-[90%] text-white text-lg '>
  Compensation - We offer competitive salaries 
  and attractive stock options are offered 
  to all employees.We review compensation 
  regularly to ensure it remains fair, 
  ewards performance, and remains 
  generous relative to the market.
  </div>
  </div>
  <div className='lg:w-1/5 md:w-1/5 w-full  h-auto border border-stone-800 rounded-lg m-2 flex justify-center items-center'>
  <div className='w-[90%] text-white text-lg '>
  Flexibility - You can work from anywhere 
  and we will support you with the best 
  equipment, home office expenses, and
   remote working allowances. Our work 
   hours are flexible, so long as you’re 
   available to collaborate with the team 
   during core hours.
  </div>
  </div>
  <div className='lg:w-1/5 md:w-1/5 w-full  h-auto border border-stone-800 rounded-lg m-2 flex justify-center items-center'>
  <div className='w-[90%] text-white text-lg '>
  Growth - We operate a performance-oriented culture, 
  with regular opportunities for growth and potential 
  promotion. We empower employees to self-direct their 
  professional development and access learning and 
  development opportunities.
  </div>
  </div>
  <div className='lg:w-1/5 md:w-1/5 w-full  h-auto border border-stone-800 rounded-lg m-2 flex justify-center items-center'>
  <div className='w-[90%] text-white text-lg '>
  Benefits - We have a generous annual leave 
  policy and offer budget that can be used 
  on health and wellbeing or learning and 
  development. Periodically, we come together 
  as a team to celebrate wins, socialise, 
  and relax in fun locations.
  </div>
  </div>

</div>


{/* <div className='w-full h-auto flex justify-center'>
  <div className='w-[90%]flex flex-col'>

   <div className='w-full text-stone-600 text-3xl mt-4 '>Life at Xylink</div>
 
  <div className='lg:w-1/2 md:w-1/2 w-full h-12 bg-stone-500'>  
  </div>

   

  </div>

</div> */}


    </div>
  )
}

export default Careers