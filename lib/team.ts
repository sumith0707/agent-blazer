export type TeamMember = {
  role: string
  name: string
  detail: string
  /** true when this slot is a template placeholder to be filled by the club */
  placeholder?: boolean
}

export const team: TeamMember[] = [
  {
    role: 'Student President',
    name: 'Reuben Saldanha',
    detail: 'Leads club direction, industry outreach, and flagship initiatives.',
  },
  {
    role: 'Vice President',
    name: "Ajay D'Souza",
    detail: 'Drives workshops, member engagement, and technical programming.',
  },
  {
    role: 'Faculty Coordinator',
    name: 'Ms. Nisha J. Roche',
    detail: 'Department of Computer Science & Engineering, SJEC.',
  },
  {
    role: 'Technical Lead',
    name: 'Add member',
    detail: 'Owns hands-on labs, tooling, and the club knowledge base.',
    placeholder: true,
  },
  {
    role: 'Events Lead',
    name: 'Add member',
    detail: 'Coordinates competitions, sessions, and logistics.',
    placeholder: true,
  },
  {
    role: 'Design Lead',
    name: 'Add member',
    detail: 'Shapes brand, visual identity, and event creative.',
    placeholder: true,
  },
]
