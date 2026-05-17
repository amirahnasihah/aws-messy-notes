'use client'

import { useState, useEffect } from 'react'
import SearchModal from './SearchModal'

export default function FloatingSearch() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        aria-label="Search services and keywords"
        className="fixed bottom-5 right-5 z-[55] flex items-center gap-2.5 rounded-full border border-aws-border/80 bg-aws-card/95 px-4 py-3 font-space-mono text-[0.65rem] text-aws-text shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-150 hover:border-c1/40 hover:bg-aws-card hover:shadow-[0_8px_40px_rgba(0,0,0,0.55)] hover:ring-1 hover:ring-c1/20 md:bottom-6 md:right-6"
      >
        <svg
          className="shrink-0 text-c1"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="7.5" cy="7.5" r="5.5" />
          <path d="M16 16l-3.5-3.5" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden md:inline text-[0.5rem] text-aws-muted border border-aws-border/60 rounded px-1.5 py-0.5">
          ⌘K
        </kbd>
      </button>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
