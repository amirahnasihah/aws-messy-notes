import { navDomains } from '@/data/awsServices'

export default function Nav() {
  return (
    <nav className="nav-scroll fixed top-0 left-0 right-0 h-14 z-50 flex items-center gap-2 px-6 overflow-x-auto bg-aws-bg/92 backdrop-blur-md border-b border-aws-border">
      <span className="hidden sm:block font-space-mono text-[0.7rem] font-bold text-c1 whitespace-nowrap mr-3 pr-3 border-r border-aws-border shrink-0">
        AWS SAA-C03
      </span>

      {navDomains.map((domain, di) => (
        <div key={domain.href} className="flex items-center gap-2 shrink-0">
          {di > 0 && <span className="text-aws-border text-sm">·</span>}

          <a
            href={domain.href}
            className={`font-space-mono text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap px-2 py-1 rounded-md transition-all hover:bg-white/5 hover:text-aws-text border border-transparent ${domain.colorClass}`}
          >
            {domain.label}
          </a>

          <span className="text-aws-border text-sm">|</span>

          {domain.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-space-mono text-[0.62rem] whitespace-nowrap px-2 py-1 rounded-full transition-all hover:bg-white/6 border ${item.className}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  )
}
