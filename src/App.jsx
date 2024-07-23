import './App.css'
import { StartPage } from './components/StartPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Header } from './components/Header'
import { HowItWorks } from './components/HowItWorks'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reviews } from './components/Reviews'
import { Questions } from './components/Questions'
import { Descriptions } from './components/Descriptions';
import { Form } from './components/Form,';
import { Footer } from './components/Footer';
import { useRef } from 'react';




function App() {

  const howItWorksRef = useRef(null)
  const blockRef = useRef(null)
  const questionsRef = useRef(null)
  const formRef = useRef(null)


  return (
    <div className='App'>
      <Header refs={{ howItWorksRef, blockRef, questionsRef, formRef }} />
      <StartPage />
      <section>
        <HowItWorks refs={{ howItWorksRef, blockRef }} />
      </section>
      <Reviews />
      <section className='w-100'>
        <Questions refs={questionsRef} />
      </section>
      <section>
        <Descriptions />
      </section>
      <section>
        <Form refs={formRef} />
      </section>
      <footer className='w-100'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
