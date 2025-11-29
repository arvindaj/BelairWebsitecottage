import React from 'react'
import HeroSection from '../components/rooms/herobanner'
import PremiumRoomAmenities from '../components/rooms/galarysection'
import LuxuryCottage from '../components/rooms/videosection'



function Rooms() {
  return (
    <div>
        <HeroSection />
        <PremiumRoomAmenities/>
        <LuxuryCottage/>

    </div>
  )
}

export default Rooms