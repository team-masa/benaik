
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
        <Outlet />
      </div>
      <Footer />

    </>
  )
}

export default RootLayout

