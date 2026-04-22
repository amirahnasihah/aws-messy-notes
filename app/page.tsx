import { domains } from '@/data/awsServices'
import Nav from '@/components/Nav'
import DomainHeader from '@/components/DomainHeader'
import Section from '@/components/Section'

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="max-w-[920px] mx-auto px-4 pt-[calc(3.5rem+1.5rem)] pb-16">
        {domains.map((domain, index) => (
          <div key={domain.id}>
            {index > 0 && (
              <div className="relative my-12 border-t-2 border-aws-border">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-c6 to-c5" />
              </div>
            )}

            <DomainHeader domain={domain} />

            {domain.sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>
        ))}

        <footer className="text-center font-space-mono text-[0.65rem] text-aws-muted pt-6 border-t border-aws-border">
          AWS SAA-C03 · Domain 3 &amp; 4 · Study Reference · Good luck! 💪
        </footer>
      </main>
    </>
  )
}
