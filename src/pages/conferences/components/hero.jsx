import React from 'react'
import { seminarOne } from '../../../assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen overflow-hidden">
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover brightness-[50%]">
      <source src={seminarOne} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-yellow-100">
      <h1 className="text-4xl font-bold text-center">
      Empowering Ideas, Inspiring Connections
      </h1>
      <button className="mt-5 px-6 py-3  font-semibold text-white bg-transparent rounded border hover:bg-cyan-600" onClick={() => navigate("/create-event")}>Create Your Event</button>
    </div>
  </div>
  )
}

export default Hero