import React from 'react'
import profilePicture from '../images/Profile-Picture.jpg'

const Introduction = () => {
  return (
    <div id="introduction">
      <h2>PORTFOLIO</h2>
      <div className="intro-page">
        <img src={profilePicture} alt="luke" className="profile-pic" />
        <h3 className="intro-content">
          Hi! I'm Luke Arenas. I'm a full stack developer with a keen eye for
          detail.
        </h3>
      </div>
    </div>
  )
}

export default Introduction
