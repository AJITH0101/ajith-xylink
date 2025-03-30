import React from 'react'

const Template = () => {
  return (
    <>
    <div className='lg:w-[100%] lg:h-auto md:w-[100%] md:h-auto w-[80%] h-auto bg-stone-900 rounded-xl border border-stone-700 p-4 shadow-lg lg:mx-12 md:mx-12  lg:mt-8 md:mt-8 mt-4'>
    <div className='text-stone-300 text-2xl font-semibold mt-6'>Traffic Source</div>
    <div className='flex mt-2 space-x-1 mt-6'>
      <div className='w-24 h-0.5 bg-pink-800 rounded-lg'></div>
      <div className='w-15 h-0.5 bg-yellow-500 rounded-lg'></div>
      <div className='w-8 h-0.5 bg-blue-500 rounded-lg'></div>
      <div className='w-4 h-0.5 bg-orange-500 rounded-lg'></div>
    </div>
    <div className='flex items-center space-x-6 mt-3'>
      <div className='w-2 h-2 rounded-full bg-pink-800'></div>
      <div className='text-stone-300 text-[13px]'>Instagram</div>
      <div className='text-stone-500 text-[13px]'>12,480</div>
    </div>
    <div className="w-full h-px bg-stone-600 mt-1"></div>

    <div className='flex items-center space-x-6 mt-3'>
      <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
      <div className='text-stone-300 text-[13px]'>facebook</div>
      <div className='text-stone-500 text-[13px] ml-3'>6,532</div>

    </div>
    <div className="w-full h-px bg-stone-600 mt-1"></div>

    <div className='flex items-center space-x-6 mt-3'>
      <div className='w-2 h-2 rounded-full bg-blue-500'></div>
      <div className='text-stone-300 text-[13px]'>Organic</div>
      <div className='text-stone-500 text-[13px] ml-5'>3,269</div>
    </div>
    <div className="w-full h-px bg-stone-600 mt-1"></div>

    <div className='flex items-center space-x-6 mt-3'>
      <div className='w-2 h-2 rounded-full bg-orange-500'></div>
      <div className='text-stone-300 text-[13px]'>Tiktok</div>
      <div className='text-stone-500 text-[13px] ml-7'>1,259</div>
    </div>
  </div>
  </>
  )
}

export default Template