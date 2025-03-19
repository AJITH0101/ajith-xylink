import React from 'react'

const Navbar = () => {
  return (
   <>
     <div className='fixed w-full top-4 left-0 text-white'style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className='flex justify-between  items-center'>
          <div className='flex flex-row'>
          <div className='ml-6 underline underline-offset-7'>Product</div>
          <div className='ml-6'>Our Story</div>
          <div className='ml-6'>Careers</div>          
        </div>
        <div><button className='mr-28 border border-stone-500 rounded-lg w-22 h-9'>Login</button></div>

      

       </div>
       </div>
   </>
  )
}

export default Navbar