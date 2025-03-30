import React from 'react'
import graph from '../../assets/newgraph.jpg'
import Template from '../../elements/Template'
import Social from '../../elements/Social'


const Page2 = () => {
  return (
<>
  <div className='w-full h-auto flex justify-center items-center flex-col text-center'>
    
    <label className='text-white lg:text-5xl md:text-3xl text-3xl mt-8'>
      Featured and seen in
    </label>
    <div className='mt-4 flex lg:flex-row md:flex-row flex-col'>
        <button className='w-48 h-10 text-white border border-stone-500 rounded-lg mx-4 my-1'>Forbes</button>
        <button className='w-48 h-10 text-white border border-stone-500 rounded-lg mx-4 my-1'>Ayota</button>
        <button className='w-48 h-10 text-white border border-stone-500 rounded-lg mx-4 my-1'>Tech Guru</button>
        <button className='w-48 h-10 text-white border border-stone-500 rounded-lg mx-4 my-1'>Adventure</button>

    </div>
    <div className='flex flex-row w-full'>
      <div className='lg:mx-12 md:mx-12  w-[60%]'><Template/></div>
   <div className='lg:mx-24 md:mx-12 w-[40%]'> <Social/></div> 
    </div>
    
  </div>
</>

  )
}

export default Page2