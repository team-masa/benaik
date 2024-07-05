import React from 'react'
import PartyEvents from '../parties/components/event'
import WeddingEvents from '../weddings/components/event'

const Events = () => {
  return (
    <div>
        <div>
            <h1>Parties</h1>
            <PartyEvents/>
        </div>
        <div>
            <h1>Weddings</h1>
            <WeddingEvents/>
        </div>
    </div>
  )
}

export default Events