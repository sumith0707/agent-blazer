'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { Modal } from './modal'
import { GlowButton } from './ui'

const interests = ['AI & ML', 'Agentic Systems', 'Cybersecurity', 'Competitions', 'Design']

export function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [interest, setInterest] = useState('AI & ML')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const close = () => {
    onClose()
    // reset shortly after the modal animates away
    setTimeout(() => setSubmitted(false), 200)
  }

  return (
    <Modal open={open} onClose={close} labelledBy="join-title">
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-ab-blue/25 to-ab-violet/25 text-ab-blue ring-1 ring-white/12">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h2 id="join-title" className="text-2xl font-semibold tracking-tight">
              You&apos;re on the list
            </h2>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-ab-muted">
              Thanks for your interest in AgentBlazer. Our team will reach out with onboarding
              details and the next session line-up.
            </p>
            <GlowButton onClick={close} className="mt-2">
              Done
            </GlowButton>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <span className="ab-mono inline-flex items-center gap-2 text-[11px] text-ab-blue">
                <Sparkles className="h-3.5 w-3.5" />
                Membership
              </span>
              <h2 id="join-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Join AgentBlazer
              </h2>
              <p className="text-sm leading-relaxed text-ab-muted">
                Tell us a little about yourself and we&apos;ll get you plugged into the next cohort.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="jn-name">
                  <input
                    id="jn-name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" htmlFor="jn-email">
                  <input
                    id="jn-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputCls}
                    placeholder="you@sjec.ac.in"
                  />
                </Field>
              </div>

              <Field label="Year & branch" htmlFor="jn-year">
                <input
                  id="jn-year"
                  name="year"
                  required
                  className={inputCls}
                  placeholder="e.g. 3rd Year · CSE"
                />
              </Field>

              <div className="flex flex-col gap-2">
                <span className="ab-mono text-[10px] text-ab-muted">Primary interest</span>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInterest(item)}
                      aria-pressed={interest === item}
                      className={`ab-mono rounded-full px-3 py-1.5 text-[10px] transition-all ${
                        interest === item
                          ? 'bg-gradient-to-r from-ab-blue to-ab-violet text-ink'
                          : 'border border-white/12 text-ab-muted hover:text-foreground'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <Field label="Why do you want to join? (optional)" htmlFor="jn-msg">
                <textarea
                  id="jn-msg"
                  name="message"
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="A line about what you'd love to build or learn."
                />
              </Field>

              <GlowButton type="submit" className="mt-1 w-full">
                Submit application
              </GlowButton>
            </form>
          </>
        )}
      </div>
    </Modal>
  )
}

const inputCls =
  'w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-ab-muted/60 outline-none transition-colors focus:border-ab-blue/60 focus:bg-white/[0.05]'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="ab-mono text-[10px] text-ab-muted">{label}</span>
      {children}
    </label>
  )
}
