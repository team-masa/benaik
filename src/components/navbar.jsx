import { Link } from "react-router-dom";
import { K } from "../constants";

const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full left-0 top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="font-extrabold text-3xl text-[#4052FF]">
            Benaik
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {K.NAVLINKS.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            to="/events"
            className="bg-[#4052FF] text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Attend event
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;