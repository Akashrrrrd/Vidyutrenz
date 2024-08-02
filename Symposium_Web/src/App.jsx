import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Sponsor from './components/Sponsor/Sponsor'
import Events from './components/Events/Events'
import Contacts from './components/Contact/Contacts'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/sponsors' element={<Sponsor/>}/>
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
