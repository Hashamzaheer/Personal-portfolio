import { useState } from 'react'

const NAV = ['Projects', 'About', 'Skills', 'Contact']

const PROJECTS = [
  {
    name: 'Taskly',
    type: 'To-do app',
    art: 'tasks',
    text: 'A task manager where you can add, delete and filter tasks. Your list is saved in the browser with localStorage.',
    stack: 'HTML, CSS, JavaScript',
    link: '#', // add your GitHub or live URL
  },
  {
    name: 'Skye',
    type: 'Weather app',
    art: 'weather',
    text: 'A live weather app built on the OpenWeatherMap API, with dynamic UI themes.',
    stack: 'HTML, CSS, JavaScript, API',
    link: '#', // add your GitHub or live URL
  },
  {
    name: 'Personal Portfolio',
    type: 'Website',
    art: 'site',
    text: 'A fully responsive portfolio built to showcase my work and skills.',
    stack: 'HTML, CSS',
    link: '#', // add your GitHub or live URL
  },
]

const EDUCATION = [
  ['Matric', '2020 to 2022'],
  ['I.C.S (Physics)', '2022 to 2024'],
  ['BanoQabil, frontend course', '2025, 4 months'],
]

const SKILLS = [
  ['Core', ['HTML5', 'CSS', 'JavaScript ES6'], 'core'],
  ['Growing into', ['ReactJS'], 'grow'],
  ['Tools', ['Tailwind', 'Bootstrap', 'jQuery'], 'tool'],
]

// Little interface drawings, made with plain divs, so each project has a picture
const ART = {
  tasks: (
    <div className="mini">
      {[['on', 62], ['', 78], ['', 54]].map(([state, w], i) => (
        <div className={`mini-row ${state}`} key={i}>
          <i />
          <b style={{ width: `${w}%` }} />
        </div>
      ))}
      <div className="mini-add" />
    </div>
  ),
  weather: (
    <div className="sky-art">
      <span className="sun" />
      <span className="cloud" />
      <span className="cloud c2" />
    </div>
  ),
  site: (
    <div className="mini win">
      <div className="dots"><i /><i /><i /></div>
      <div className="hero-bar" />
      <div className="tiles"><i /><i /><i /></div>
    </div>
  ),
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-5">
      <div className="container py-lg-4">
        <h2 className="h-sec">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top topbar" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand brand" href="#top">HashZee</a>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {NAV.map((n) => (
                <li className="nav-item" key={n}>
                  <a className="nav-link" href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <span className="sun-rise" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="row">
            <div className="col-lg-8">
              <h1>Hasham Zaheer</h1>
              <p className="role">Frontend developer</p>
              <p className="hero-lead">
                Self-taught frontend developer who found a love for building web interfaces at bootcamp.
                I work in HTML, CSS and JavaScript, and I'm growing into React.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-sun btn-lg" href="#projects">See my projects</a>
                <a className="btn btn-outline-light btn-lg" href="mailto:hashzee40@gmail.com">Email me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section id="projects" title="Projects">
        <div className="row g-4">
          {PROJECTS.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.name}>
              <article className="proj">
                <div className={`art art-${p.art}`} aria-hidden="true">{ART[p.art]}</div>
                <div className="proj-body">
                  <h3>{p.name}</h3>
                  <p className="proj-type">{p.type}</p>
                  <p>{p.text}</p>
                  <p className="proj-stack">{p.stack}</p>
                  <a href={p.link} target="_blank" rel="noreferrer">View project</a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="row g-5">
          <div className="col-lg-6">
            <p className="statement">I bring curiosity, consistency, and a strong drive to improve.</p>
            <p className="muted about-copy">
              I'm comfortable with the core frontend technologies and actively growing into React and
              component-based architecture. I'm excited to learn alongside an experienced team in a
              professional setting.
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <ol className="timeline">
              {EDUCATION.map(([what, when]) => (
                <li key={what}>
                  <strong>{what}</strong>
                  <span className="muted">{when}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills and tools">
        {SKILLS.map(([group, items, tone]) => (
          <div className="row g-3 align-items-center skill-row" key={group}>
            <div className="col-md-3"><h3>{group}</h3></div>
            <div className="col-md-9 d-flex flex-wrap gap-2">
              {items.map((i) => <span className={`pill pill-${tone}`} key={i}>{i}</span>)}
            </div>
          </div>
        ))}
      </Section>

      <section id="contact" className="contact">
        <div className="container py-5">
          <h2 className="contact-title">Want to work together?</h2>
          <p className="contact-lead">If you're hiring or have a project in mind, write to me.</p>
          <a className="btn btn-sun btn-lg" href="mailto:hashzee40@gmail.com">hashzee40@gmail.com</a>
          <p className="contact-lines">
            <a href="tel:+923251441197">+92 325 1441197</a><br />
            Gujranwala, Pakistan
          </p>
          <p className="foot">© {new Date().getFullYear()} Hasham Zaheer. Built with React and Bootstrap.</p>
        </div>
      </section>
    </>
  )
}
