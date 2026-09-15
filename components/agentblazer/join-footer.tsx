'use client'

import type { SVGProps } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Reveal } from './reveal'
import { GlowButton } from './ui'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C20.4 8.75 22 10.9 22 14.2V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21H9V9Z" />
    </svg>
  )
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function JoinCTA({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl ab-gradient-border bg-gradient-to-br from-ab-blue/12 via-surface to-ab-violet/12 p-8 text-center sm:p-14">
            <div
              className="ab-grid absolute inset-0 opacity-60"
              aria-hidden
            />
            <div
              className="ab-glow-pulse pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(77,163,255,0.4), transparent 70%)' }}
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-6">
              <span className="ab-mono text-[11px] text-ab-blue">Ready when you are</span>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Build the future with <span className="ab-text-gradient">AgentBlazer</span>
              </h2>
              <p className="max-w-xl text-pretty leading-relaxed text-ab-muted">
                Whether you&apos;re here to prompt, code, secure, or design — there&apos;s a place
                for you in the club. Join a community that ships.
              </p>
              <GlowButton onClick={onJoin} className="mt-1">
                Become a member
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </GlowButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:agentblazer@sjec.ac.in' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/brand/logo-mark.png"
              alt="AgentBlazer Club logo"
              className="h-11 w-11 rounded-full ring-1 ring-white/20"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight">AgentBlazer Club</span>
              <span className="ab-mono text-[9px] text-ab-muted">
                Dept. of CSE · St Joseph Engineering College, Mangaluru
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full ab-glass text-ab-muted transition-colors hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-center sm:flex-row sm:text-left">
          <p className="ab-mono text-[9px] text-ab-muted">
            © {new Date().getFullYear()} AgentBlazer Club · The Future in Formation
          </p>
          <div className="flex gap-5">
            <a href="#about" className="ab-mono text-[9px] text-ab-muted hover:text-foreground">
              About
            </a>
            <a href="#events" className="ab-mono text-[9px] text-ab-muted hover:text-foreground">
              Events
            </a>
            <a href="#team" className="ab-mono text-[9px] text-ab-muted hover:text-foreground">
              Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
