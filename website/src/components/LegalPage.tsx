import React from 'react'
import Link from 'next/link'

type LegalPageProps = {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

type LegalSectionProps = {
  title: string
  children: React.ReactNode
}

export const LegalSection: React.FC<LegalSectionProps> = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="text-xl font-bold">{title}</h2>
    <div className="mt-3 space-y-3">{children}</div>
  </section>
)

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, children }) => (
  <div className="min-h-screen bg-white text-neutral-900 font-serif [color-scheme:light]">
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 leading-relaxed [&_a]:underline [&_li]:mt-2 [&_table]:w-full [&_table]:text-left [&_td]:border-t [&_td]:border-neutral-300 [&_td]:py-2 [&_td]:pr-4 [&_th]:py-2 [&_th]:pr-4 [&_ul]:list-disc [&_ul]:pl-5">
      <header>
        <Link href="/" className="font-bold">
          PacBag
        </Link>
      </header>

      <main className="mt-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-neutral-600">Last updated: {lastUpdated}</p>
        {children}
      </main>

      <footer className="mt-16 border-t border-neutral-300 pt-4">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </nav>
      </footer>
    </div>
  </div>
)

export default LegalPage
