import { ringFour, ringOne, ringThree, ringTwo } from "../../../assets"


const WeddingGallery = () => {
  return (
    <div>

        <div className="pt-20 text-center font-extrabold text-2xl">
            <h1>Gallery</h1>
        </div>
        <div className='flex mt-5'>
                <div>
                    <img src={ringOne} alt="Elegant Ring One" />
                   
                </div>

                <div>
                    <img src={ringTwo} alt="Elegant Ring Two" />
                   
                </div>

                <div>
                    <img src={ringThree} alt="Elegant Ring Three" />
                    
                </div>

                <div>
                    <img src={ringFour} alt="Elegant Ring Four" />
                   
                </div>
            </div>
        </div>

    
  )
}

export default WeddingGallery