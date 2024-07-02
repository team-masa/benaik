
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Events from '../components/events'
import Footer from '../components/footer'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Events/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default RootLayout;