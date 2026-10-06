import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja11.jpg'

export default function StrategyPolicy() {
  return (
    <ServicePage
      current="Strategy & Policy Development"
      eyebrow="Strategy & Policy Development"
      title="Organisational Development &"
      titleEm="Culture Change."
      intro="Supporting organizations in crafting governance policies, institutional strategies, and operational frameworks that are coherent, achievable, and genuinely aligned to their vision and mandate."
      img={imgSrc}
      sections={[
        {
          title: 'About This Service',
          body: 'Governance GOLD with Karanja JN facilitates strategic planning and drafts governance policies that are genuinely aligned to your institutional mandate. We draw deep inspiration from the Bible and blend inspiration with strategy to shape institutions built for lasting impact.',
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