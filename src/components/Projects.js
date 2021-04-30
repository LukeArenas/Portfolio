import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsArray } from '../assets/projects'

const Projects = () => {
  return (
    <div id="projects">
      <h2>PROJECTS</h2>
      <ProjectCard projects={projectsArray} />
    </div>
  )
}

export default Projects
