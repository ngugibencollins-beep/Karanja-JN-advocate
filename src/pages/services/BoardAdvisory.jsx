import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja13.jpg'

export default function BoardAdvisory() {
  return (
    <ServicePage
      current="Board Advisory Services"
      eyebrow="Board Advisory Services"
      title="Boards, Executives &"
      titleEm="Strategic Leadership Effectiveness."
      intro="Strategic advisory support that helps boards navigate complexity, improve performance, and fulfil their governance mandate with confidence and integrity."
      img={imgSrc}
      sections={[
        {
          title: 'About This Service',
          body: 'Governance GOLD with Karanja JN offers board advisory grounded in the conviction that leadership is a calling and governance is a stewardship. Our work draws deep inspiration from the Bible, recognising it as a rich source of timeless wisdom, and demonstrates how biblical principles can be practically applied to governance and strategic decision-making in contemporary institutions.',
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