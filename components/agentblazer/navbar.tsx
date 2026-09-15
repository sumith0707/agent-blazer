'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GlowButton } from './ui'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Team', href: '#team' },
]

export function Navbar({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2.5' : 'py-4',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className={cn(
            'flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 transition-all duration-500',
            scrolled && 'ab-glass ab-glow-blue',
          )}
        >
          <img
            src="/brand/logo-mark.png"
            alt="AgentBlazer Club logo"
            className="h-9 w-9 rounded-full ring-1 ring-white/20"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">AgentBlazer</span>
            <span className="ab-mono text-[9px] text-ab-muted">Club · SJEC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full ab-glass px-2 py-1.5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-ab-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton onClick={onJoin} className="px-5 py-2.5">
            Join the Club
          </GlowButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full ab-glass text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl ab-glass p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
          <GlowButton
            onClick={() => {
              setOpen(false)
              onJoin()
            }}
            className="mt-1 w-full"
          >
            Join the Club
          </GlowButton>
        </div>
      ) : null}
    </header>
  )
}
