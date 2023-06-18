import './App.css'
import { AboutMe } from './assets/pages/AboutMe'
import { Hero } from './assets/pages/Hero'
import { ProgrammingSkill } from './assets/pages/ProgrammingSkill'

function App() {

  return (
    <div className='bg-yellow-sugar'>
      <Hero/>
      <AboutMe/>
      <ProgrammingSkill/>
    </div>
  )
}

export default App
