import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {
  return (
    <>
    <Navbar />
     <div className='app'>
      <Sidebar />
      <Cards />
      <Footer />
    </div>
    </>
   
  )
}

export default App