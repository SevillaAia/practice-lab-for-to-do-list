import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import AboutUs from './Routes/AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app'>
        <Sidebar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App