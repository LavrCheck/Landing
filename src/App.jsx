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




function App() {


  return (
    <div className='App'>
      <Header />
      <StartPage />
      <HowItWorks />
      <Reviews />
      <Questions />
      <Descriptions />
      <Form />
    </div>
  )
}

export default App
