import React from 'react'
import './app.css'


import About from './container/About/About'
import Services from './container/Services/Services'
import Feedback from './container/Feedback/Feedback'
import Project from './container/Project/Project'
import Footer from './container/Footer/Footer'

const App = () => {
  return (
    <html>
    <div>
      
      <About/>
      <Services/>
      <Feedback/>
      <Project/>
      <Footer/>
    </div>
    </html>
  )
}

export default App
