import React from 'react'
import { funyEight, funyFive, funyFour, funyOne, funySeven, funySix, funyThree, funyTwo } from '../../../assets'

const FuneralGallery = () => {
  return (
    <div>
      <div className="pt-10 text-center font-extrabold text-2xl">
        <h1>GALLERY</h1>
      </div>

      <div className='grid grid-cols-4 gap-5 mt-5 w-[70%] h-[50%]  pl-10 pr-10 ml-40  mb-20 shadow-lg p-10'>
        <img src={funyOne} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funyTwo} alt="" className='transform transition-transform duration-500 hover:scale-125' />
        <img src={funyThree} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funyFour} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funyFive} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funySix} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funySeven} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={funyEight} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
      </div>

    </div>
  )
}

export default FuneralGallery