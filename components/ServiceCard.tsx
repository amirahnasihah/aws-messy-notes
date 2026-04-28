import { ServiceCard as ServiceCardData, ColorCategory, categoryStyles } from '@/data/awsServices'

interface ServiceCardProps {
  service: ServiceCardData
  category: ColorCategory
}

export default function ServiceCard({ service, category }: ServiceCardProps) {
  const styles = categoryStyles[category]

  return (
    <div className="relative overflow-hidden bg-aws-card border border-aws-border rounded-xl p-5 mb-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/12">
      {/* left accent bar */}
      <div className={`absolute top-0 left-0 w-[3px] h-full rounded-l-xl ${styles.accent}`} />

      {/* header row */}
      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
        <div className="flex flex-col gap-0.5">
          <span className="font-space-mono text-base font-bold text-white">{service.shortName}</span>
          <span className="font-space-mono text-[0.72rem] text-aws-muted">{service.fullName}</span>
        </div>
        <span className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-[0.75rem] text-slate-300 italic">
          {service.ingat}
        </span>
      </div>

      {/* info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
        <InfoBlock label="Guna Untuk" value={service.gunaUntuk} />
        <InfoBlock label="Fungsi" value={service.fungsi} />

        {service.contohGuna && (
          <InfoBlock label="Contoh Guna" value={service.contohGuna} fullWidth />
        )}

        {service.storageDetails && (
          <div className="col-span-full bg-white/3 rounded-lg px-3 py-2">
            <p className="font-space-mono text-[0.58rem] uppercase tracking-[0.12em] text-aws-muted mb-2">
              {service.detailsLabel ?? 'Storage Classes (makin jarang access = makin murah)'}
            </p>
            <div className="text-[0.8rem] text-aws-text leading-relaxed space-y-0.5">
              {service.storageDetails.split('\n').map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        )}

        {service.scenario && (
          <div className={`col-span-full rounded-lg px-3 py-2 border ${styles.scenario}`}>
            <p className="font-space-mono text-[0.58rem] uppercase tracking-[0.12em] text-c6/70 mb-1">
              💡 Scenario Use Case
            </p>
            <p className="text-[0.8rem] text-aws-text leading-relaxed">{service.scenario}</p>
          </div>
        )}
      </div>

      {/* keywords */}
      <div className="flex flex-wrap gap-1.5">
        {service.keywords.map((kw) => (
          <span
            key={kw}
            className={`rounded-full px-2.5 py-0.5 text-[0.67rem] font-space-mono border ${styles.keyword}`}
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}

function InfoBlock({ label, value, fullWidth = false }: { label: string; value: string; fullWidth?: boolean }) {
  return (
    <div className={`bg-white/3 rounded-lg px-3 py-2 ${fullWidth ? 'col-span-full' : ''}`}>
      <p className="font-space-mono text-[0.58rem] uppercase tracking-[0.12em] text-aws-muted mb-1">{label}</p>
      <p className="text-[0.8rem] text-aws-text leading-snug">{value}</p>
    </div>
  )
}
