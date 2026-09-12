import Link from "next/link";

type ProjectCaseStudyProps = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  liveUrl: string;
  liveLabel: string;
  image: string;
  imageAlt: string;
  stats: Array<[string, string]>;
  challengeTitle: string;
  challengeCopy: string;
  buildTitle: string;
  buildCopy: string;
  features: string[];
  systemTitle: string;
  systemCopy: string;
  technology: string[];
  resultTitle: string;
  resultCopy: string;
};

export default function ProjectCaseStudy(props: ProjectCaseStudyProps) {
  return (
    <main className="case-study">
      <header className="case-header">
        <Link className="brand" href="/" aria-label="Two Hounds Run home"><img className="brand-mark" src="/images/two-hounds-mark.png" alt="Two Hounds Run" width={512} height={512} /></Link>
        <Link className="case-back" href="/#work">← Back to featured work</Link>
      </header>

      <section className="case-hero">
        <div>
          <p className="eyebrow"><span /> {props.eyebrow}</p>
          <h1>{props.title}<br /><em>{props.titleAccent}</em></h1>
          <p>{props.intro}</p>
          <div className="case-actions"><a className="button" href={props.liveUrl} target="_blank" rel="noopener noreferrer">{props.liveLabel} <span aria-hidden="true">↗</span></a><a className="text-link" href="#story">Read the story <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="case-visual case-screenshot"><img src={props.image} alt={props.imageAlt} /></div>
      </section>

      <section className="case-stats" aria-label="Project highlights">{props.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="case-story" id="story">
        <div className="case-label"><p className="kicker">The challenge</p><span>01</span></div>
        <div><h2>{props.challengeTitle}</h2><p>{props.challengeCopy}</p></div>
      </section>

      <section className="case-story case-story-alt">
        <div className="case-label"><p className="kicker">The build</p><span>02</span></div>
        <div><h2>{props.buildTitle}</h2><p>{props.buildCopy}</p><ul className="case-features">{props.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
      </section>

      <section className="case-story">
        <div className="case-label"><p className="kicker">Under the hood</p><span>03</span></div>
        <div><h2>{props.systemTitle}</h2><p>{props.systemCopy}</p><div className="tech-list">{props.technology.map((item) => <span key={item}>{item}</span>)}</div></div>
      </section>

      <section className="case-result"><p className="kicker">The result</p><h2>{props.resultTitle}</h2><p>{props.resultCopy}</p><a className="button button-light" href={props.liveUrl} target="_blank" rel="noopener noreferrer">{props.liveLabel} <span aria-hidden="true">↗</span></a></section>

      <footer><Link className="brand brand-footer" href="/"><img className="brand-lockup" src="/images/two-hounds-lockup.png" alt="Two Hounds Run" width={1774} height={887} /></Link><p>Websites, digital products, and useful custom tools.</p><div><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/#contact">Contact</Link></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
