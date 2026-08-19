import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HoundFix PC Toolkit | Two Hounds Run",
  description: "A portable Windows repair and diagnostics toolkit from Two Hounds Run.",
};

const quickFixes = [
  ["Internet repair", "Reset the network stack, flush DNS, and renew the computer's IP configuration."],
  ["Printing repair", "Restart the print spooler and clear jobs that are stuck in the print queue."],
  ["Browser cleanup", "Clear temporary data from Chrome, Edge, and Firefox."],
  ["Disk cleanup", "Remove temporary files, prefetch data, and recycle-bin contents."],
  ["Windows updates", "Check the computer for available Windows updates."],
];

const diagnostics = [
  "System and hardware report",
  "Network and DNS testing",
  "Windows event-log collection",
  "Windows Security audit",
  "Laptop battery-health report",
  "Driver-status check",
  "Crash and error analysis",
  "CPU, memory, disk, and startup analysis",
];

export default function HoundFixProduct() {
  return (
    <main className="product-page">
      <header className="case-header">
        <Link className="brand" href="/" aria-label="Two Hounds Run home"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link>
        <Link className="case-back" href="/#work">← Back to work</Link>
      </header>

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow"><span /> Two Hounds Run product · Windows v1.1</p>
          <h1>Meet <em>HoundFix.</em></h1>
          <p>Common PC problems, one straightforward toolkit. HoundFix brings Windows repairs, cleanup, diagnostics, and recovery tools together in a portable desktop app.</p>
          <div className="product-actions">
            <a className="button" href="mailto:collindk94@gmail.com?subject=HoundFix%20early%20access">Request early access <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#features">See what it fixes <span aria-hidden="true">↓</span></a>
          </div>
          <p className="product-note">Windows 10/11 · Portable application · Administrator access recommended</p>
        </div>
        <div className="product-art"><img src="/images/projects/houndfix.svg" alt="HoundFix PC Toolkit product artwork" /></div>
      </section>

      <section className="product-value">
        <p className="kicker">Built for the frustrating five minutes</p>
        <h2>Less searching. Less command-line guesswork. Faster answers.</h2>
        <p>HoundFix packages frequently used Windows troubleshooting steps into a clear interface for home users, small offices, power users, and help-desk technicians.</p>
      </section>

      <section className="product-features" id="features">
        <div className="product-section-heading"><p className="kicker">Quick fixes</p><h2>Handle the common problems first.</h2></div>
        <div className="fix-grid">
          {quickFixes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="product-diagnostics">
        <div><p className="kicker">Deeper diagnostics</p><h2>When the easy answer is not enough.</h2><p>Gather the information needed to understand performance, hardware, network, security, driver, and stability problems.</p></div>
        <ul>{diagnostics.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="product-safety">
        <div><p className="kicker">Designed with guardrails</p><h2>Know what changed—and keep a way back.</h2></div>
        <div className="safety-grid"><article><strong>Restore points</strong><p>Create a Windows restore point before making deeper system changes.</p></article><article><strong>Activity logs</strong><p>Keep timestamped records of toolkit operations for troubleshooting and review.</p></article><article><strong>Privilege awareness</strong><p>See when a repair requires administrator access instead of failing without explanation.</p></article></div>
      </section>

      <section className="product-access">
        <p className="kicker">Windows release · v1.1</p><h2>HoundFix is built. The public release is next.</h2><p>We are finishing the Two Hounds Run branding, support details, and download experience. Request early access to the current Windows edition.</p><a className="button button-light" href="mailto:collindk94@gmail.com?subject=HoundFix%20early%20access">Request HoundFix <span aria-hidden="true">↗</span></a><small>Use system tools carefully. Back up important files before repairs or cleanup.</small>
      </section>

      <footer><Link className="brand brand-footer" href="/"><img className="brand-logo" src="/images/logo-white.png" alt="Two Hounds Run" width={1774} height={887} /></Link><p>Practical tools. Built for the long run.</p><div><Link href="/#services">Services</Link><Link href="/#work">Work</Link><Link href="/#contact">Contact</Link></div><small>© {new Date().getFullYear()} Two Hounds Run</small></footer>
    </main>
  );
}
