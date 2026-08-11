// EDITING GUIDE
// This is the only file you need for routine content updates.
// Change quoted text, save the file, and the site will refresh automatically.

export const projects = [
  {
    type: "Insurance platform transformation",
    scope: "Nationwide · 18+ months",
    title: "Premium-audit platform replacement",
    summary: "Initiated CIO-sponsored discovery and led business analysis from operating pain points through requirements, workflows, data definitions, testing, rollout, training, and stabilization. Aligned insurance operations, IT, compliance, finance, vendors, QA, and leadership around one delivery path.",
    tags: ["Discovery", "Requirements", "QA / UAT", "Release readiness"],
    outcomeLabel: "Documented impact",
    outcome: "$250K+ annual technology savings",
  },
  {
    type: "Operations intelligence",
    scope: "Workers’ compensation",
    title: "Turning workflow data into action",
    summary: "Analyzed audit status, vendor assignment, process stage, issue type, completion timing, and business impact to surface bottlenecks and recurring issues. Converted findings and user feedback into clearer priorities, documented fixes, and repeatable process improvements.",
    tags: ["SQL", "Excel", "Tableau", "Root-cause analysis"],
    outcomeLabel: "Decision focus",
    outcome: "From symptoms to traceable causes",
  },
  {
    type: "Portfolio concept",
    scope: "Responsible insurance AI",
    title: "An AI-readiness lens for premium audit",
    summary: "A practical framework for evaluating AI opportunities before selecting a model: identify the decision, map the source data, separate assistance from authority, define exception handling, and make evidence reviewable. It applies delivery lessons from regulated insurance systems to emerging AI workflows.",
    tags: ["Use-case discovery", "Human review", "Data readiness", "Controls"],
    outcomeLabel: "Core principle",
    outcome: "Automate the task—not accountability",
  },
];

export const capabilities = [
  { title: "Find the real use case", description: "Translate broad AI ambition into a specific insurance decision, user, workflow, constraint, and measurable outcome." },
  { title: "Interrogate the data", description: "Trace definitions, lineage, quality, exceptions, and business rules before treating a dataset as model-ready." },
  { title: "Design for trust", description: "Make human review, evidence, uncertainty, escalation, compliance, and auditability part of the workflow—not an afterthought." },
  { title: "Move from pilot to practice", description: "Connect requirements, acceptance criteria, testing, release readiness, training, feedback, and production stabilization." },
];

export const articles = [
  {
    slug: "why-im-not-active-on-linkedin",
    category: "Privacy",
    readTime: "4 min read",
    title: "Why I’m not active on LinkedIn",
    paragraphs: [
      "If you found this portfolio while evaluating me for a role, you may have noticed that I am not active on LinkedIn. That absence is intentional. It is not a lack of professional engagement; it is a decision about privacy, data exposure, and how much of my working life I want to place on a social platform.",
      "My information appeared in three datasets documented by Have I Been Pwned. The 2012 LinkedIn breach exposed 164 million email addresses and passwords; the data later surfaced for sale in 2016. A separate dataset discovered in 2018 contained more than 66 million records believed to have been scraped from LinkedIn, including names, work and personal email addresses, employers, job titles, locations, and profile links. In 2021, data scraped from hundreds of millions of public LinkedIn profiles was sold online and circulated broadly; Have I Been Pwned reports 125 million unique email addresses in that collection.",
      "The 2021 event is an important distinction: LinkedIn said the information was public and the scraping was not a breach of private systems. From my perspective, that does not make the outcome harmless. Data can be individually public yet become far more revealing, searchable, and reusable when it is aggregated at scale. That difference—between intended visibility and downstream use—is one reason privacy requires more than a public-or-private checkbox.",
      "I’m also huge on OSINT—the disciplined use of open-source information to understand people, organizations, systems, and risk. OSINT is most useful when it is careful about provenance, context, and unintended exposure. That same mindset informs how I publish: I think about what a detail reveals on its own, what it reveals when combined with other details, and how easily it can be copied or repurposed.",
      "Insurance professionals work with trust, risk, and consequences. I apply those same ideas to my own digital footprint. I use unique credentials, multi-factor authentication, and deliberate limits on what I publish. Reducing my activity on LinkedIn is one of those limits. It is a risk decision, not a judgment about colleagues who use the platform.",
      "I take data security and OPSEC seriously. For me, that means minimizing unnecessary exposure, separating contexts where appropriate, protecting credentials, and treating small pieces of information as potentially linkable. It is not about paranoia or disappearing; it is about making intentional decisions about information, access, and audience.",
      "I still value professional relationships and thoughtful industry conversation. I simply prefer smaller, intentional channels and a portfolio I control. If we are already speaking about an opportunity, the channel that brought you here is the best way to continue the conversation.",
    ],
    sources: [
      { label: "LinkedIn Scraped Data (2021) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/LinkedInScrape" },
      { label: "You’ve Been Scraped (2018) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/YouveBeenScraped" },
      { label: "LinkedIn breach (2012) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/LinkedIn" },
    ],
  },
  {
    slug: "where-ai-earns-trust-in-insurance",
    category: "Insurance AI",
    readTime: "3 min read",
    title: "Where AI earns trust in insurance operations",
    paragraphs: [
      "The most useful first question in insurance AI is not “Which model should we use?” It is “Which decision are we trying to improve, and who remains accountable for it?” That reframing turns a technology conversation into an operating-design conversation.",
      "Good candidates are often work that is high-volume, evidence-heavy, and reviewable: organizing documents, surfacing inconsistencies, drafting a summary, routing an exception, or helping an analyst find relevant guidance. These uses can reduce search and synthesis time without quietly transferring authority to a system that cannot own the consequence.",
      "A credible pilot needs more than an accuracy score. It needs representative edge cases, clear acceptance criteria, a way to show evidence, thresholds for human review, and a plan for when production data drifts away from the test set. In regulated workflows, the surrounding controls are part of the product.",
      "That is why insurance domain experience matters. Business rules are rarely just rules; they contain exceptions, jurisdictional variation, historical workarounds, and knowledge that may never have made it into documentation. AI analysis begins by making that operating reality visible.",
    ],
  },
  {
    slug: "pilot-process-not-goals",
    category: "Aviation / Process",
    readTime: "4 min read",
    title: "What being a pilot taught me about process over goals",
    paragraphs: [
      "Flying changed the way I think about achievement. A goal is useful: it tells you where you intend to go. But a goal alone can invite shortcuts. A process gives you the discipline to get there safely, consistently, and with enough awareness to respond when conditions change.",
      "In aviation, the mission is never just “arrive.” The mission is to prepare, verify, communicate, operate within limits, monitor the environment, and make good decisions all the way through the landing. The checklist is not bureaucracy. It is a memory aid that protects judgment when workload, uncertainty, or pressure are high.",
      "That mindset has followed me into insurance technology. A team can be given a target date, a savings number, or a launch milestone and still create avoidable risk if it skips the work underneath: clarifying the decision, checking the source data, testing the exceptions, documenting the handoff, and listening to the people who will live with the change in production.",
      "Goal-oriented work asks, “Did we get there?” Process-oriented work also asks, “Did we get there in a way we can explain, repeat, and trust?” That second question is especially important when a workflow affects customers, compliance, money, or a downstream analyst who needs to understand why a recommendation was made.",
      "A process focus does not mean moving slowly or refusing ambition. It means making the path visible enough to move quickly without pretending uncertainty is gone. It creates useful stopping points: a preflight check before commitment, a review before release, an escalation before a small issue becomes a system-wide one.",
      "That is how I approach AI in insurance. I am interested in better outcomes, but I do not want the outcome to hide the method. The strongest systems make evidence, limits, human responsibility, and recovery paths part of the design. The goal matters. The process is what makes the goal worth trusting.",
    ],
  },
];
