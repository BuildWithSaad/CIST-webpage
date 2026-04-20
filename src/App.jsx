import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import VisionMission from './components/sections/VisionMission';
import SDGFocus from './components/sections/SDGFocus';
import Courses from './components/sections/Courses';
import Partners from './components/sections/Partners';
import Villages from './components/sections/Villages';
import Projects from './components/sections/Projects';
import Awards from './components/sections/Awards';
import Team from './components/sections/Team';
import Activities from './components/sections/Activities';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <VisionMission />
        <SDGFocus />
        <Courses />
        <Partners />
        <Villages />
        <Projects />
        <Awards />
        <Team />
        <Activities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
