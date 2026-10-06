import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja16.jpg'

export default function ComplianceRisk() {
  return (
    <ServicePage
      current="Compliance & Risk Management"
      eyebrow="Compliance & Risk Management"
      title="Ethics, Values, Compliance &"
      titleEm="Institutional Integrity."
      intro="Helping organizations build robust compliance cultures and manage governance risks proactively — turning regulatory requirements into a genuine cultural commitment."
      img={imgSrc}
      sections={[
        {
          title: 'About This Service',
          body: 'Governance GOLD with Karanja JN helps organizations understand their regulatory environment, identify governance risk exposures, and build the internal systems and culture needed to manage them. We deliver institutional excellence — building systems of order, trust, and sustainable impact.',
        },
        {
          title: 'Who This Is For',
          items: [
            'Boards of Directors and Trustees',
            'CEOs and Senior Executives',
            'Professionals and Managers',
            'Public and Private Institutions',
            'Faith Leaders and Church Institutions',
            'Schools, Universities and Youth Organisations',
          ],
        },
      ]}
    />
  )
}