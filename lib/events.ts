export type EventCategory =
  | 'AI & ML'
  | 'Workshops'
  | 'Competitions'
  | 'Cybersecurity'
  | 'Industry Sessions'
  | 'Club Events'

export type AgentEvent = {
  id: string
  code: string
  title: string
  /** ISO date used for sorting */
  date: string
  dateLabel: string
  category: EventCategory
  summary: string
  description: string
  topics: string[]
  people: { role: string; name: string }[]
  photos: string[]
  featured?: boolean
}

export const FILTERS: Array<'All' | EventCategory> = [
  'All',
  'AI & ML',
  'Workshops',
  'Competitions',
  'Cybersecurity',
  'Industry Sessions',
  'Club Events',
]

export const events: AgentEvent[] = [
  {
    id: 'club-inauguration',
    code: 'EVENT_01',
    title: 'AgentBlazer Club Inauguration',
    date: '2025-08-28',
    dateLabel: 'August 28, 2025',
    category: 'Club Events',
    summary:
      'The formal launch of AgentBlazer — a club built to foster leadership, innovation, and technical excellence.',
    description:
      'The Department of Computer Science & Engineering formally inaugurated the AgentBlazer Club to foster leadership, innovation, and technical excellence among students. Chief Guest Mr. Santosh Rebello (Salesforce) emphasized bridging the "role–radiance gap," while Guest of Honor Mr. Stephen Pinto (Salesforce & SJEC alumnus) encouraged continuous learning. The event featured a lamp-lighting ceremony, a welcome address by the HOD, felicitations, and a vote of thanks by the Student President.',
    topics: [
      'Leadership',
      'Innovation',
      'Technical Excellence',
      'Lamp-lighting Ceremony',
      'Trailblazer Ecosystem',
    ],
    people: [
      { role: 'Chief Guest', name: 'Mr. Santosh Rebello — Salesforce' },
      { role: 'Guest of Honor', name: 'Mr. Stephen Pinto — Salesforce, SJEC Alumnus' },
      { role: 'Coordinators', name: 'Mr. Keith Fernandes & Ms. Nisha Roche' },
    ],
    photos: [],
  },
  {
    id: 'agentforce-technical-session',
    code: 'EVENT_02',
    title: 'Agentforce Technical Session',
    date: '2025-08-28',
    dateLabel: 'August 28, 2025',
    category: 'Industry Sessions',
    summary:
      'A Salesforce-led session tracing AI evolution and the career pathways inside the Trailblazer ecosystem.',
    description:
      'Held alongside the club launch, Salesforce executives Mr. Santhosh Rebello and Mr. Stephen Pinto delivered an expert session on Agentforce and AI career opportunities. They traced AI evolution through Predictive, Copilot, and Agentic AI — autonomous systems using Salesforce Data Cloud — highlighted key career pathways in Salesforce Administration, Analytics, and Solution Development, and urged students to build adaptability within the Trailblazer ecosystem.',
    topics: [
      'Predictive AI',
      'Copilot AI',
      'Agentic AI',
      'Salesforce Data Cloud',
      'Analytics',
      'Solution Development',
    ],
    people: [
      { role: 'Speaker', name: 'Mr. Santhosh Rebello — Salesforce' },
      { role: 'Speaker', name: 'Mr. Stephen Pinto — Salesforce' },
    ],
    photos: [],
  },
  {
    id: 'gsoc-llm-workshop',
    code: 'EVENT_03',
    title: 'Master the Future: Hands-on GSOC & LLMs Workshop',
    date: '2026-02-14',
    dateLabel: 'February 14, 2026',
    category: 'AI & ML',
    summary:
      'A hands-on workshop covering GitHub, GSOC, LLM parameters, prompt strategies, RAG, function calling, and modern AI development tools.',
    description:
      'Organized by the Department of CSE in association with the AgentBlazer Club, this workshop was conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training (forking, cloning, pull requests), guidance on Google Summer of Code participation, and an overview of the AI ecosystem, closing with a token of appreciation and a vote of thanks.',
    topics: [
      'GitHub Workflow',
      'GSOC',
      'LLM Parameters',
      'Temperature / Top-P / Max Tokens',
      'Prompt Strategies',
      'RAG',
      'Function Calling',
      'Gemini AI',
      'LangChain',
      'LlamaIndex',
      'CrewAI',
      'Gradio',
      'Streamlit',
    ],
    people: [
      { role: 'Speaker', name: 'Mr. Anas Khan — HackerRank' },
      { role: 'Welcome', name: "Club VP Mr. Ajay D'Souza" },
      { role: 'Faculty Coordinator', name: 'Ms. Nisha J. Roche' },
    ],
    photos: ['/events/gsoc/gsoc-1.jpg', '/events/gsoc/gsoc-2.jpg', '/events/gsoc/gsoc-3.jpg'],
  },
  {
    id: 'demystifying-generative-models',
    code: 'EVENT_04',
    title: 'Demystifying Generative Models Workshop',
    date: '2026-03-18',
    dateLabel: 'March 18, 2026',
    category: 'AI & ML',
    summary:
      'A student-led workshop on transformers, prompt engineering, model comparison, and hands-on evaluation challenges.',
    description:
      'Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI. The session detailed AI governance frameworks, transformer mechanisms, and prompt engineering, alongside comparisons of LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, and Perplexity. Students engaged in an AI quiz, a three-stage model evaluation challenge, and a feature-modification coding task before a valedictory session.',
    topics: [
      'Transformers',
      'Prompt Engineering',
      'LLM Council Governance',
      'LLaMA',
      'Groq',
      'Mistral AI',
      'ChatGPT',
      'GitHub Copilot',
      'Perplexity',
      'Model Evaluation',
    ],
    people: [
      { role: 'Student Lead', name: 'Prajwal Royston Corderio' },
      { role: 'Student Lead', name: 'Chacko P Abraham' },
      { role: 'Guidance', name: 'Ms. Nisha J. Roche' },
    ],
    photos: [],
  },
  {
    id: 'prompt-ops-2k26',
    code: 'EVENT_05',
    title: 'PROMPT OPS-2K26 Competition',
    date: '2026-03-25',
    dateLabel: 'March 25, 2026',
    category: 'Competitions',
    summary:
      'A prompt engineering and AI tools competition organized by AgentBlazer and Cipher.',
    description:
      'Organized by the AgentBlazer Club and Cipher under the guidance of Ms. Nisha J. Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza, this technical competition focused on prompt engineering and AI tools. Track 1 (1st Year) featured invitation generation, logo recreation, and image recreation rounds. Track 2 (2nd Year) tested students in JSON conversion, Python code debugging, and a Gemini AI security prompt extraction challenge.',
    topics: [
      'Prompt Engineering',
      'AI Tools',
      'Invitation Generation',
      'Logo Recreation',
      'Image Recreation',
      'JSON Conversion',
      'Python Debugging',
      'Security Prompt Extraction',
    ],
    people: [
      { role: 'Organized by', name: 'AgentBlazer Club & Cipher' },
      { role: 'Guidance', name: 'Ms. Nisha J. Roche, Ms. Jaishma K' },
      { role: 'HOD', name: 'Dr. Melwyn D’Souza' },
    ],
    photos: [
      '/events/promptops/promptops-1.jpg',
      '/events/promptops/promptops-2.jpg',
      '/events/promptops/promptops-3.jpg',
      '/events/promptops/promptops-4.jpg',
      '/events/promptops/promptops-5.jpg',
      '/events/promptops/promptops-6.jpg',
    ],
    featured: true,
  },
  {
    id: 'cyber-security-career-pathways',
    code: 'EVENT_06',
    title: 'Cyber Security and Career Pathways Session',
    date: '2026-04-01',
    dateLabel: 'April 1, 2026',
    category: 'Cybersecurity',
    summary:
      'A session covering Shodan, OSINT, Google Dorking, CVEs, SQL injection, the Cyber Kill Chain, and cybersecurity careers.',
    description:
      'Organized by the Department of CSE in association with the AgentBlazer Club, this hands-on workshop was delivered by Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand) for 6th-semester students. The session provided practical exposure to core security concepts, live tool demonstrations, and the Cyber Kill Chain model. It concluded with actionable guidance on career roles such as Security Analyst, SOC Analyst, Ethical Hacker, and Cloud Security Engineer.',
    topics: [
      'Shodan',
      'OSINT',
      'Google Dorking',
      'CVE Management',
      'SQL Injection',
      'Cyber Kill Chain',
      'SOC Analyst',
      'Ethical Hacking',
      'Cloud Security',
    ],
    people: [
      { role: 'Speaker', name: 'Mr. Suhas Nayak — SecOps, Ingersoll Rand' },
    ],
    photos: [
      '/events/cyber/cyber-1.jpg',
      '/events/cyber/cyber-2.jpg',
      '/events/cyber/cyber-3.jpg',
      '/events/cyber/cyber-4.jpg',
      '/events/cyber/cyber-5.jpg',
      '/events/cyber/cyber-6.jpg',
    ],
  },
  {
    id: 'agentforce-workshop',
    code: 'EVENT_07',
    title: 'Agentforce Workshop',
    date: '2026-05-22',
    dateLabel: 'May 22, 2026',
    category: 'Workshops',
    summary:
      'A workshop on building AI agents and prompt-based workflow automation using Trailhead, prompt templates, and flows.',
    description:
      'The AgentBlazer Club, in collaboration with Salesforce, organized a hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students gained practical experience in designing Sales Email Prompt Templates, Flex Prompt Templates, and configuring automated prompt flows to build reusable AI structures, followed by a discussion on industry applications.',
    topics: [
      'Salesforce Trailhead',
      'AI Agents',
      'Sales Email Prompt Templates',
      'Flex Prompt Templates',
      'Prompt Flows',
      'Workflow Automation',
    ],
    people: [
      { role: 'Faculty Coordinator', name: 'Ms. Nisha Roche' },
      { role: 'Student Coordinator', name: 'Mr. Reuben Saldanha' },
    ],
    photos: [],
  },
]

export const featuredEvent = events.find((e) => e.featured) ?? events[0]

/** Events sorted chronologically for the timeline. */
export const timelineEvents = [...events].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
)

export function relatedEvents(event: AgentEvent, count = 3): AgentEvent[] {
  const sameCategory = events.filter(
    (e) => e.id !== event.id && e.category === event.category,
  )
  const others = events.filter(
    (e) => e.id !== event.id && e.category !== event.category,
  )
  return [...sameCategory, ...others].slice(0, count)
}
