import React from 'react'
import K from '../constant'
import { Link } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <span>Benaik</span>
        <div>
            {K.NAVLINKS.map((item, index) => {
                return(
                    <Link key={index} to={item.path}>{item.name}
                    </Link>
                )
            }

            )}
        </div>
    </div>
  )
}

export default Navbar