import React from 'react'
import Hero from './components/hero'
import ConfereneEvent from './components/event'
import ConferenceGallery from './components/gallery'

const Conference = () => {
  return (
    <div>
        <Hero/>
        <ConfereneEvent/>
        <ConferenceGallery/>
    </div>
  )
}

export default Conference