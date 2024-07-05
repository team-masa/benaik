import { useNavigate } from "react-router-dom";
import { catOne, norOne, parOne, sayOne } from "../../../assets";

const About = () => {
const navigate = useNavigate()

    return (
        <div id="about" className="p-10 font-thin">
            <div className="text-center text-2xl">
                <h2 className="font-extrabold text-3xl text-center">About Us</h2>

                <div className="pt-5">
                    <p>We are a dedicated team committed to providing the best event planning services to our clients.</p>
                    <p>Our mission is to deliver high-quality solutions that meet our customers' needs.</p>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-10 pt-10">

                <div className="shadow-md  text-center grid grid-cols-2 bg-red-100">
                    <img src={sayOne} alt="" className="w-full h-full object-cover" />
                    <div className="pt-10 pl-5">
                        <h2 className="text-2xl font-bold ml-10 text-amber-700">weddings  Events</h2>
                        <p className="font-bold pt-5 pr-5 ">Contact us to learn more about our offerings and how we can help you plan your next event.</p>

                        <button className="bg-slate-300 px-3 py-2 rounded-full drop-shadow-lg text-blue-950 font-bold mt-5" onClick={() => navigate("/events/weddings")}>View More</button>
                    </div>
                </div>

                <div className="shadow-md  text-center grid grid-cols-2 bg-slate-400">
                    <img src={norOne} alt=""  className="w-full h-full object-cover" />
                    <div className="pt-10 pl-5">
                        <h2 className="text-2xl font-bold ml-10 text-blue-950">Funerals Events</h2>
                        <p className="font-bold pt-5 pr-5 pl-5">Contact us to learn more about our offerings and how we can help you plan your next event.</p>

                        <button className="bg-orange-200 px-3 py-2 rounded-full drop-shadow-lg text-blue-950 font-bold mt-5" onClick={() => navigate("/events/funerals")}>View More</button>
                    </div>

                </div>

                <div className="shadow-md text-center grid grid-cols-2 bg-cyan-200">
                    <img src={parOne} alt="" className="w-full h-full object-cover" />
                    <div className="pt-10 pl-5">
                        <h2 className="text-2xl font-bold">Parties Events</h2>
                        <p className="font-bold pt-5 pr-5 ">Contact us to learn more about our offerings and how we can help you plan your next event.</p>
                        <button className="bg-red-200 px-3 py-2 rounded-full drop-shadow-lg text-blue-950 font-bold mt-5" onClick={() => navigate("/events/parties")}>View More</button>
                    </div>

                </div>

                <div className="shadow-md text-center grid grid-cols-2 bg-lime-200">
                    <img src={catOne} alt="" className="w-full h-full object-cover" />
                    <div className="pt-10 pl-5">
                        <h2 className="text-2xl font-bold  text-blue-950">Conference Events</h2>
                        <p className="font-bold pt-5 pr-5 ">Contact us to learn more about our offerings and how we can help you plan your next event.</p>
                        <button className="bg-slate-500 px-3 py-2 rounded-full drop-shadow-lg text-blue-950 font-bold mt-5" onClick={() => navigate("/events/conferences")}>View More</button>
                    </div>

                </div>
            </div>


        </div>

    );
};


export default About;