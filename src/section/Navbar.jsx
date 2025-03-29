import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoLogoXing } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
const logo = <IoLogoXing color='white' size={30} />
const menubar = <CgMenuGridO color='white' size={30}/>

const Navbar = () => {
  const navigate = useNavigate();
  return (
   <>
     <div className='fixed w-full text-white z-10'style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className='flex flex-row justify-between'>
        <div>
          <div className='flex flex-row'>
          <div className='m-4'>{logo}</div>
          </div>
      </div>
      <div className='flex flex-row '>
                <div className='hidden lg:flex flex-row m-2'>
                <div onClick={() => navigate("/")} className="cursor-pointer mx-3">Products</div>
                <div onClick={() => navigate("/story")} className="cursor-pointer mx-3">Our Story</div>
                <div onClick={() => navigate("/careers")} className="cursor-pointer mx-3">Careers</div>   
                  <div><button className='mr-28 border border-stone-500 rounded-lg w-22 h-9 ml-8'>Login</button></div>      
                </div>
              <div className='block lg:hidden md:hidden m-4'>{menubar}</div>
             
              
      </div>
      </div>
      

   
       </div>
   </>
  )
}

export default Navbar