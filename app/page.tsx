const services = [
  {
    number: "01",
    title: "Small-business websites",
    copy: "A credible, mobile-friendly home for contractors, local services, organizations, and independent businesses.",
    examples: ["Marketing sites", "Service pages", "Launch support"],
  },
  {
    number: "02",
    title: "Custom dashboards & sports tools",
    copy: "Focused tools for league history, performance tracking, reporting, and the questions a generic platform cannot answer.",
    examples: ["Fantasy sites", "Stat dashboards", "API integrations"],
  },
  {
    number: "03",
    title: "Workflow automation",
    copy: "Practical systems that replace repetitive spreadsheet work and make day-to-day operations easier to run.",
    examples: ["Spreadsheet workflows", "Scheduled reports", "Data imports"],
  },
  {
    number: "04",
    title: "Data cleanup & organization",
    copy: "Turn scattered exports, old records, and inconsistent files into useful, searchable information.",
    examples: ["Data cleanup", "Historical imports", "Reporting"],
  },
];

const proof = [
  { value: "9", label: "fantasy seasons organized" },
  { value: "4,785", label: "league transactions captured" },
  { value: "109,875", label: "tennis matches analyzed" },
  { value: "399K+", label: "player-stat records processed" },
];

const shippedProjects = [
  {
    label: "Fantasy sports platform",
    title: "1048 Gate League Hub",
    copy: "A living digital archive for a 12-team fantasy football league, built from nine seasons of ESPN history.",
    visual: "gate.svg",
    proof: "903 games · 4,785 transactions · 2017–2025",
    caseStudyUrl: "/work/1048-gate",
    liveUrl: "https://1048gate.github.io/",
  },
  {
    label: "Open-source data tool",
    title: "ESPN Fantasy History Toolkit",
    copy: "A reusable Python toolkit that collects years of ESPN fantasy data and turns it into a structured league archive.",
    visual: "espn.svg",
    proof: "400K+ player stats · drafts, scores, rosters & history",
    caseStudyUrl: null,
    liveUrl: "https://github.com/CollinKrum/espn-fantasy-history-toolkit",
  },
];

const labProjects = [
  {
    title: "Tennis Analytics Platform",
    copy: "Historical ATP and WTA research across tournament levels, odds, results, and market performance.",
    detail: "109,875 historical matches",
  },
  {
    title: "Live Odds Collection",
    copy: "A provider-independent pipeline for collecting snapshots, identifying closing prices, and measuring data quality.",
    detail: "Append-only, audit-ready data",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Two Hounds Run home">
          <img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="button button-small" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital studio · Northeast PA</p>
          <h1 id="hero-title">Practical technology<em>built for the real world.</em></h1>
          <p className="hero-intro">Useful websites, sports-data projects, and custom tools—built to solve an actual problem without making things more complicated.</p>
          <div className="hero-actions">
            <a className="button" href="#work">See the work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-card" aria-label="What Two Hounds Run builds">
          <img className="hero-art" src="/images/mark.png" alt="" width={1024} height={1024} />
          <div className="hero-card-copy"><p>Practical tools. Built for the long run.</p><span>Websites · Data · Sports · Automation</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Project scale">
        {proof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="kicker">What you can hire us for</p>
          <h2>Good technology should make something easier.</h2>
          <p>Bring a business need, a pile of data, or an idea that deserves to become useful. We will help shape the right-sized solution.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.copy}</p><ul aria-label={`${service.title} examples`}>{service.examples.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="work-heading">
          <div><p className="kicker">Built & shipped</p><h2>Real projects, already at work.</h2></div>
          <p>Finished work with live users, real data, and a clear job to do—not concept pieces or generic demos.</p>
        </div>
        <div className="project-grid">
          {shippedProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual" aria-hidden="true"><img src={`/images/projects/${project.visual}`} alt="" /></div>
              <div className="project-copy">
                <p>{project.label}</p><h3>{project.title}</h3><span>{project.copy}</span><strong className="project-proof">{project.proof}</strong>
                <div className="project-actions">
                  {project.caseStudyUrl && <a className="project-link" href={project.caseStudyUrl}>Read case study <span aria-hidden="true">→</span></a>}
                  <a className="project-link project-link-secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.caseStudyUrl ? "View live" : "View on GitHub"} <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="lab-heading"><div><p className="kicker">In the lab</p><h2>What we are building next.</h2></div><p>Active research and product work shown honestly as work in progress.</p></div>
        <div className="lab-grid">
          {labProjects.map((project, index) => <article className="lab-card" key={project.title}><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.copy}</p><strong>{project.detail}</strong></div><em>In development</em></article>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-mark" aria-hidden="true"><img className="about-logo" src="/images/mark.png" alt="" width={1024} height={1024} /><span>Good ideas<br />have a nose<br />for the trail.</span></div>
        <div className="about-copy">
          <p className="kicker">Why Two Hounds Run?</p><h2>Curious by nature.<br />Persistent by design.</h2>
          <p>Named for two bluetick coonhounds, Two Hounds Run brings that same mix of curiosity and persistence to every build. The studio combines hands-on experience in logistics and operations with a love of sports, data, and making useful things.</p>
          <p>You do not need a technical plan before reaching out. A problem, a half-formed idea, or a process you know could work better is enough.</p>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="section-heading compact"><p className="kicker">The process</p><h2 id="process-title">Straightforward from the start.</h2></div>
        <ol><li><span>01</span><strong>Tell us what you need</strong><p>Bring the idea, problem, or frustration.</p></li><li><span>02</span><strong>Map the right solution</strong><p>We define what is useful and what is not.</p></li><li><span>03</span><strong>Build and test it</strong><p>You see progress and help shape the result.</p></li><li><span>04</span><strong>Put it to work</strong><p>Launch with something you can actually use.</p></li></ol>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">Start a conversation</p><h2>Have an idea—or just a problem that needs solving?</h2><p>Tell us what is taking too much time, what feels disorganized, or what you want to build.</p>
        <a className="button button-light" href="mailto:collindk94@gmail.com?subject=Two%20Hounds%20Run%20project">Tell us about it <span aria-hidden="true">↗</span></a>
        <div className="contact-rings" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <footer><a className="brand brand-footer" href="#top"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></a><p>Websites, sports data, and useful digital tools.</p><div><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
