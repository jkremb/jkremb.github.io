import './App.css';

function App() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-left">
          <div className="logo-circle">JK</div>
          <span className="topbar-name">Julian D. Kremb</span>
        </div>
        <nav className="topbar-nav">
          <button onClick={() => handleScrollTo('about')}>About</button>
          <button onClick={() => handleScrollTo('skills')}>Skills</button>
          <button onClick={() => handleScrollTo('experience')}>Experience</button>
          <button onClick={() => handleScrollTo('education')}>Education</button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="about" className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Frontend Engineer · Berlin, Germany</p>
            <h1 className="hero-title">
              Building user‑focused web experiences
            </h1>
            <p className="hero-subtitle">
              Software engineer specializing in Angular and React with TypeScript.
              Over 6 years of experience delivering scalable applications for
              leading German automotive clients like Volkswagen and Audi.
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
              {/* Replace gradient circle with an image if you have one:
                 <img src={avatar} alt="Portrait of Julian Kremb" />
              */}
            </div>
            <div className="hero-card-body">
              <h2>Currently</h2>
              <p>
                Frontend Software Engineer at IAV, working on in‑car experiences
                and internal AI‑assisted management tooling.
              </p>
              <div className="hero-tags">
                <span>Angular</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-alt">
          <div className="section-header">
            <h2>Skills</h2>
            <p>
              A full front‑of‑stack skill set for modern web applications, from
              UI to deployment pipelines.
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
                <li>Node.js (background apps)</li>
              </ul>
            </article>

            <article className="card">
              <h3>Tools &amp; Platforms</h3>
              <ul>
                <li>Git, GitLab, Jira</li>
                <li>Docker, Kubernetes</li>
                <li>Copilot, Figma</li>
              </ul>
            </article>

            <article className="card">
              <h3>Ways of working</h3>
              <ul>
                <li>Agile &amp; Kanban teams</li>
                <li>Clean code &amp; testing mindset</li>
                <li>Workshops &amp; knowledge sharing</li>
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
                    <span>2019 – present</span>
                    <span>Berlin, Germany</span>
                  </div>
                </header>
                <p className="role-note">
                  Working student (2019–2022), Frontend Software Engineer
                  (2022–present)
                </p>
                <ul>
                  <li>
                    Developed the “Wellness In‑Car App” from scratch for
                    Volkswagen using Angular, TypeScript and Node.js, launched
                    as a flagship app for VW’s ID. electric vehicle family.
                  </li>
                  <li>
                    Building an in‑house proof‑of‑concept web app for AI‑assisted
                    agile management using React and TypeScript.
                  </li>
                  <li>
                    Collaborating in Kanban teams with designers and product
                    owners to deliver on time with clean coding practices.
                  </li>
                  <li>
                    Led development of a GitLab CI/CD solution that reduced
                    project bootstrapping time by several days for more than 10
                    future webapps and ran a CI/CD workshop for 20+ developers.
                  </li>
                </ul>
              </div>
            </article>

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
                    <span>Berlin, Germany</span>
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

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <header className="timeline-header">
                  <div>
                    <h3>Co‑Founder, Lead Developer &amp; Designer</h3>
                    <p className="company">Paiir UG – Interactive Photo‑Sharing App</p>
                  </div>
                  <div className="meta">
                    <span>2014 – 2016</span>
                    <span>Berlin, Germany</span>
                  </div>
                </header>
                <ul>
                  <li>
                    Led iOS development in Objective‑C and product design using
                    Sketch.
                  </li>
                  <li>
                    Reached Top 10 “Best New Apps” in 110+ countries and Top 100
                    “Photo &amp; Video” in 55 countries on the iOS App Store.
                  </li>
                  <li>
                    Featured on VentureBeat (
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
                <li>Mandarin – Conversational</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Julian D. Kremb</p>
        <p>
          Built with React, TypeScript &amp; Vite.
        </p>
      </footer>
    </div>
  );
}

export default App;