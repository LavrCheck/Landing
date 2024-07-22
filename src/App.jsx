import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StartPage } from './components/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Reviews } from './components/Reviews'


function App() {

  return (
    <div className='App'>
      <Header/>
      <StartPage/> 
      <HowItWorks/>
      <Reviews/>
    </div>
  )
}

export default App
