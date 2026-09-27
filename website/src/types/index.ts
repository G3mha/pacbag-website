export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight?: boolean
}

export interface Demo {
  id: number
  title: string
  description: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface NavItem {
  name: string
  href: string
}