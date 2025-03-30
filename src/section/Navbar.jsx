import React, {useEffect, useState, useRef  } from 'react'
import { useNavigate } from "react-router-dom";
import { IoLogoXing } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { menuIconAction } from '../redux/select';
const logo = <IoLogoXing color='white' size={30} />
const menubar = <CgMenuGridO  size={30}/>

const Navbar = () => {
  const[trigger,setTrigger] = useState(false)
  const[underLine, setUnderLine] = useState("/")

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const menuTriggered=()=>{
    setTrigger((prev)=>!prev)
    dispatch(menuIconAction(!trigger));

  }
  const navbarRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        dispatch(menuIconAction(false)); // Close navbar
        setTrigger(false)
      }
    };

    const handleScroll = () => {
      dispatch(menuIconAction(false)); // Close on scroll
      setTrigger(false)
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch,trigger]);

  const handleNavigation=(path)=>{
    navigate(path)
    setUnderLine(path)
    setTrigger(false)
  }

  return (
   <>
     <div  ref={navbarRef} className='fixed w-full text-white z-10'style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className='flex flex-row justify-between'>
        <div>
          <div className='flex flex-row'>
          <div className='m-4'>{logo}</div>
          </div>
      </div>
      <div className='flex flex-row '>
                <div className='hidden md:flex flex-row m-2'>
                {/* <div onClick={() => navigate("/")} className="cursor-pointer mx-3">Products</div> */}
               
                <div onClick={() => handleNavigation("/")} className={`cursor-pointer mx-3 ${underLine==="/" ?  " text-blue-300" : "text-white"}`}>Products</div>
                <div onClick={() => handleNavigation("/story")} className={`cursor-pointer mx-3  ${underLine==="/story" ?   " text-blue-300" : "text-white"}`}>Our Story</div>
                <div onClick={() => handleNavigation("/careers")} className={`cursor-pointer mx-3 ${underLine==="/careers" ?   " text-blue-300" : "text-white"}`}>Careers</div>

               
                  <div><button className='mr-28 border border-stone-500 rounded-lg w-22 h-9 ml-8'>Login</button></div>      
                </div>
              <div className={`block lg:hidden md:hidden  m-4 ${trigger ? "text-blue-500" :"text-white"}`} onClick={menuTriggered}>{menubar}</div>
 
      </div>

      
      </div> 

      <div
  className="absolute top-20 right-0 fixed w-[85%] h-44 bg-black z-10  transition-transform duration-1200 block lg:hidden md:hidden opacity-90 "
  style={{
    transform: `perspective(1000px) rotateY(${trigger ? "0deg" : "90deg"})`,
    transformOrigin: "right",
    transition: "transform 0.8s ease-out",
    boxShadow: trigger ? "0px 0px 20px rgba(0,0,0,0.15)" : "none",
  }}
>
 
              
        <div onClick={() => handleNavigation("/")}  className={`cursor-pointer mx-3 ${underLine==="/" ?  " text-blue-300" : "text-white"}`}>Products</div>
        <div onClick={() => handleNavigation("/story")} className={`cursor-pointer mx-3  ${underLine==="/story" ?   " text-blue-300" : "text-white"}`}>Our Story</div>
        <div onClick={() => handleNavigation("/careers")} className={`cursor-pointer mx-3 ${underLine==="/careers" ?   " text-blue-300" : "text-white"}`}>Career</div>
        <div className='w-24 h-12 border border-stone-300 rounded-lg text-stone-300 text-xl flex items-center justify-center mt-3 ml-3'>Login</div>
        {/* <div onClick={() => handleNavigation("/careers")} className='text-stone-300 text-lg border-b border-stone-700 pb-1 ml-3 mt-1'>Career</div> */}
      </div> 
      
      

   
       </div>
   </>
  )
}

export default Navbar