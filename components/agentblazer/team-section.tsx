'use client'

import { Plus } from 'lucide-react'
import { team } from '@/lib/team'
import { Reveal } from './reveal'
import { SectionHeading } from './ui'
import { cn } from '@/lib/utils'

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.)\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function TeamSection() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The people"
            title={
              <>
                Led by <span className="ab-text-gradient">students</span>, guided by faculty
              </>
            }
            intro="A student-driven core team keeps AgentBlazer moving — with mentorship from the Department of Computer Science & Engineering."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.role} delay={(i % 3) * 80}>
              <article
                className={cn(
                  'ab-gradient-border group flex h-full flex-col gap-4 rounded-2xl bg-white/[0.02] p-6',
                  member.placeholder && 'border-dashed',
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      'grid h-14 w-14 place-items-center rounded-2xl text-lg font-semibold ring-1 ring-white/12',
                      member.placeholder
                        ? 'bg-white/[0.03] text-ab-muted'
                        : 'bg-gradient-to-br from-ab-blue/25 to-ab-violet/25 text-foreground',
                    )}
                    aria-hidden
                  >
                    {member.placeholder ? <Plus className="h-5 w-5" /> : initials(member.name)}
                  </span>
                  <div className="flex flex-col">
                    <span className="ab-mono text-[10px] text-ab-blue">{member.role}</span>
                    <span
                      className={cn(
                        'text-lg font-semibold tracking-tight',
                        member.placeholder && 'text-ab-muted',
                      )}
                    >
                      {member.name}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ab-muted">{member.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
