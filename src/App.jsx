import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/cores/Navbar';
import Footer from './pages/footer';
function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <div><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  )
}

export default App
