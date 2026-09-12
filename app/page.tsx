import Link from "next/link";
import SiteHeader from "./components/site-header";

const services = [
  { number: "01", title: "Websites that earn trust", copy: "A polished, mobile-friendly home for businesses, organizations, communities, and ideas that have outgrown an outdated web presence.", examples: ["Marketing sites", "Service pages", "Launch support"] },
  { number: "02", title: "Products, dashboards & sports tools", copy: "Purpose-built experiences for live information, league history, daily games, reporting, and questions generic software cannot answer.", examples: ["Web products", "Stat dashboards", "API integrations"] },
  { number: "03", title: "Workflow automation", copy: "Practical systems that replace repetitive spreadsheet work, connect scattered tools, and make day-to-day operations easier to run.", examples: ["Scheduled reports", "Data imports", "Content workflows"] },
  { number: "04", title: "Existing-site improvements", copy: "Focused help for a website or tool that is slow, confusing, unreliable, difficult to update, or simply no longer doing its job.", examples: ["Site refreshes", "Bug fixes", "Mobile cleanup"] },
];

const proof = [
  { value: "3", label: "live products" },
  { value: "9", label: "fantasy seasons organized" },
  { value: "283", label: "sports venues mapped" },
  { value: "15+", label: "PA teams followed" },
];

const featuredProjects = [
  {
    status: "Live", label: "Fantasy league platform", title: "1048 Gate",
    copy: "A permanent digital headquarters for a 12-team keeper league, combining the current season with nine years of history, records, trades, and league culture.",
    visual: "1048-gate.webp", visualAlt: "1048 Gate fantasy football league homepage",
    proof: "9 seasons · 12 managers · live league operations", caseStudyUrl: "/work/1048-gate", liveUrl: "https://1048gate.com/",
  },
  {
    status: "Launching", label: "Pennsylvania sports desk", title: "Keystone Beat",
    copy: "A focused Pennsylvania sports destination that brings live scores, schedules, odds, teams, standings, and an editorial workflow into one clean experience.",
    visual: "keystone-beat.webp", visualAlt: "Keystone Beat Pennsylvania sports scores homepage",
    proof: "Live scores · schedules · odds · publishing workflow", caseStudyUrl: "/work/keystone-beat", liveUrl: "https://keystonebeat.com/",
  },
  {
    status: "Live beta", label: "Daily sports geography game", title: "ArenaTap",
    copy: "An original daily game that challenges players to locate arenas and identify teams, with precision scoring, streaks, practice, groups, and shareable results.",
    visual: "arenatap.webp", visualAlt: "ArenaTap daily sports geography game homepage",
    proof: "283 venues · 7 categories · daily and practice play", caseStudyUrl: "/work/arenatap", liveUrl: "https://arenatap.vercel.app/",
  },
];

const additionalProjects = [
  { title: "ESPN Fantasy History Toolkit", copy: "A reusable Python toolkit that turns years of ESPN fantasy data into a structured league archive.", detail: "400K+ player-stat records", url: "https://github.com/CollinKrum/espn-fantasy-history-toolkit", action: "View on GitHub" },
  { title: "HoundFix PC Toolkit", copy: "A portable Windows utility for common repairs, diagnostics, cleanup, and recovery.", detail: "14 repair and diagnostic tools", url: "/products/houndfix", action: "View product" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent builder · Northeast PA</p>
          <h1 id="hero-title">Useful websites. <em>Original digital products.</em></h1>
          <p className="hero-intro">I design and build polished websites, sports platforms, and custom tools—from a rough idea through launch and the work that comes after.</p>
          <div className="hero-actions">
            <a className="button" href="#work">See featured work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-card" aria-label="What Two Hounds Run builds">
          <img className="hero-art" src="/images/mark.png" alt="" width={1024} height={1024} />
          <div className="hero-card-copy"><p>Practical tools. Built for the long run.</p><span>Websites · Products · Sports · Automation</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Project scale">
        {proof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="section work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <div><p className="kicker">Featured work</p><h2 id="work-title">Three ideas, built into real products.</h2></div>
          <p>Each began with a specific problem and grew into something people can visit, use, and keep building on.</p>
        </div>
        <p className="mobile-scroll-hint" aria-hidden="true">Swipe through projects <span>→</span></p>
        <div className="project-grid featured-project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual"><img src={`/images/projects/${project.visual}`} alt={project.visualAlt} /><span className="project-status">{project.status}</span></div>
              <div className="project-copy">
                <p>{project.label}</p><h3>{project.title}</h3><span>{project.copy}</span><strong className="project-proof">{project.proof}</strong>
                <div className="project-actions">
                  <Link className="project-link" href={project.caseStudyUrl}>Read case study <span aria-hidden="true">→</span></Link>
                  <a className="project-link project-link-secondary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="additional-work">
          <div className="additional-work-heading"><p className="kicker">More shipped work</p><h3>Smaller tools, same practical approach.</h3></div>
          <div className="additional-work-list">
            {additionalProjects.map((project) => (
              <article key={project.title}>
                <div><h4>{project.title}</h4><p>{project.copy}</p></div><strong>{project.detail}</strong>
                {project.url.startsWith("/") ? <Link href={project.url}>{project.action} <span aria-hidden="true">→</span></Link> : <a href={project.url} target="_blank" rel="noopener noreferrer">{project.action} <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-paths" id="services" aria-labelledby="audience-title">
        <div className="audience-heading">
          <div><p className="kicker">Ways I can help</p><h2 id="audience-title">Bring the problem. We&apos;ll shape the right build.</h2></div>
          <p>You do not need a technical plan. A rough idea, an outdated website, scattered data, or a repetitive process is enough to start.</p>
        </div>
        <div className="audience-grid">
          <article className="audience-card audience-business"><span>For businesses & organizations</span><h3>Build a stronger web presence or a smoother operation.</h3><p>For local services, organizations, and teams that need a credible website or less repetitive work.</p><div><Link href="/websites">Business websites <b aria-hidden="true">→</b></Link><Link href="/automation">Workflow automation <b aria-hidden="true">→</b></Link></div></article>
          <article className="audience-card audience-data"><span>For products, sports & data</span><h3>Turn a complicated idea into something people can use.</h3><p>For leagues, communities, and creators that need a custom product, dashboard, archive, or data experience.</p><div><Link href="/data-tools">Products & dashboards <b aria-hidden="true">→</b></Link><a href="#contact">Discuss an idea <b aria-hidden="true">→</b></a></div></article>
        </div>
      </section>

      <section className="section services" id="service-details">
        <div className="section-heading"><p className="kicker">What you can hire me for</p><h2>Good technology should make something easier.</h2><p>I focus on the useful outcome: a clearer website, a working product, organized information, or time returned to your day.</p></div>
        <div className="service-list">
          {services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.copy}</p><ul aria-label={`${service.title} examples`}>{service.examples.map((item) => <li key={item}>{item}</li>)}</ul></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-mark" aria-hidden="true"><img className="about-logo" src="/images/mark.png" alt="" width={1024} height={1024} /><span>Good ideas<br />have a nose<br />for the trail.</span></div>
        <div className="about-copy">
          <p className="kicker">About the builder</p><h2>I&apos;m Collin.<br />Two Hounds Run is my independent studio.</h2>
          <p>I combine hands-on experience in logistics and operations with a love of sports, data, and making useful things. That practical background shapes how I build: understand the real problem, keep the solution focused, and make sure it works outside the demo.</p>
          <p>The name comes from two bluetick coonhounds and the same traits I bring to the work—curiosity, persistence, and a willingness to keep following the trail until the problem makes sense.</p>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="section-heading compact"><p className="kicker">The process</p><h2 id="process-title">Straightforward from the start.</h2></div>
        <ol><li><span>01</span><strong>Tell me what you need</strong><p>Bring the idea, problem, or frustration.</p></li><li><span>02</span><strong>Map the right solution</strong><p>I define what is useful and what is not.</p></li><li><span>03</span><strong>Build and test it</strong><p>You see progress and help shape the result.</p></li><li><span>04</span><strong>Put it to work</strong><p>Launch with something you can actually use.</p></li></ol>
      </section>

      <section className="contact" id="contact">
        <p className="availability"><span /> Available for select projects</p>
        <p className="kicker">Start a conversation</p><h2>Have an idea—or just a problem that needs solving?</h2><p>No technical brief required. Tell me what is not working, what you want to build, or what keeps taking too much time.</p>
        <a className="button button-light" href="mailto:collindk94@gmail.com?subject=Two%20Hounds%20Run%20project">Tell me about your project <span aria-hidden="true">↗</span></a>
        <div className="contact-rings" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <footer><a className="brand brand-footer" href="#top"><img className="brand-lockup" src="/images/two-hounds-lockup.png" alt="Two Hounds Run" width={1774} height={887} /></a><p>Websites, digital products, and useful custom tools.</p><div><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="https://github.com/twohoundsrun" target="_blank" rel="noopener noreferrer">GitHub</a></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
