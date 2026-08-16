const services = [
  {
    number: "01",
    title: "Websites for small businesses",
    copy: "Clean, mobile-friendly sites for contractors, local services, organizations, and people who need a credible home online.",
    tags: ["Web design", "Mobile-first", "Launch support"],
  },
  {
    number: "02",
    title: "Sports & fantasy tools",
    copy: "League history sites, stat trackers, dashboards, data importers, and custom tools built around the way fans actually use them.",
    tags: ["Fantasy data", "Dashboards", "APIs"],
  },
  {
    number: "03",
    title: "Data & workflow solutions",
    copy: "Straightforward systems that organize information, remove repeat work, and make day-to-day operations easier to manage.",
    tags: ["Automation", "Spreadsheets", "Reporting"],
  },
];

const projects = [
  {
    label: "Fantasy sports platform",
    title: "1048 Gate League Hub",
    copy: "A custom digital home for a 12-team fantasy football league, transforming nine seasons of ESPN data into historical standings, weekly matchups, all-time records, playoff history, member profiles, voting, and league-managed content.",
    visual: "gate.svg",
    url: "https://1048gate.github.io/",
  },
  {
    label: "Open-source tool",
    title: "ESPN History Toolkit",
    copy: "A reusable Python toolkit that turns years of ESPN fantasy data into clean, organized league history.",
    visual: "espn.svg",
    url: null,
  },
  {
    label: "Sports analytics",
    title: "Tennis Moneyline Tracker",
    copy: "A lightweight tracker for studying match results, tournament levels, American odds, and the patterns between them.",
    visual: "tennis.svg",
    url: null,
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Two Hounds Run home">
          <img
            className="brand-logo"
            src="/images/logo-white.png"
            alt="Two Hounds Run"
            width={1774}
            height={887}
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small" href="#contact">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital studio · Northeast PA</p>
          <h1 id="hero-title">
            Practical technology
            <em>built for the real world.</em>
          </h1>
          <p className="hero-intro">
            Useful websites, sports-data projects, and custom tools—built to solve an actual problem without making things more complicated.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">See the work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="hero-card" aria-label="What Two Hounds Run builds">
          <img
            className="hero-art"
            src="/images/mark.png"
            alt=""
            width={1024}
            height={1024}
          />
          <div className="hero-card-copy">
            <p>Practical tools. Built for the long run.</p>
            <span>Websites · Data · Sports · Automation</span>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Studio principles">
        <p>Clear thinking</p><span>◆</span>
        <p>Useful design</p><span>◆</span>
        <p>Real-world experience</p><span>◆</span>
        <p>Built for the long run</p>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="kicker">What we do</p>
          <h2>Good technology should make something easier.</h2>
          <p>That is the starting point for every project—whether it is a public-facing website or a tool working quietly behind the scenes.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul aria-label={`${service.title} capabilities`}>
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Ideas turned into useful things.</h2>
          </div>
          <p>Projects shaped by sports, operations, curiosity, and the belief that a rough idea is enough to get started.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual" aria-hidden="true">
                <img src={`/images/projects/${project.visual}`} alt="" />
              </div>
              <div className="project-copy">
                <p>{project.label}</p>
                <h3>{project.title}</h3>
                <span>{project.copy}</span>

{project.url && (
  <a
    className="project-link"
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    View live project <span aria-hidden="true">↗</span>
  </a>
)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-mark" aria-hidden="true">
          <img
            className="about-logo"
            src="/images/mark.png"
            alt=""
            width={1024}
            height={1024}
          />
          <span>Good ideas<br />have a nose<br />for the trail.</span>
        </div>
        <div className="about-copy">
          <p className="kicker">Why Two Hounds Run?</p>
          <h2>Curious by nature.<br />Persistent by design.</h2>
          <p>
            Named for two bluetick coonhounds, Two Hounds Run brings that same mix of curiosity and persistence to every build. The studio combines hands-on experience in logistics and operations with a love of sports, data, and making useful things.
          </p>
          <p>
            You do not need a technical plan before reaching out. A problem, a half-formed idea, or a process you know could work better is enough.
          </p>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="section-heading compact">
          <p className="kicker">The process</p>
          <h2 id="process-title">Straightforward from the start.</h2>
        </div>
        <ol>
          <li><span>01</span><strong>Tell us what you need</strong><p>Bring the idea, problem, or frustration.</p></li>
          <li><span>02</span><strong>Map the right solution</strong><p>We define what is useful and what is not.</p></li>
          <li><span>03</span><strong>Build and test it</strong><p>You see progress and help shape the result.</p></li>
          <li><span>04</span><strong>Put it to work</strong><p>Launch with something you can actually use.</p></li>
        </ol>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">Start a conversation</p>
        <h2>Have an idea—or just a problem that needs solving?</h2>
        <p>That is more than enough to start.</p>
        <a className="button button-light" href="mailto:collindk94@gmail.com?subject=Two%20Hounds%20Run%20project">
          Tell us about it <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-rings" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top">
          <img
            className="brand-logo"
            src="/images/logo-white.png"
            alt="Two Hounds Run"
            width={1774}
            height={887}
          />
        </a>
        <p>Websites, sports data, and useful digital tools.</p>
        <div><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a></div>
        <small>© {new Date().getFullYear()} Two Hounds Run</small>
      </footer>
    </main>
  );
}
