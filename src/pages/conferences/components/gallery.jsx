import React from 'react'
import { eveEight, eveFive, eveFour, eveOne, eveSeven, eveSix, eveThree, eveTwo } from '../../../assets'

const ConferenceGallery = () => {
    return (
        <div>

            <div className="pt-10 text-center font-extrabold text-2xl">
                <h1>GALLERY</h1>
            </div>

            <div className='grid grid-cols-4 gap-5 mt-5 w-[70%] h-[50%]  pl-10 pr-10 ml-40  mb-20 shadow-lg p-10 '>
                <img src={eveOne} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={eveTwo} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={eveThree} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={eveFour} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={eveFive} alt=""  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={eveSix} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={eveSeven} alt=""  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={eveEight} alt="" className='transform transition-transform duration-500 hover:scale-125'/>
            </div>

        </div>
    )
}

export default ConferenceGallery