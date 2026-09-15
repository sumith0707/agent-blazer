'use client'

import { useState } from 'react'
import { Navbar } from '@/components/agentblazer/navbar'
import { Hero } from '@/components/agentblazer/hero'
import { About } from '@/components/agentblazer/about'
import { EventsSection } from '@/components/agentblazer/events-section'
import { TimelineSection } from '@/components/agentblazer/timeline-section'
import { TeamSection } from '@/components/agentblazer/team-section'
import { JoinCTA, Footer } from '@/components/agentblazer/join-footer'
import { JoinModal } from '@/components/agentblazer/join-modal'

export default function Page() {
  const [joinOpen, setJoinOpen] = useState(false)
  const openJoin = () => setJoinOpen(true)

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar onJoin={openJoin} />
      <Hero onJoin={openJoin} />
      <About />
      <EventsSection />
      <TimelineSection />
      <TeamSection />
      <JoinCTA onJoin={openJoin} />
      <Footer />
      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </main>
  )
}
