'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'ab-mono inline-flex items-center gap-2 text-[11px] text-ab-blue',
        className,
      )}
    >
      <span className="h-px w-6 bg-gradient-to-r from-ab-blue to-transparent" aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-ab-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}

type GlowButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
  'aria-label'?: string
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = 'solid',
  className,
  type = 'button',
  ...rest
}: GlowButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ab-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const styles =
    variant === 'solid'
      ? 'text-ink bg-gradient-to-r from-ab-blue to-ab-violet shadow-[0_10px_40px_-10px_rgba(77,163,255,0.7)] hover:shadow-[0_16px_50px_-8px_rgba(139,92,246,0.7)] hover:-translate-y-0.5'
      : 'text-foreground/90 border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 hover:shadow-[0_12px_32px_-12px_rgba(77,163,255,0.55)] hover:-translate-y-0.5'

  const content = <span className="relative flex items-center gap-2">{children}</span>

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cn(base, styles, className)} {...rest}>
      {content}
    </button>
  )
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'ab-mono rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[10px] text-ab-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
