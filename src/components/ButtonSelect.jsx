import React from 'react'

const ButtonSelect = ({icon,arrow,children,onClick}) => {

 

  return (
    <>
    <div className='relative cursor-default flex flex-row w-40 h-8 bg-stone-950 rounded-lg mt-1 hover:text-white text-stone-500 flex  items-center text-[10px] transition-all duration-400' onClick={onClick}>
        <div className='ml-4 w-6 h-6 shadow-md shadow-black border border-stone-700 bg-stone-800 rounded-md  flex items-center justify-center'>{icon}
        </div>
          <div className='ml-2'>{children}
        </div>
        <div className='absolute ml-14 text-stone-500 left-20'>{arrow}
        </div>
    </div> 
    </>
  )
}

export default ButtonSelect