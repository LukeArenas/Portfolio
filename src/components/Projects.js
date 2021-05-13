import React from 'react'
import Card from './Card'
import { projectsArray } from '../assets/projects'

const Projects = () => {
  return (
    <div id="projects">
      <h2>PROJECTS</h2>
      <Card projects={projectsArray} />
    </div>
  )
}

export default Projects
