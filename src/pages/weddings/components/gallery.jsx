import { ringEight, ringFive, ringFour, ringOne, ringSeven, ringSix, ringThree, ringTwo } from "../../../assets"


const WeddingGallery = () => {
    return (
        <div>

            <div className="pt-10 text-center font-extrabold text-2xl">
                <h1>Gallery</h1>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 w-[70%] h-[50%]  pl-10 pr-10 ml-40  mb-20 shadow-lg p-10'>
                <img src={ringOne} alt="Elegant Ring One"  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={ringTwo} alt="Elegant Ring Two"  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={ringThree} alt="Elegant Ring Three" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={ringFour} alt="Elegant Ring Four"  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={ringFive} alt=""  className='transform transition-transform duration-500 hover:scale-125'/>
                <img src={ringSix} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={ringSeven} alt="" className='transform transition-transform duration-500 hover:scale-125' />
                <img src={ringEight} alt=""  className='transform transition-transform duration-500 hover:scale-125'/>


                
            </div>
        </div>


    )
}

export default WeddingGallery