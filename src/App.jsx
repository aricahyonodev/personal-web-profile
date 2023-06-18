import './App.css'
import { AboutMe } from './assets/pages/AboutMe'
import { Bootcamp } from './assets/pages/Bootcamp'
import { Hero } from './assets/pages/Hero'
import { ProgrammingSkill } from './assets/pages/ProgrammingSkill'

function App() {

  return (
    <div className='bg-yellow-sugar'>
      <Hero/>
      <AboutMe/>
      <ProgrammingSkill/>
      <Bootcamp/>
    </div>
  )
}

export default App
