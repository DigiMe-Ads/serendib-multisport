import SectionHeading from '../../components/ui/SectionHeading'
import PartnerGroup from './PartnerGroup'
import { PARTNER_GROUPS } from '../../data/partners'

export default function PartnerDirectory() {
  return (
    <section className="bg-ink pb-28 sm:pb-36">
      <div className="container-x">
        <SectionHeading eyebrow="Together we race" title="Partners" className="mb-12" />
        {PARTNER_GROUPS.map((group, i) => (
          <PartnerGroup key={group.title} index={i} {...group} />
        ))}
      </div>
    </section>
  )
}
