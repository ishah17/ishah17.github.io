import { articles, capabilities, projects } from "./site-content";
import { ArticleList } from "./ArticleList";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="flight-motifs" aria-hidden="true"><span className="flight-motif motif-one">✈</span><span className="flight-motif motif-two">✈</span><span className="flight-motif motif-three">✈</span><span className="flight-motif motif-four">✈</span><span className="flight-motif motif-five">✈</span><span className="flight-motif motif-six">✈</span><span className="flight-motif motif-seven">✈</span><span className="flight-motif motif-eight">✈</span><span className="flight-motif motif-nine">✈</span><span className="flight-motif motif-ten">✈</span><span className="flight-motif motif-eleven">✈</span><span className="flight-motif motif-twelve">✈</span><span className="flight-motif motif-thirteen">✈</span><span className="flight-motif motif-fourteen">✈</span><span className="flight-motif motif-fifteen">✈</span></div>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Ishan Shah, home">
          IS<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#thinking">Thinking</a>
          <a href="#about">About</a>
        </div>
            <span className="availability"><i /> Open to PM, Scrum & transformation roles</span>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Delivery · Technology · Aviation</span><span>Based in California</span></div>
        <h1>I turn complex problems <em>into working solutions.</em></h1>
        <div className="role-strip" aria-label="Roles I am open to"><span>Product &amp; Project Management</span><span>Scrum Master</span><span>Insurance Technology Transformation</span></div>
        <div className="hero-bottom">
          <p className="hero-copy">
            I’m Ishan Shah. I help business and technology teams get from “this needs to work better” to a system people can use. At Zenith Insurance, I spent six years connecting operations, software delivery, and the people doing the work, including a nationwide platform replacement.
          </p>
          <a className="text-link" href="#work">See how I work <Arrow /></a>
        </div>
        <figure className="hero-visual">
          <img src="/process-map.png" alt="Product workflow moving from discover to define, deliver, and measure" />
        </figure>
        <div className="signal-panel" aria-label="Selected experience signals">
          <div><strong>6 yrs</strong><span>at Zenith, connecting operations and technology delivery</span></div>
          <div><strong>U.S.</strong><span>nationwide platform rollout, from discovery through production support</span></div>
          <div><strong>Scrum</strong><span>planning, refinement, retrospectives, and removing blockers</span></div>
          <div><strong>QA/UAT</strong><span>hands-on testing, defect triage, and release readiness</span></div>
        </div>
      </section>

      <section className="closing" id="about">
        <p className="kicker">01 / About</p>
        <div className="closing-grid">
          <h2>Curious by nature.<br />Prepared for the work.<br /><em>Here for the team.</em></h2>
          <div>
            <div className="about-intro">
              <img className="headshot" src="/headshot.png" alt="Ishan Shah" />
              <p className="headshot-caption">Ishan Shah · delivery, technology & aviation</p>
            </div>
            <p>I like figuring out why something is harder than it needs to be. Usually that starts with listening to the people closest to it. My background spans insurance technology, healthcare, and software training, so I’m used to learning a business and helping different teams understand each other.</p>
            <p>Outside work, aviation is a big part of my life. I’m a private pilot, and I bring that interest in preparation and problem-solving into projects too. I’m mission-oriented: understand the job, follow a useful process, and adapt when things change. I care about doing the work properly, including the handoff to whoever comes next.</p>
            <div className="privacy-note"><span aria-hidden="true">◉</span><p><strong>Privacy by design</strong>I take data security, OSINT, and OPSEC seriously. I keep personal contact details and my résumé off this public page. If you’re here through an application or introduction, please reach me through that existing conversation.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="kicker">02 / Experience in practice</p>
          <h2>The work behind<br />a successful rollout.</h2>
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
          <h2>How I help<br />a team deliver.</h2>
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
          <p className="section-intro">A few things I care about: aviation, practical technology, and being thoughtful about what we share online.</p>
        </div>
        <ArticleList articles={articles} />
      </section>

      <footer><span>Ishan Shah © 2026</span><span>Delivery & Technology Portfolio</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
