import React from 'react'
import Selector from './Selector'
import Badge from './Badge'
import Numbers from './Numbers'
import Trends from './Trends'
import People from './People'
import Timeline from './Timeline'
import girl from '../assets/girl.jpg'
import desert from '../assets/desert.jpg'; 
import { useSelector } from 'react-redux'


const Mainbadge = () => {
    const marketing = {
        head:"Marketing engagement",
        desc:"Description added here like this..",
        bottom:"Mobile usage"
    }

    const embeds = {
        head:"Launch cover design",
        desc:"Designs like this..",      
        bottom:"Website Playground"
    }

  const badgeSelect = useSelector((state)=>state.select)
  const badgeArray = [<Badge image={desert} details={marketing}/> ,<Badge image={girl} details={embeds}/> ,<Numbers/>,<Trends/>,<People/>,<Timeline/> ]


  

    
  return (
    <div className='border border-stone-700 rounded-lg lg:w-[30rem] md:w-[30rem] sm:w-[30rem] w-[30rem]  h-80 bg-stone-900 flex flex-row'>
        <div className='w-48 h-full bg-stone-950 border-r border-stone-700 rounded-l-lg flex justify-center'>
            <Selector/> 
        </div>
        <div className='w-full flex justify-center item-center mt-4'>
           
                {badgeArray[badgeSelect.stage]}      
           

        </div>
    </div>
  )
}

export default Mainbadge