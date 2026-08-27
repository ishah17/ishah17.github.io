import { articles, capabilities, projects } from "./site-content";
import { ArticleList } from "./ArticleList";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Ishan Shah, home">
          IS<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#thinking">Thinking</a>
          <a href="#about">About</a>
        </div>
            <span className="availability"><i /> Open to product + systems roles</span>
      </nav>

      <section className="hero" id="top">
        <div className="flight-motifs" aria-hidden="true"><span className="flight-motif motif-one">✈</span><span className="flight-motif motif-two">✈</span><span className="flight-motif motif-three">✈</span><span className="flight-motif motif-four">✈</span><span className="flight-motif motif-five">✈</span></div>
        <div className="eyebrow"><span>Product · Operations · Aviation</span><span>Based in California</span></div>
        <h1>I make complex work <em>clear, useful, and ready.</em></h1>
        <div className="role-strip" aria-label="Roles I am open to"><span>Product Manager</span><span>Business Systems Analyst</span><span>AI Analyst</span></div>
        <div className="hero-bottom">
          <p className="hero-copy">
            I’m Ishan Shah, a product and systems professional who brings an aviation-trained eye for preparation and clear handoffs to complex work: understand the real problem, make the decision visible, and help teams deliver changes people can trust.
          </p>
          <a className="text-link" href="#work">Explore selected work <Arrow /></a>
        </div>
        <figure className="hero-visual">
          <img src="/process-map.png" alt="Product workflow moving from discover to define, deliver, and measure" />
        </figure>
        <div className="signal-panel" aria-label="Selected experience signals">
          <div><strong>6+</strong><span>years turning regulated operations into systems delivery</span></div>
          <div><strong>18+</strong><span>months leading business analysis for a CIO-sponsored nationwide platform replacement</span></div>
          <div><strong>$250K+</strong><span>annual technology savings contributed through platform transformation</span></div>
          <div><strong>P&amp;C</strong><span>workers’ comp &amp; premium-audit domain depth</span></div>
        </div>
      </section>

      <section className="closing" id="about">
        <p className="kicker">01 / About</p>
        <div className="closing-grid">
          <h2>Aviation mindset.<br />Product judgment.<br /><em>Delivery discipline.</em></h2>
          <div>
            <div className="about-intro">
              <img className="headshot" src="/headshot.png" alt="Ishan Shah" />
              <p className="headshot-caption">Ishan Shah · product + systems</p>
            </div>
            <p>I work at the boundary between people, operations, and technology: asking the questions that uncover the real problem, mapping how decisions and data move, and helping teams deliver changes that hold up in production.</p>
            <p>My aviation background taught me to prepare carefully, verify assumptions, and stay calm when the plan meets reality. I bring that same practical judgment to Product Manager, Business Systems Analyst, and AI Analyst opportunities across industries.</p>
            <div className="privacy-note"><span aria-hidden="true">◉</span><p><strong>Privacy by design</strong>This site intentionally publishes no email address, résumé download, or social profile. Recruiters already in contact with me can use our existing channel.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="kicker">02 / Selected work</p>
          <h2>From ambiguity<br />to shipped outcomes.</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-main">
                <div className="project-meta"><span>{project.type}</span><span>{project.scope}</span></div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-outcome">
                <small>{project.outcomeLabel}</small>
                <strong>{project.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach">
        <div className="section-heading">
          <p className="kicker">03 / What I bring</p>
          <h2>Clear thinking,<br />careful execution.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <div className="capability" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="thinking">
        <div className="section-heading split">
          <div><p className="kicker">04 / Field notes</p><h2>How I think<br />about the work.</h2></div>
          <p className="section-intro">Short essays on insurance operations, trustworthy technology, and professional life online.</p>
        </div>
        <ArticleList articles={articles} />
      </section>

      <footer><span>Ishan Shah © 2026</span><span>Product + Systems Portfolio</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
