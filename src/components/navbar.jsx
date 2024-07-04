import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";


const Navbar = () => {
  const { pathname } = useLocation()
  const scroller = Scroll.scroller;
  const navigate = useNavigate()

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };

  return <nav className="bg-white shadow-md fixed w-full left-0 top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="font-extrabold text-3xl text-[#4052FF]">
            Benaik
          </Link>
        </div>
        <div className="hidden md:block">
       
          <div className="ml-10 flex items-baseline space-x-4">
            {
              pathname == "/" ? <>
                <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-[#4052FF]">
                  Home
                </ScrollLink>
                <ScrollLink to="features" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-[#4052FF]">
                  Features
                </ScrollLink>
                <Link to="/eventForms" className="cursor-pointer hover:text-[#4052FF]">Events</Link>
                <ScrollLink to="contact-us" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-[#4052FF]"> 
                  Contact 
                </ScrollLink>
              </> :
                <>
                  <span onClick={() => goToPageAndScroll("home")} className="cursor-pointer hover:text-[#4052FF]">Home</span>
                  <span onClick={() => goToPageAndScroll("features")} className="cursor-pointer hover:text-[#4052FF]">Features</span>
                  <Link to="/events" className="cursor-pointer hover:text-[#4052FF]">Events</Link>
                  <span onClick={() => goToPageAndScroll("contact")} className="cursor-pointer hover:text-[#4052FF]">Contact</span>
                </>
            }


          </div>
        </div>
        <div className="hidden md:block flex items-center">
          <Link
            to="/create-event"
            className="bg-[#4052FF] hover:bg-indigo-400 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Create event
          </Link>
        </div>
      </div>
    </div>
  </nav>

}



export default Navbar;