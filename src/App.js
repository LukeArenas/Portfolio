import './App.css'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="profile-container">
          <div className="profile">
            <h3 className="name">Luke Arenas</h3>
            <h3 className="subtitle">Full Stack Software Engineer</h3>
          </div>
        </div>
        <div className="menu">
          <a href="#projects" className="link">
            <i class="mdi-hardware-computer small"></i>
            <span>Projects</span>
          </a>
          <a href="#about" className="link">
            <i class="mdi-social-person small"></i>
            <span>About</span>
          </a>
          <a href="#skills" className="link">
            <i class="mdi-action-assignment-turned-in small"></i>
            <span>Skills</span>
          </a>
          <a href="#education" className="link">
            <i class="mdi-social-school small"></i>
            <span>Education</span>
          </a>
          <a href="#contact" className="link">
            <i class="mdi-communication-email small"></i>
            <span>Contact</span>
          </a>
          <a
            href="https://docs.google.com/document/d/121lqfi_ufRMJwIwPMr0pbVZynDH6AcJosKHs-0EU6eA/edit"
            target="blank"
            className="link"
          >
            <i class="mdi-action-description small"></i>
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div className="outer-content-container">
        <div className="spacer-div"></div>
        <Introduction />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

export default App
