'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navDomains } from '@/data/awsServices'

interface NavProps {
  activePage?: 'cheatsheet' | 'learn'
}

export default function Nav({ activePage = 'cheatsheet' }: NavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="nav-scroll hidden md:flex fixed top-0 left-0 right-0 h-14 z-50 items-center gap-2 px-6 overflow-x-auto bg-aws-bg/92 backdrop-blur-md border-b border-aws-border">
        <span className="font-space-mono text-[0.7rem] font-bold text-c1 whitespace-nowrap mr-3 pr-3 border-r border-aws-border shrink-0">
          AWS SAA-C03
        </span>

        <PageLink href="/" label="Cheat Sheet" active={activePage === 'cheatsheet'} />
        <PageLink href="/learn" label="Deep Notes" active={activePage === 'learn'} />

        <span className="text-aws-border text-sm shrink-0">·</span>

        {navDomains.map((domain, di) => (
          <div key={domain.href} className="flex items-center gap-2 shrink-0">
            {di > 0 && <span className="text-aws-border text-sm">·</span>}
            <a href={domain.href} className={`font-space-mono text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap px-2 py-1 rounded-md transition-all hover:bg-white/5 hover:text-aws-text border border-transparent ${domain.colorClass}`}>
              {domain.label}
            </a>
            <span className="text-aws-border text-sm">|</span>
            {domain.items.map((item) => (
              <a key={item.href} href={item.href} className={`font-space-mono text-[0.62rem] whitespace-nowrap px-2 py-1 rounded-full transition-all hover:bg-white/6 border ${item.className}`}>
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      {/* ── Mobile nav ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4 bg-aws-bg/95 backdrop-blur-md border-b border-aws-border">
        <span className="font-space-mono text-[0.7rem] font-bold text-c1">AWS SAA-C03</span>
        <div className="flex items-center gap-3">
          <PageLink href="/" label="Cheat Sheet" active={activePage === 'cheatsheet'} />
          <PageLink href="/learn" label="Deep Notes" active={activePage === 'learn'} />
          <button
            onClick={() => setOpen(true)}
            className="text-aws-muted hover:text-aws-text transition-colors p-1"
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect y="3" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="15" width="20" height="2" rx="1" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative ml-auto w-72 h-full bg-aws-card border-l border-aws-border overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4 border-b border-aws-border">
              <span className="font-space-mono text-[0.7rem] font-bold text-c1">Navigation</span>
              <button onClick={() => setOpen(false)} className="text-aws-muted hover:text-aws-text transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M14 4L4 14M4 4l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-5">
              {navDomains.map((domain) => (
                <div key={domain.href}>
                  <a
                    href={domain.href}
                    onClick={() => setOpen(false)}
                    className={`block font-space-mono text-[0.7rem] font-bold uppercase tracking-widest mb-2 ${domain.colorClass}`}
                  >
                    {domain.label}
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`font-space-mono text-[0.65rem] px-2.5 py-1 rounded-full border transition-all hover:bg-white/6 ${item.className}`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function PageLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`font-space-mono text-[0.6rem] uppercase tracking-widest px-2 py-1 rounded-md border transition-all whitespace-nowrap ${
        active
          ? 'text-aws-text border-aws-border bg-white/8'
          : 'text-aws-muted border-transparent hover:text-aws-text hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  )
}
