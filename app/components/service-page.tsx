import Link from "next/link";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  audience: string;
  problems: string[];
  deliverables: { title: string; copy: string }[];
  examples: string[];
  faqs: { question: string; answer: string }[];
  subject: string;
};

export default function ServicePage({ eyebrow, title, intro, audience, problems, deliverables, examples, faqs, subject }: ServicePageProps) {
  return (
    <main className="service-page">
      <header className="case-header">
        <Link className="brand" href="/" aria-label="Two Hounds Run home"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link>
        <Link className="case-back" href="/#services">← All services</Link>
      </header>

      <section className="service-hero">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <a className="button" href={`mailto:collindk94@gmail.com?subject=${encodeURIComponent(subject)}`}>Tell me about your project <span aria-hidden="true">↗</span></a>
        <small>No technical brief required. Start with what is not working.</small>
      </section>

      <section className="service-fit">
        <div><p className="kicker">Who it is for</p><h2>{audience}</h2></div>
        <div><p className="kicker">Problems we can solve</p><ul>{problems.map((problem) => <li key={problem}>{problem}</li>)}</ul></div>
      </section>

      <section className="service-deliverables">
        <div className="product-section-heading"><p className="kicker">What we can build</p><h2>A right-sized solution with a clear job to do.</h2></div>
        <div className="deliverable-grid">{deliverables.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="service-examples">
        <div><p className="kicker">A useful first conversation</p><h2>You can bring the messy version.</h2><p>Examples of perfectly good starting points:</p></div>
        <ul>{examples.map((example) => <li key={example}>“{example}”</li>)}</ul>
      </section>

      <section className="service-process">
        <div><p className="kicker">How it works</p><h2>Straightforward from idea to launch.</h2></div>
        <ol><li><span>01</span><strong>Understand</strong><p>We identify the real problem, audience, and useful outcome.</p></li><li><span>02</span><strong>Scope</strong><p>You get a focused plan without unnecessary features.</p></li><li><span>03</span><strong>Build</strong><p>You see working progress and help shape the result.</p></li><li><span>04</span><strong>Launch</strong><p>We put it to work and make the handoff clear.</p></li></ol>
      </section>

      <section className="service-faq">
        <div><p className="kicker">Frequently asked</p><h2>What to know before we start.</h2></div>
        <div>{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="product-access">
        <p className="kicker">Start a conversation</p><h2>Tell me what is not working.</h2><p>No technical plan required. We will figure out whether there is a practical, right-sized way to solve it.</p><a className="button button-light" href={`mailto:collindk94@gmail.com?subject=${encodeURIComponent(subject)}`}>Tell me about your project <span aria-hidden="true">↗</span></a>
      </section>

      <footer><Link className="brand brand-footer" href="/"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link><p>Practical tools. Built for the long run.</p><div><Link href="/#services">Services</Link><Link href="/#work">Work</Link><Link href="/#contact">Contact</Link></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
