import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
const logo = <IoLogoXing color='white' size={30} />
const instaIcon = <FaInstagram color='gray' size={40}/>
const whatsApp = <FaWhatsapp color='gray' size={40}/>
const fbIcon = <FaFacebookSquare color='gray' size={38}/>

const Bottomsection = () => {
  return (
  <>
       <div className='absolute bottom-0 w-full lg:h-48 md:h-48 h-58 bg-stone-900'>
          <div className='flex lg:flex-row md:flex-row flex-col'>
          <div className='lg:w-1/3 md:1/3 w-full flex lg:justify-start md:justify-start justify-center lg:ml-4 md:ml-3 mt-2'>
          <div className='flex flex-row'>
          <div>{logo}</div>
          <label className=' text-lg ml-2 text-blue-300'>Xylink</label>
          </div>
          
          </div>
          <div className='lg:w-1/3 md:1/3 w-full ml-2'>
          <div className='text-stone-300 lg:text-xl md:text-xl text-lg mt-4'>Connect us on social media</div>
          <div className='flex flex-row mt-2'>
          <div>{instaIcon}</div>
          <div className='text-stone-500 ml-2 mt-2'>Instagram</div>
          </div>

          <div className='flex flex-row mt-2'>
          <div>{fbIcon}</div>
          <div className='text-stone-500 ml-2 mt-2'>Facebook</div>
          </div>

          <div className='flex flex-row mt-2'>
          <div>{whatsApp}</div>
          <div className='text-stone-500 ml-2 mt-2'>Whatsapp</div>
          </div>
          
          
          </div>
          <div className='lg:w-1/3 md:1/3 w-full'>
          
          
          </div>


</div>
          

  
          </div> 
  </>
  )
}

export default Bottomsection