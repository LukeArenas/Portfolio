import React from 'react'
import hiking from '../images/hiking.jpg'

const About = () => {
  return (
    <div id="about">
      <h2>ABOUT</h2>
      <div className="about-page">
        <img src={hiking} alt="Luke and Bailey" className="about-picture" />
        <p>
          I'm a full stack developer located in Denver, Colorado. In both my
          work and my personal life, I am passionate about learning new things
          and discovering a new way to approach and overcome a challenge. In my
          free time, you can find me and my dog on an adventure somewhere in our
          beautiful state.
        </p>
      </div>
    </div>
  )
}

export default About
