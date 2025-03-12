import React from 'react'
import Selector from './Selector'
import Badge from './Badge'
import Numbers from './Numbers'
import Trends from './Trends'
import People from './People'
import Timeline from './Timeline'
import girl from '../assets/girl.jpg'
import desert from '../assets/desert.jpg'; 


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

  return (
    <div className='border border-stone-700 rounded-lg w-2/6 h-80 bg-stone-900 flex flex-row'>
        <div className='w-48 h-full bg-stone-950 border-r border-stone-700 rounded-l-lg flex justify-center'>
            <Selector/> 
        </div>
        <div className='w-full flex justify-center item-center mt-4'>
            {/* <Badge image={girl} details={embeds}/>  */}
          <Numbers/> 
            {/* <Trends/>  */}
            {/* <People/>  */}
            {/* <Timeline/> */}
        </div>
    </div>
  )
}

export default Mainbadge