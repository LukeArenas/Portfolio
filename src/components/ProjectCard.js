import React, { useState } from 'react'

const ProjectCard = (props) => {
  const [isClicked, setClicked] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')
  const handleClick = (name) => {
    if (isClicked) {
      setClicked(false)
    } else {
      setClicked(true)
      setSelectedCard(name)
    }
  }
  return (
    <div className="project-card-container">
      {props.projects.map((project, idx) => (
        <div
          onClick={() => handleClick(project.name)}
          className="project-card"
          key={idx}
        >
          <img src={project.images} alt="project" className="project-img" />
          <h3 className="project-name">{project.name}</h3>
          {isClicked && selectedCard === project.name ? (
            <div className="card-content">
              <h5 className="tech-label">Description:</h5>
              <p>{project.description}</p>
              <h5 className="tech-label">Technologies:</h5>
              <ul className="tech-list">
                {project.technologies.map((tech) => {
                  return <li>{tech}</li>
                })}
              </ul>
              <a href={project.github} target="blank" className="project-link">
                <i class="devicon-github-original">Source</i>
              </a>
              <a href={project.website} target="blank" className="project-link">
                <i class="mdi-av-web small">Website</i>
              </a>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
