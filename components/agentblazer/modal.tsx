'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

export function Modal({
  open,
  onClose,
  labelledBy,
  children,
}: {
  open: boolean
  onClose: () => void
  labelledBy: string
  children: ReactNode
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/80 backdrop-blur-sm"
        style={{ animation: 'ab-glow-pulse 0.01s' }}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-white/12 bg-surface/95 shadow-2xl outline-none sm:m-4 sm:max-w-2xl sm:rounded-3xl"
        style={{
          backgroundImage:
            'radial-gradient(120% 60% at 50% 0%, rgba(77,163,255,0.10), transparent 60%)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full ab-glass text-foreground transition-colors hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
