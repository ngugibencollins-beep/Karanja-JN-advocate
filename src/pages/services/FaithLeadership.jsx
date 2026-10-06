import ServicePage from '../../components/ServicePage'
import imgSrc from '../../assets/karanja4.jpg'

export default function FaithLeadership() {
  return (
    <ServicePage
      current="Faith-Based Leadership Programs"
      eyebrow="Faith-Based Leadership Programs"
      title="Faith, Mentorship &"
      titleEm="Intergenerational Leadership."
      intro="Integrating biblical stewardship, servant leadership, and ethical accountability into modern governance — for leaders who believe character drives institutions."
      img={imgSrc}
      sections={[
        {
          title: 'Our Conviction',
          body: 'At the core of Governance GOLD is a guiding principle drawn from Colossians 3:23–24: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." This commitment to wholehearted service defines our approach to leadership, governance, and faith-driven transformation.',
        },
        {
          title: 'Who This Is For',
          items: [
            'Faith Leaders and Church Institutions',
            'Boards of Directors and Trustees',
            'CEOs and Senior Executives',
            'Professionals and Managers',
            'Schools, Universities and Youth Organisations',
            'Public and Private Institutions',
          ],
        },
      ]}
    />
  )
}