import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Sections/Header'
import Inicio from './Sections/Inicio'
import Proyectos from './Sections/Proyectos'
import Skills from './Sections/Skills'
import Footer from './Sections/Footer'
import SpriteCanvas from "./components/sprite.jsx";
import About from './Sections/About.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='flex flex-col items-center flex-auto w-full min-h-screen flex-between'>
      <Header/>
      <Inicio/>
      <Proyectos/>
      <Skills/>
      <SpriteCanvas/>
      <About/>
      <Footer/>
    </div>
  </StrictMode>,
)
