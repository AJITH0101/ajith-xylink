import React from 'react'
import ButtonSelect from './ButtonSelect';
import { LiaAddressCardSolid } from "react-icons/lia";
import { MdAutoGraph } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { TbTimelineEventPlus } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiNumberSquareSevenFill } from "react-icons/pi";
import { MdMoreHoriz } from "react-icons/md";
import { BsStars } from "react-icons/bs";
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

  const clickedOption=(buttons)=>{
    console.log("pulayadi",buttons);
    
  }
  return (
    
    <div>
        <div className='flex flex-row mt-4'>
            <div className='ml-2 mb-4'>{block}</div>            
         <label className='text-white text-sm ml-1'>Blocks</label>   
        </div>
        
    <ButtonSelect icon={cardIcon} arrow={rightArrow}  onClick={() => clickedOption("Cards")}>Cards</ButtonSelect>
    <ButtonSelect icon={trends} arrow={rightArrow} onClick={() => clickedOption("Trends")}>Trends</ButtonSelect>   
    <ButtonSelect icon={num} arrow={rightArrow} onClick={() => clickedOption("Numbers")}>Numbers</ButtonSelect>   
    <ButtonSelect icon={people} arrow={rightArrow} onClick={() => clickedOption("People")}>People</ButtonSelect>
    <ButtonSelect icon={embed} arrow={rightArrow} onClick={() => clickedOption("Embeds")}>Embeds</ButtonSelect>   
    <ButtonSelect icon={timeline} arrow={rightArrow} onClick={() => clickedOption("Timeline")}>Timeline</ButtonSelect>  
    <ButtonSelect icon={more} arrow={rightArrow}>More</ButtonSelect>  
    </div>
  )
}

export default Selector