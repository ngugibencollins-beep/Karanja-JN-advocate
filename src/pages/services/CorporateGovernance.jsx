import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja12.jpg'

export default function CorporateGovernance() {
  return (
    <ServicePage
      current="Corporate Governance Training"
      eyebrow="Corporate Governance Training"
      title="Boards, Executives &"
      titleEm="Strategic Leadership Effectiveness."
      intro="Practical training programs that equip board members, executives, and managers with the frameworks, knowledge, and mindset to govern their organizations effectively and ethically."
      img={imgSrc}
      sections={[
        {
          title: 'About This Service',
          body: 'Governance GOLD with Karanja JN is dedicated to equipping leaders with the wisdom, principles, and strategies to lead with integrity, clarity, and impact. Corporate governance training is grounded in the conviction that governance is a stewardship — and every leader must cultivate a life of purpose anchored in higher values.',
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