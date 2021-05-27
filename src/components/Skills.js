import React from 'react'
import {
  html,
  css,
  javascript,
  react,
  redux,
  node,
  express,
  mongo,
  postgres,
  github,
  heroku,
  aws
} from '../assets/logos'

const Skills = () => {
  return (
    <div className="skills-page" id="skills">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
      ></link>
      <h2>SKILLS</h2>
      <div className="carousel-container">
        <div id="skillsCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="inner-carousel-container">
                <div>
                  {html}
                  <h3 className="skill">HTML</h3>
                </div>
                <div>
                  {css}
                  <h3 className="skill">CSS</h3>
                </div>
                <div>
                  {javascript}
                  <h3 className="skill">JavaScript</h3>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="inner-carousel-container">
                <div>
                  {react}
                  <h3 className="skill">React</h3>
                </div>
                <div>
                  {redux}
                  <h3 className="skill">Redux</h3>
                </div>
                <div>
                  {node}
                  <h3 className="skill">Node</h3>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="inner-carousel-container">
                <div>
                  {express}
                  <h3 className="skill">Express</h3>
                </div>
                <div>
                  {mongo}
                  <h3 className="skill">MongoDB</h3>
                </div>
                <div>
                  {postgres}
                  <h3 className="skill">PostgreSQL</h3>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="inner-carousel-container">
                <div>
                  {github}
                  <h3 className="skill">GitHub</h3>
                </div>
                <div>
                  {heroku}
                  <h3 className="skill">Heroku</h3>
                </div>
                <div>
                  {aws}
                  <h3 className="skill">AWS</h3>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#skillsCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="mdi-hardware-keyboard-arrow-left"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#skillsCarousel"
            role="button"
            data-slide="next"
          >
            <span
              class="mdi-hardware-keyboard-arrow-right large"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills
