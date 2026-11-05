// Portfolio copy. Keep article slugs stable so previously shared links work.
export const projects = [
  {
    type: "Technology transformation",
    scope: "Zenith Insurance · Nationwide rollout",
    title: "Replacing a platform people depended on",
    summary: "At Zenith, I led business analysis and coordinated delivery for a nationwide premium-audit platform replacement. I worked with operations, IT, vendors, and leadership from discovery and vendor selection through requirements, QA, UAT, training, and post-launch support. The work meant understanding existing processes well enough to change them without losing the details users relied on.",
    tags: ["Vendor selection", "Requirements", "QA / UAT", "Rollout & adoption"],
    outcomeLabel: "Delivered",
    outcome: "Nationwide implementation in under 18 months",
  },
  {
    type: "Scrum & delivery",
    scope: "Business, technology & vendor teams",
    title: "Keeping the team moving through the messy middle",
    summary: "As Scrum Master and Business Systems Analyst, I connected business priorities with the team's day-to-day work. I facilitated planning, refinement, reviews, and retrospectives; clarified requirements; tracked dependencies; and helped resolve blockers. I stayed involved through defect triage and release readiness so decisions made in meetings carried through to the work.",
    tags: ["Scrum facilitation", "Backlog prioritization", "Dependencies", "Release readiness"],
    outcomeLabel: "My contribution",
    outcome: "Clear priorities, owners, and next steps",
  },
  {
    type: "Operations & analysis",
    scope: "Workflow data & user feedback",
    title: "Finding what is actually slowing the work down",
    summary: "I investigated recurring issues using workflow data, SQL, reporting tools, and conversations with users. Looking at audit status, vendor assignments, completion timing, and exceptions helped separate a system defect from a process problem. I translated those findings into requirements, fixes, and guidance the team could act on.",
    tags: ["SQL & Excel", "Root-cause analysis", "Process mapping", "User feedback"],
    outcomeLabel: "Approach",
    outcome: "Understand the cause before choosing the fix",
  },
];
export const capabilities = [
  { title: "Turn requests into a plan", description: "Ask what the user needs, work through the tradeoffs, and turn the answer into priorities, requirements, and acceptance criteria a team can use." },
  { title: "Make Scrum useful", description: "Help the team prepare, surface blockers, and follow through on decisions. Give planning and retrospectives a purpose people can see in their work." },
  { title: "Connect business and technology", description: "Bring operations, developers, QA, vendors, and leadership into the same conversation. Explain the issue clearly enough for people to make a decision." },
  { title: "Stay through the rollout", description: "Work through QA, UAT, defect triage, training, and production support. A release matters when people can actually use it." },
  { title: "Tools I work with", description: "Jira, Confluence, MS Project, Visio, and SharePoint for delivery and documentation. SQL, Excel, Power BI, and Tableau for analysis. I also use ChatGPT, Codex, and artifacts regularly to explore ideas, build small tools, and refine drafts." },
  { title: "What working with me is like", description: "I ask questions, share context, and follow up. I want to hear from the person doing the work, especially when the process on paper differs from what happens each day." },
];
export const articles = [
  {
    slug: "why-im-not-active-on-linkedin",
    category: "Privacy",
    readTime: "2 min read",
    title: "Why I’m not active on LinkedIn",
    paragraphs: [
      "If you looked me up on LinkedIn and found very little activity, that is deliberate. I still enjoy meeting people and talking about work. I just prefer to be more selective about where I put my information.",
      "My details appeared in the LinkedIn-related datasets listed by Have I Been Pwned below. Those incidents included both a breach and scraped data. They made me think harder about how much information I was leaving in one place, and what could happen to it after I shared it.",
      "I’m a big OSINT enthusiast. Open-source intelligence shows you how much can be learned by connecting small pieces of public information. A job title here, a location there, a profile copied somewhere else: each detail can travel much further than you expect.",
      "That is why I take data security and OPSEC seriously. I think about what I share, who needs it, and how it could be reused. Keeping my LinkedIn activity low is one part of that approach. Other people make a different choice, and that is fine.",
      "The same thinking shows up in my work: ask what information is actually needed, who should have access, and where it will go next. Privacy by design starts with those everyday decisions.",
      "This portfolio gives me a place to share my experience and interests with a little more control. If we are already talking about a role, please use our existing email thread or recruiting channel to reach me. I’m happy to continue the conversation there.",
    ],
    sources: [
      { label: "LinkedIn Scraped Data (2021) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/LinkedInScrape" },
      { label: "You’ve Been Scraped (2018) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/YouveBeenScraped" },
      { label: "LinkedIn breach (2012) — Have I Been Pwned", url: "https://haveibeenpwned.com/Breach/LinkedIn" },
    ],
  },
  {
    slug: "where-ai-earns-trust-in-insurance",
    category: "Technology & operations",
    readTime: "2 min read",
    title: "Where AI can actually help in insurance",
    paragraphs: [
      "I use ChatGPT and Codex quite a bit. I like being able to turn an idea into something I can try, ask a better question, or get a draft moving. But when I think about using AI in insurance, I start with the work people are trying to get done.",
      "Take a workflow where someone spends most of their time searching documents or piecing together a case. A tool that gathers relevant information and points back to the source could be useful. Before choosing it, I would want to understand where the time goes, which details matter, and what happens when something is missing.",
      "That last part is easy to underestimate. Insurance workflows have exceptions, business rules, and knowledge that lives with the people doing the job. I would want those people involved early, including when we decide what to test and what needs a human review.",
      "For me, a useful trial would compare the existing process with the proposed one: time spent, corrections needed, exceptions handled, and whether users can understand the result. A convincing demo is a starting point. Seeing how the tool behaves on an awkward real case tells you much more.",
      "I’m interested in AI because I like finding better ways to work. The same questions still apply to any technology change: does it solve a real problem, can people use it, and who will own it after launch?",
    ],
  },
  {
    slug: "pilot-process-not-goals",
    category: "Aviation & process",
    readTime: "2 min read",
    title: "What aviation taught me about following the process",
    paragraphs: [
      "I’m mission-oriented. I care about where we are going, but I pay just as much attention to how we get there. Aviation has a lot to do with that.",
      "A flight gives you a destination. It also gives you weather to assess, preparation to do, and decisions to keep making along the way. Fixating on arrival can make it tempting to explain away something that deserves a closer look. I would rather adjust the plan than take a shortcut just to say I finished.",
      "I bring that mindset to projects. A launch date is useful, but it does not answer whether the requirements make sense, the exceptions have been tested, or users know what will change. Those are part of the mission too.",
      "I like processes that help people think: a checklist that catches an omission, a handoff that makes ownership clear, a retrospective that changes how the next sprint goes. If a step serves no purpose, I want to understand why it is there and improve it.",
      "Following a process does not mean refusing to adapt. Conditions change in flight and at work. Preparation gives you enough context to make a sensible adjustment, explain it to the team, and keep moving.",
      "That is the kind of teammate I try to be: prepared, willing to ask another question, and focused on doing the work properly. Getting to the finish line matters. I want the team to be comfortable with the way we got there.",
    ],
  },
];
