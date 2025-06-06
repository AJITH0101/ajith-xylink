import React, { useEffect, useState } from 'react'
import ButtonSelect from './ButtonSelect';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LiaAddressCardSolid } from "react-icons/lia";
import { MdAutoGraph } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { TbTimelineEventPlus } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiNumberSquareSevenFill } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { autoShift } from '../redux/select';
const cardIcon = <LiaAddressCardSolid size={17} />
const trends = <MdAutoGraph  size={20}/>
const people = <GoPeople size={20}/>
const embed = <FaLink size={20}/>
const timeline = <TbTimelineEventPlus size={20}/>
const rightArrow = <MdOutlineKeyboardArrowRight size={15} />
const num = <PiNumberSquareSevenFill  size={20} />
const more = <MdMoreHoriz   size={20}/>
const block = <BsStars size={12} color='white'/>

const Selector = () => {
const [selectIcon, setSelectIcon] = useState({
  icon1:"bg-red-500",
  icon2:"bg-stone-800",
  icon3:"bg-stone-800",
  icon4:"bg-stone-800",
  icon5:"bg-stone-800",
  icon6:"bg-stone-800",
  text1:"text-white",
  text2:"text-stone-500",
  text3:"text-stone-500",
  text4:"text-stone-500",
  text5:"text-stone-500",
  text6:"text-stone-500",
  text7:"text-stone-500"
})//"bg-stone-800"

const dispatch = useDispatch()


const iconSelect = useSelector((state)=>state.stage)
const [shiftLogic,setShiftLogic] = useState(false)
const [switchLogic, setSwitchLogic] = useState(true)
let counter = 0;

// const [counter, setCounter] = useState(0)
const colorArray = ["bg-red-500","bg-green-500","bg-blue-500","bg-yellow-600","bg-pink-600","bg-orange-600"]

useEffect(()=>{
 if(!shiftLogic)
 {
 
  const myInterval = setInterval(()=>{
    clickedOption(colorArray[counter],counter)
    counter++
    if(counter>5)
      counter=0   
   
  },2000)

  return() => clearInterval(myInterval)
}
},[shiftLogic])

  const clickedOption=(selectColor,shiftValue)=>{

 

    dispatch(autoShift(shiftValue))

    switch (selectColor) {  
      case "bg-red-500":  
        setSelectIcon((prev)=>{
          return{
            ...prev,
             icon1:"bg-red-500",icon2:"bg-stone-800",icon3:"bg-stone-800",icon4:"bg-stone-800",icon5:"bg-stone-800",
            icon6:"bg-stone-800",text1:"text-white",text2:"text-stone-500",text3:"text-stone-500",text4:"text-stone-500",
            text5:"text-stone-500",text6:"text-stone-500",text7:"text-stone-500"
          }
        })
        break; 
    
      case "bg-green-500":
        setSelectIcon((prev)=>{
          return{
            ...prev,
            icon1:"bg-stone-800",icon2:"bg-green-500",icon3:"bg-stone-800",icon4:"bg-stone-800",icon5:"bg-stone-800",
            icon6:"bg-stone-800",text1:"text-stone-500",text2:"text-white",text3:"text-stone-500",text4:"text-stone-500",
            text5:"text-stone-500",text6:"text-stone-500",text7:"text-stone-500"
          }
        })
        break;

        case "bg-blue-500":
          setSelectIcon((prev)=>{
            return{
              ...prev,
              icon1:"bg-stone-800",icon2:"bg-stone-800",icon3:"bg-blue-500",icon4:"bg-stone-800",icon5:"bg-stone-800",
              icon6:"bg-stone-800",text1:"text-stone-500",text2:"text-stone-500",text3:"text-white",text4:"text-stone-500",
            text5:"text-stone-500",text6:"text-stone-500",text7:"text-stone-500"
            }
          })
          break;

          case "bg-yellow-600":
            setSelectIcon((prev)=>{
              return{
                ...prev,
                icon1:"bg-stone-800",icon2:"bg-stone-800",icon3:"bg-stone-800",icon4:"bg-yellow-600",icon5:"bg-stone-800",
                icon6:"bg-stone-800",text1:"text-stone-500",text2:"text-stone-500",text3:"text-stone-500",text4:"text-white",
            text5:"text-stone-500",text6:"text-stone-500",text7:"text-stone-500"
              }
            })
            break;

            case "bg-pink-600":
              setSelectIcon((prev)=>{
                return{
                  ...prev,
                  icon1:"bg-stone-800",icon2:"bg-stone-800",icon3:"bg-stone-800",icon4:"bg-stone-800",icon5:"bg-pink-600",
                  icon6:"bg-stone-800",text1:"text-stone-500",text2:"text-stone-500",text3:"text-stone-500",text4:"text-stone-500",
            text5:"text-white",text6:"text-stone-500",text7:"text-stone-500"
                }
              })
              break;

              case "bg-orange-600":
                setSelectIcon((prev)=>{
                  return{
                    ...prev,
                    icon1:"bg-stone-800",icon2:"bg-stone-800",icon3:"bg-stone-800",icon4:"bg-stone-800",icon5:"bg-stone-800",
                    icon6:"bg-orange-600",text1:"text-stone-500",text2:"text-stone-500",text3:"text-stone-500",text4:"text-stone-500",
            text5:"text-stone-500",text6:"text-white",text7:"text-stone-500"
                  }
                })
                break;
    
      default:
        setSelectIcon((prev)=>{
          return{
            ...prev,
            icon1:"bg-stone-800",icon2:"bg-stone-800",icon3:"bg-stone-800",icon4:"bg-stone-800",icon5:"bg-stone-800",
            icon6:"bg-stone-800",text1:"text-stone-500",text2:"text-stone-500",text3:"text-stone-500",text4:"text-stone-500",
            text5:"text-stone-500",text6:"text-stone-500",text7:"text-stone-500"
          }
        })
    }

   
  }
  return (
    
    <div className='w-full h-full'>
        <div className='flex flex-row mt-4 w-full'>
            <div className='ml-2 mb-4'>{block}</div>            
         <label className='text-white text-sm ml-1'>Blocks</label>   
        </div>

        <div className='w-full'>
        
    <ButtonSelect color={selectIcon.icon1} text={selectIcon.text1} icon={cardIcon} arrow={rightArrow}  onClick={() => clickedOption("bg-red-500",0,setShiftLogic(true))}>Cards</ButtonSelect>
    <ButtonSelect color={selectIcon.icon2} text={selectIcon.text2} icon={trends} arrow={rightArrow}   onClick={() => clickedOption("bg-green-500",1,setShiftLogic(true))}>Trends</ButtonSelect>   
    <ButtonSelect color={selectIcon.icon3} text={selectIcon.text3} icon={num} arrow={rightArrow}  onClick={() => clickedOption("bg-blue-500",2,setShiftLogic(true))}>Numbers</ButtonSelect>   
    <ButtonSelect color={selectIcon.icon4} text={selectIcon.text4} icon={people} arrow={rightArrow}  onClick={() => clickedOption("bg-yellow-600",3,setShiftLogic(true))}>People</ButtonSelect>
    <ButtonSelect color={selectIcon.icon5} text={selectIcon.text5} icon={embed} arrow={rightArrow}  onClick={() => clickedOption("bg-pink-600",4,setShiftLogic(true))}>Embeds</ButtonSelect>   
    <ButtonSelect color={selectIcon.icon6} text={selectIcon.text6} icon={timeline} arrow={rightArrow}  onClick={() => clickedOption("bg-orange-600",5,setShiftLogic(true))}>Timeline</ButtonSelect>  
    <ButtonSelect text={selectIcon.text7} icon={more} arrow={rightArrow}>More</ButtonSelect>  
        </div>
      </div>
  )
}

export default Selector