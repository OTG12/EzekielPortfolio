
import './App.css'
import About from './componets/About'
import Certificate from './componets/Certificate'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import Hero from './componets/Hero'
import NavBar from './componets/NavBar'
import SplitText from './componets/SplitText'
import Skills from './componets/Skills'
import Works from './componets/Works'


function App() {
  
  return (
    <div className=''>
     <NavBar/>
     <Hero/>
     <About/>
     <Skills/>
     <Works/>
     <SplitText/>
     <Certificate/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
