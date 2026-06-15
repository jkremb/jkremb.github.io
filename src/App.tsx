import './App.css';

function App() {
  const NAV_HEIGHT = 64; // px – adjust if you change topbar height

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteElementTop = rect.top + window.pageYOffset;
    const y = absoluteElementTop - NAV_HEIGHT - 16; // 16px extra spacing

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <div className="logo-circle">JK</div>
            <span className="topbar-name">Julian D. Kremb · Frontend Engineer</span>
          </div>
          <nav className="topbar-nav">
            <button onClick={() => handleScrollTo('about')}>About</button>
            <button onClick={() => handleScrollTo('skills')}>Skills</button>
            <button onClick={() => handleScrollTo('experience')}>Experience</button>
            <button onClick={() => handleScrollTo('education')}>Education</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="about" className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Full-Stack Engineer · React · Angular · TypeScript · Node.js</p>
            <h1 className="hero-title">
              Building user‑focused web experiences
            </h1>
            <p className="hero-subtitle">
              Full-stack engineer with <strong>6+ years</strong> of proven experience building scalable web products in React, Angular, TypeScript and Node.js across cross-functional teams, shipping production features to millions of users.
            </p>
            <p className="hero-subtitle">
              Experienced across the stack with automotive enterprise clients including <strong>Volkswagen</strong> and <strong>Audi</strong>.
            </p>
            <div className="hero-actions">
              <a
                href="#experience"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('experience');
                }}
              >
                View experience
              </a>
              <a
                href="https://www.linkedin.com/in/julian-kremb-92a787a4/"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-avatar" aria-hidden="true">
              {/* If you have a headshot, import and place it here:
                  <img src={avatar} alt="Portrait of Julian Kremb" />
              */}
            </div>
            <div className="hero-card-body">
              <h2>Currently</h2>
              <p>
                Frontend Software Engineer at IAV GmbH, building automotive webapps
                and flagship wellness applications for Volkswagen and Audi.
              </p>
              <div className="hero-tags">
                <span>Angular | React | TypeScript | Node.js | RxJS | NgRx</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-alt">
          <div className="section-header">
            <h2>Skills</h2>
            <p>
              A full front‑of‑stack skill set for modern web applications, from UI
              to deployment pipelines.
            </p>
          </div>
          <div className="cards-grid">
            <article className="card">
              <h3>Languages &amp; Frameworks</h3>
              <ul>
                <li>Angular, React, TypeScript</li>
                <li>HTML, CSS, Ant Design</li>
                <li>Jest, Cypress</li>
                <li>REST APIs, RPC</li>
                <li>Node.js, RxJS, NgRx</li>
              </ul>
            </article>

            <article className="card">
              <h3>Tools &amp; Platforms</h3>
              <ul>
                <li>Git, GitLab, Jira</li>
                <li>Docker, Kubernetes</li>
                <li>Copilot, Codex, Figma</li>
              </ul>
            </article>

            <article className="card">
              <h3>Ways of working</h3>
              <ul>
                <li>Agile &amp; Kanban teams with designers and POs</li>
                <li>Clean code, testing and CI/CD mindset</li>
                <li>Workshops, internal talks &amp; mentoring</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>
              Delivering production‑ready software for automotive and academic
              environments, plus startup experience as a founder.
            </p>
          </div>

          <div className="timeline">
            {/* Frontend Software Engineer */}
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <header className="timeline-header">
                  <div>
                    <h3>Frontend Software Engineer</h3>
                    <p className="company">
                      Ingenieurgesellschaft Auto und Verkehr (IAV)
                    </p>
                  </div>
                  <div className="meta">
                    <span>2022 – present</span>
                  </div>
                </header>
                <ul>
                  <li>
                    Primary developer on the <strong>Wellness In‑Car App</strong> for{' '}
                    <strong>Volkswagen</strong>, a flagship wellness application shipped with the ID. electric
                    vehicle family, built in Angular, TypeScript for frontend, and Node.js and RPC for the backend API (Backend-for-frontend).
                  </li>
                  <li>
                    Took full ownership of the <strong>Audi STO MIB3 webapp</strong> (Angular, TypeScript), responsible for maintenance, feature development and deployment.
                  </li>
                  <li>
                    Inherited the <strong>EcoForecast</strong> webapp following the original developer&apos;s departure, stabilising and refactoring a critically defective codebase over 2 months to resolve outstanding client concerns and bring the project to a successful close.
                  </li>
                  <li>
                    Brought in as frontend consultant on <strong>VoiceMind</strong>, an internal AI in‑car assistant POC. Refactored the entire frontend from a single unstructured JS file into a modern React application, establishing proper component architecture and development standards for the team.
                  </li>
                  <li>
                    Developed new features and maintained the <strong>EcoCharge</strong> webapp (Angular, TypeScript) for Volkswagen, a charging management tool for EV fleets.
                  </li>
                  <li>
                    Part of the team that developed <strong>TicketPilot</strong>, an internal AI‑powered ticketing application, using React.
                  </li>
                  <li>
                    Built the frontend of a fullstack system within one week during an internal hackathon using Vue.js, as part of a client acquisition effort.
                  </li>
                  <li>
                    Led development of a company‑wide <strong>GitLab CI/CD</strong>{' '}
                    solution for the expanding portfolio of web applications and conducted a workshop on CI/CD best practices for a team of over <strong>20 developers</strong>.
                  </li>
                </ul>
              </div>
            </article>

            {/* Working Student */}
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <header className="timeline-header">
                  <div>
                    <h3>Mobile and Webapps Engineering Working Student</h3>
                    <p className="company">
                      Ingenieurgesellschaft Auto und Verkehr (IAV)
                    </p>
                  </div>
                  <div className="meta">
                    <span>2019 – 2022</span>
                  </div>
                </header>
                <ul>
                  <li>
                    Wrote and maintained Python scripts to query and manage data in the VW Group&apos;s central user database, executed via automated Jenkins CI pipelines.
                  </li>
                  <li>
                    Responsible for unit and end‑to‑end testing across a suite of VW webapps, using Jest and Cypress in an Angular and Typescript stack.
                  </li>
                  <li>
                    Spearheaded development of a comprehensive Gitlab CI/CD solution for the company&apos;s expanding portfolio of web applications and conducted a workshop on CI/CD best practices for a team of over 20 developers, providing keynotes, hands‑on coding assignments, and in‑depth training.
                  </li>
                </ul>
              </div>
            </article>

            {/* IT Administrator */}
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <header className="timeline-header">
                  <div>
                    <h3>IT Administrator</h3>
                    <p className="company">
                      Humboldt Universität – Center for British Studies
                    </p>
                  </div>
                  <div className="meta">
                    <span>2019</span>
                  </div>
                </header>
                <ul>
                  <li>
                    Provided on‑site technical support to quickly resolve IT
                    issues.
                  </li>
                  <li>
                    Maintained and updated the institute&apos;s website using a
                    local CMS.
                  </li>
                  <li>
                    Coordinated with central IT administration to align with
                    institutional standards.
                  </li>
                </ul>
              </div>
            </article>

            {/* Paiir UG */}
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <header className="timeline-header">
                  <div>
                    <h3>Co‑Founder, Lead Developer &amp; Designer</h3>
                    <p className="company">
                      Paiir UG – Interactive Photo‑Sharing App
                    </p>
                  </div>
                  <div className="meta">
                    <span>2014 – 2016</span>
                  </div>
                </header>
                <ul>
                  <li>
                    Led iOS development in Objective‑C and product design using
                    Sketch.
                  </li>
                  <li>
                    Reached <strong>Top 10 “Best New Apps”</strong> in 110+ countries
                    and <strong>Top 100 “Photo &amp; Video”</strong> in 55 countries on
                    the iOS App Store.
                  </li>
                  <li>
                    Featured on <strong>VentureBeat</strong> (
                    <a
                      href="https://bit.ly/434s8c8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      bit.ly/434s8c8
                    </a>
                    ).
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section section-alt">
          <div className="section-header">
            <h2>Education &amp; Languages</h2>
          </div>
          <div className="cards-grid">
            <article className="card">
              <h3>Education</h3>
              <p className="edu-title">
                B.Sc. Business Informatics (Wirtschaftsinformatik)
              </p>
              <p>Technische Universität Berlin · 2022</p>
            </article>
            <article className="card">
              <h3>Languages</h3>
              <ul>
                <li>German – Business proficient</li>
                <li>English – Business proficient</li>
                <li>Mandarin – Mother tongue/Conversational fluency</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Julian D. Kremb</p>
        <p>Built with React, TypeScript &amp; Vite.</p>
      </footer>
    </div>
  );
}

export default App;