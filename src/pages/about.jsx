import React from 'react'
import HeroSection from '../components/about/herobanner'
import CardSection from '../components/about/cardsection'
import Testimonials from '../components/about/testimonialsection'
import ContactForm from '../components/about/formsection'
import GuestAssistance from '../components/about/formsection'
import BelairCottages from '../components/about/spaceslider'
import EliteRoomAmenities from '../components/about/facilitiessection'
import AboutSection from '../components/about/aboutsection'
import ResortContactForm from '../components/about/formsection'


function About() {
  return (
    <div>
        <HeroSection />
        <AboutSection/>
        <CardSection />
        <EliteRoomAmenities/>
        <BelairCottages/>
        <ResortContactForm/>
        <Testimonials/>
        
       

    </div>
  )
}

export default About