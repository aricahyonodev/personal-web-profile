import './App.css'
import { AboutMe } from './assets/pages/AboutMe'
import { Bootcamp } from './assets/pages/Bootcamp'
import { Hero } from './assets/pages/Hero'
import { ListPortofolio } from './assets/pages/ListPortofolio'
import { ProgrammingSkill } from './assets/pages/ProgrammingSkill'
import { Footer } from './assets/pages/Footer'

function App() {

  return (
    <div className='bg-yellow-sugar'>
      <Hero/>
      <AboutMe/>
      <ProgrammingSkill/>
      <Bootcamp/>
      <ListPortofolio/>
      <Footer/>
    </div>
  )
}

export default App
