import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja14.jpg'

export default function LeadershipCoaching() {
  return (
    <ServicePage
      current="Leadership Coaching"
      eyebrow="Leadership Coaching"
      title="Purpose-Driven Leadership &"
      titleEm="Personal Effectiveness."
      intro="One-on-one and cohort coaching for senior executives, directors, and emerging leaders — grounded in professional excellence and faith-based character formation."
      img={imgSrc}
      sections={[
        {
          title: 'About This Service',
          body: 'Governance GOLD with Karanja JN empowers leaders to build strong institutions, cultivate moral authority, and pursue destinies that influence generations. Through transformative insights, practical frameworks, and reflective stories, the platform blends inspiration with strategy to shape leaders who serve with conviction and lead with clarity.',
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