import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team.jsx';
import Reservation from '../components/Reservation.jsx';
import Footer from '../components/Foote.jsx';


const Home = () => {
  return (
    <div>
      {/* <p>Welcome to the Home Page</p> */}
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </div>
  )
}

export default Home
