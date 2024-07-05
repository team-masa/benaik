import React from 'react'
import { paroEight, paroFive, paroFour, paroOne, paroSeven, paroSix, paroThree, paroTwo } from '../../../assets'

const PartyGallery = () => {
  return (
    <div>
      <div className="pt-10 text-center font-extrabold text-2xl">
        <h1>GALLERY</h1>
      </div>
      <div className='grid grid-cols-4 gap-5 mt-5 w-[70%] h-[50%]  pl-10 pr-10 ml-40  mb-20 shadow-lg p-10'>
        <img src={paroOne} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={paroTwo} alt="" className='transform transition-transform duration-500 hover:scale-125' />
        <img src={paroThree} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={paroFour} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={paroFive} alt="" className='transform transition-transform duration-500 hover:scale-125' />
        <img src={paroSix} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={paroSeven} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
        <img src={paroEight} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
      </div>

    </div>
  )
}

export default PartyGallery