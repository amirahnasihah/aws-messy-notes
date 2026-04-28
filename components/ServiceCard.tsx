import { ServiceCard as ServiceCardData, ColorCategory, categoryStyles } from '@/data/awsServices'
import Link from 'next/link'

interface ServiceCardProps {
  service: ServiceCardData
  category: ColorCategory
}

export default function ServiceCard({ service, category }: ServiceCardProps) {
  const styles = categoryStyles[category]

  return (
    <div className="relative overflow-hidden bg-aws-card border border-aws-border rounded-xl px-5 py-4 mb-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 group">
      {/* left accent bar */}
      <div className={`absolute top-0 left-0 w-[3px] h-full ${styles.accent}`} />

      {/* top row: name + mnemonic */}
      <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
        <div>
          <span className={`font-space-mono text-[1rem] font-bold ${styles.title}`}>{service.shortName}</span>
          <span className="font-space-mono text-[0.68rem] text-aws-muted ml-2">{service.fullName}</span>
        </div>
        <span className="text-[0.72rem] text-aws-muted italic shrink-0">{service.ingat}</span>
      </div>

      {/* one-liner purpose */}
      <p className="text-[0.82rem] text-aws-text/80 mb-3 leading-snug">{service.gunaUntuk}</p>

      {/* storage tiers summary — show first 3 lines only */}
      {service.storageDetails && (
        <div className="mb-3 space-y-0.5">
          {service.storageDetails.split('\n').slice(0, 3).map((line) => {
            const [tier, ...rest] = line.split('→')
            return (
              <p key={line} className="text-[0.75rem] leading-snug">
                <span className={`font-space-mono font-bold ${styles.title}`}>{tier.trim()}</span>
                {rest.length > 0 && <span className="text-aws-muted"> → {rest.join('→').trim()}</span>}
              </p>
            )
          })}
          {service.storageDetails.split('\n').length > 3 && (
            <Link href="/learn" className="font-space-mono text-[0.62rem] text-aws-muted hover:text-aws-text transition-colors">
              +{service.storageDetails.split('\n').length - 3} more → Deep Notes
            </Link>
          )}
        </div>
      )}

      {/* keywords */}
      <div className="flex flex-wrap gap-1.5">
        {service.keywords.map((kw) => (
          <span key={kw} className={`rounded-full px-2.5 py-0.5 text-[0.63rem] font-space-mono border ${styles.keyword}`}>
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
