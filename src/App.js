import React from 'react'
import Navbar from './components/Navbar/navbar'
import Landing from './components/Landing Page/landingPage'
import Marquee from './components/Marquee/marquee'
import About from './components/About/about'
import Eyes from './components/Eyes/eyes'
import Projects from './components/Projects/Projects'
import Cards from './components/Cards/cards'
import Footer from './components/Footer/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App