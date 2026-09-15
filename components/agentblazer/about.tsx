'use client'

import { Bot, FlaskConical, Radio, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './ui'

const pillars = [
  {
    icon: Bot,
    title: 'AI & Agentic Systems',
    body: 'From LLM fundamentals to autonomous Agentforce workflows — we study how intelligent systems reason, act, and scale.',
  },
  {
    icon: FlaskConical,
    title: 'Hands-on Workshops',
    body: 'Practical labs on prompting, RAG, function calling, and modern tooling like LangChain, CrewAI, and Streamlit.',
  },
  {
    icon: Radio,
    title: 'Industry Connect',
    body: 'Sessions with engineers from Salesforce, HackerRank, and Ingersoll Rand mapping real career pathways.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber & Security',
    body: 'OSINT, the Cyber Kill Chain, and defensive fundamentals that keep the systems we build resilient.',
  },
]

const marquee = [
  'Agentic AI',
  'Prompt Engineering',
  'RAG',
  'LangChain',
  'Salesforce Agentforce',
  'GSOC',
  'Function Calling',
  'OSINT',
  'Cyber Kill Chain',
  'CrewAI',
  'Gemini',
  'Streamlit',
]

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      {/* marquee band */}
      <div className="relative mb-20 overflow-hidden border-y border-white/10 py-4">
        <div className="ab-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="ab-mono flex items-center gap-10 text-sm text-ab-muted">
              {item}
              <span className="h-1 w-1 rounded-full bg-ab-blue/70" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  A club built to <span className="ab-text-gradient">close the gap</span> between
                  learning and doing.
                </>
              }
              intro="Launched by the Department of Computer Science & Engineering at SJEC, AgentBlazer brings students, faculty, and industry mentors together to explore the technologies shaping tomorrow — and to build with them."
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <article className="ab-gradient-border group h-full rounded-2xl bg-white/[0.02] p-6 transition-colors duration-300 hover:bg-white/[0.05]">
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-ab-blue/20 to-ab-violet/20 text-ab-blue ring-1 ring-white/10">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ab-muted">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
