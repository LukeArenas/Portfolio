import React from 'react'

const Card = (props) => {
  return (
    <div className="project-card-container">
      {props.projects.map((project, idx) => (
        <div class="flip-card" key={idx}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src={project.images}
                alt={project.name}
                className="project-img"
              />
            </div>
            <div class="flip-card-back">
              <div className="card-content">
                <h3 className="project-name">{project.name}</h3>
                <h5 className="tech-label">Description:</h5>
                <p>{project.description}</p>
                <h5 className="tech-label">Technologies:</h5>
                <ul className="tech-list">
                  {project.technologies.map((tech) => {
                    return <li>{tech}</li>
                  })}
                </ul>
                <a
                  href={project.github}
                  target="blank"
                  className="project-link"
                >
                  <i class="devicon-github-original">Source</i>
                </a>
                <a
                  href={project.website}
                  target="blank"
                  className="project-link"
                >
                  <i class="mdi-av-web small">Website</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
