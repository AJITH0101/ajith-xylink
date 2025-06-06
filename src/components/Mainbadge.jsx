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
    <div className='border border-stone-700 rounded-lg lg:w-[80%] md:w-[90%] sm:w-[100%] w-[100%] lg:h-[100%]  md:h-[100%] w-[100%] h-[100%] bg-stone-900 flex flex-row'>
        <div className='lg:w-[30%] md:w-[40%] w-[35%] h-auto bg-stone-950 border-r border-stone-700 rounded-l-lg flex justify-center'>
            <Selector/> 
        </div>
        <div className='lg:w-[70%] md:w-[70%] w-[60%] h-auto flex justify-center '>
            <div className='w-[100%]'>{badgeArray[badgeSelect.stage]}  </div>        
      
        </div>
    </div>
  )
}

export default Mainbadge