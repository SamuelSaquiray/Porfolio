import './App.css'
import Header from './components/Header'
import Background from './components/Background'
import Inicio from './Sections/Inicio'
import Proyectos from './Sections/Proyectos'
function App() {

  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <Background/>
      <Inicio/>
      <Proyectos/>
      </div>
  )
}

export default App
