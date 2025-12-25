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
            <p className="hero-kicker">Frontend Engineer · React · Angular · TypeScript</p>
            <h1 className="hero-title">
              Building user‑focused web experiences
            </h1>
            <p className="hero-subtitle">
              Frontend engineer with <strong>6+ years</strong> of proven experience delivering scalable applications for leading German automotive clients like <strong>Volkswagen</strong>, Audi and
              other enterprise clients.
            </p>
            <p className="hero-subtitle">
              Primarily looking for roles in <strong>Angular</strong> or <strong> React </strong>/ <strong> TypeScript frontend</strong>{' '}.
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
                Frontend Software Engineer at IAV GmbH, working on automotive webapps
                and systems.
              </p>
              <div className="hero-tags">
                <span>Angular | React | TypeScript | Node.js</span>
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
                    Developed the “Wellness In‑Car App” from scratch for{' '}
                    <strong>Volkswagen</strong> using Angular, TypeScript and Node.js,
                    launched as a flagship app for the VW ID. electric
                    vehicle family.
                  </li>
                  <li>
                    Built an in‑house proof‑of‑concept web app for{' '}
                    <strong>AI‑assisted agile management</strong> using React and
                    TypeScript.
                  </li>
                  <li>
                    Delivered the frontend component of an automotive devices
                    database during a{' '}
                    <strong>project‑acquisition hackathon</strong> using Vue.js,
                    Tailwind and TypeScript.
                  </li>
                  <li>
                    Collaborating in Kanban teams with designers and product owners
                    to deliver on time with clean coding practices.
                  </li>
                  <li>
                    Led development of a company‑wide <strong>GitLab CI/CD</strong>{' '}
                    solution, cutting project bootstrapping time by{' '}
                    <strong>several days</strong> for more than{' '}
                    <strong>10+</strong> webapps and running a CI/CD workshop for{' '}
                    <strong>20+ developers</strong>.
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
                    <h3>Working Student – Frontend Development</h3>
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
                    Developed Python scripts to automate{' '}
                    <strong>Jenkins</strong> jobs for a multi‑corporation data
                    platform; maintained databases and assisted clients through
                    technical support.
                  </li>
                  <li>
                    Frontend developer for an automotive webapp in a
                    Kanban‑structured team, using Angular, TypeScript and Node.js.
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
                <li>Mandarin – Conversational</li>
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