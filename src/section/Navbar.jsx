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
                <div onClick={() => navigate("/")} className="cursor-pointer mx-3">Products</div>
                <div onClick={() => navigate("/story")} className="cursor-pointer mx-3">Our Story</div>
                <div onClick={() => navigate("/careers")} className="cursor-pointer mx-3">Careers</div>   
                  <div><button className='mr-28 border border-stone-500 rounded-lg w-22 h-9 ml-8'>Login</button></div>      
                </div>
              <div className={`block lg:hidden md:hidden  m-4 ${trigger ? "text-blue-500" :"text-white"}`} onClick={menuTriggered}>{menubar}</div>
 
      </div>
      </div> 
      

   
       </div>
   </>
  )
}

export default Navbar