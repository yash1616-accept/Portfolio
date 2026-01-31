import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Navbar from './components/Hero/navbar'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>

      {/* <section id="projects">
        <Project />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

    </>

  )
}

export default App
