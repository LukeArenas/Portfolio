import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <div className="contact-content">
        <a href="mailto:lukedarenas@gmail.com" className="footer">
          <i class="mdi-communication-email small "></i>
        </a>
        <a
          href="https://github.com/LukeArenas"
          target="blank"
          className="footer-link"
        >
          <i class="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lukearenas/"
          target="blank"
          className="footer-link"
        >
          <i class="devicon-linkedin-plain"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact
