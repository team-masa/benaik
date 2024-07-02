import { partyOne } from "../../../assets"


const hero = () => {
    return (
        <div className="">

            <div className="bg-cover">
         <span className="font-bold">Join Us and Discover More</span>
                </div>
            

            <div className="w-full">
                <img src={partyOne} alt="Hero background" className="object-cover w-full h-full" />
            </div>
            <div className="flex justify-center px-6 py-3 rounded-full border-2 border-black">
                <button>LOG IN</button>
                </div>
                
                
                

                <div> <button>SIGN UP</button>

                </div>
               
            

        </div>
    )
}

export default hero