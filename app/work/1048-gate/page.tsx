import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1048 Gate Case Study | Two Hounds Run",
  description: "How Two Hounds Run turned nine seasons of ESPN fantasy football data into a living league archive.",
};

const stats = [
  ["9", "seasons"],
  ["903", "games"],
  ["4,785", "transactions"],
  ["399K+", "player-stat records"],
];

export default function GateCaseStudy() {
  return (
    <main className="case-study">
      <header className="case-header">
        <Link className="brand" href="/" aria-label="Two Hounds Run home"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link>
        <Link className="case-back" href="/#work">← Back to work</Link>
      </header>

      <section className="case-hero">
        <div><p className="eyebrow"><span /> Case study · Fantasy sports platform</p><h1>1048 Gate<br /><em>League Hub</em></h1><p>A nine-season fantasy football history turned into one organized, searchable home for the league.</p><div className="case-actions"><a className="button" href="https://1048gate.github.io/" target="_blank" rel="noopener noreferrer">View live project <span aria-hidden="true">↗</span></a><a className="text-link" href="#story">Read the story <span aria-hidden="true">↓</span></a></div></div>
        <div className="case-visual"><img src="/images/projects/gate.svg" alt="1048 Gate project data visualization" /></div>
      </section>

      <section className="case-stats" aria-label="Project scale">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="case-story" id="story">
        <div className="case-label"><p className="kicker">The challenge</p><span>01</span></div>
        <div><h2>Nine seasons of league history were trapped inside ESPN.</h2><p>Scores, standings, drafts, rosters, records, playoffs, and transactions existed, but they were spread across season-by-season screens and difficult to explore as one continuous story. The league needed more than a current-season scoreboard—it needed a permanent home.</p></div>
      </section>

      <section className="case-story case-story-alt">
        <div className="case-label"><p className="kicker">The build</p><span>02</span></div>
        <div><h2>One league hub, built around the way members actually use it.</h2><p>We collected and normalized ESPN data from 2017 through 2025, then designed a responsive site that makes both current activity and historical context easy to reach.</p><ul className="case-features"><li>Historical standings and weekly scoreboards</li><li>All-time records and manager profiles</li><li>Draft, roster, playoff, and championship history</li><li>Accepted trades, successful waivers, and adds/drops</li><li>League voting and commissioner-managed content</li><li>Mobile-friendly browsing for twelve members</li></ul></div>
      </section>

      <section className="case-story">
        <div className="case-label"><p className="kicker">Under the hood</p><span>03</span></div>
        <div><h2>A repeatable data system—not a one-time scrapbook.</h2><p>The project combines ESPN data collection, structured storage, validation, and a purpose-built web interface. The same foundation can be refreshed as new seasons are played instead of rebuilding the history by hand.</p><div className="tech-list"><span>Python</span><span>ESPN APIs</span><span>Supabase</span><span>JavaScript</span><span>GitHub Pages</span><span>Responsive UI</span></div></div>
      </section>

      <section className="case-result"><p className="kicker">The result</p><h2>The league now owns its story.</h2><p>1048 Gate has a live, dedicated home that turns years of scattered fantasy data into something members can revisit, compare, and keep building on every season.</p><a className="button button-light" href="https://1048gate.github.io/" target="_blank" rel="noopener noreferrer">Explore 1048 Gate <span aria-hidden="true">↗</span></a></section>

      <footer><Link className="brand brand-footer" href="/"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link><p>Practical tools. Built for the long run.</p><div><Link href="/#services">Services</Link><Link href="/#work">Work</Link><Link href="/#contact">Contact</Link></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
