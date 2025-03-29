import React from 'react'
import build1 from '../../assets/build1.jpg'
import build2 from '../../assets/build2.jpeg'
import build3 from '../../assets/build3.jpg'

const Page3 = () => {
  return (
    <>
    <div className='w-full h-auto flex lg:flex-row md:flex-row   flex-col justify-center items-center'>

        
        <div className='lg:w-1/2 md:w-1/2 w-full h-auto justify-center items-center align-center lg:text-left md:text-left text-center'>
        <div className='flex flex-col lg:ml-8 md:ml-8'>
                            <label className='text-blue-500 lg:text-3xl md:text-2xl text-3xl mt-8'>
                            Intoducing Blocks
                            </label>

                            <label className='lg:w-[90%] md:w-[90%] w-[100%] text-white lg:text-7xl md:text-7xl text-3xl font-bold mt-8'>
                            A new, easy way to create
                            </label>


        </div>
        <div className='w-full flex justify-center'>
        <div className='w-[80%] h-44  rounded-lg mt-4'>
            <label className='text-yellow-500 text-xl ml-4'>Inspiration Board</label>
            <div className='flex flex-row w-full'>
            <img src={build1} alt='build1' className='w-1/2 h-auto rounded-lg' />
            <img src={build2} alt='build1' className='w-1/2 h-auto rounded-lg' />
            </div>
            
        </div>
            


</div>
               

                
        </div>
        <div className='w-1/2 flex justify-center items-center flex-col text-center'>
                <img src={build3} alt='building' className='lg:w-[80%] md:w-[80%] w-full rounded-xl' />
                <div className='lg:w-[80%] md:w-[80%] mt-10 font-semibold pt-1 lg:text-lg md:text-lg text-sm w-full lg:h-10 md:h-10 h-8 text-stone-500 rounded-xl bg-stone-900'>Road map Planning v2.0</div>
            </div>

    </div>
            
    </>
  )
}

export default Page3