import { SectionLabel } from './SectionLabel'

const values = [
  ['Industry Experience', 'Practical industry exposure that informs our approach to every requirement.'],
  ['Professional Approach', 'Clear communication and a considered way of working, from the outset.'],
  ['Commitment to Quality', 'A focus on workmanship and care in the details that matter.'],
  ['Reliable Execution', 'An emphasis on planning, coordination and responsible project delivery.'],
  ['Client-Focused Work', 'Your needs, expectations and vision at the centre of the conversation.'],
  ['Attention to Detail', 'A careful approach to the small decisions that shape the bigger picture.'],
]

export function WhyChooseUs() {
  return <section className="section why" aria-labelledby="why-title"><div className="container"><div className="section-heading reveal"><div><SectionLabel number="05">THE WAY WE WORK</SectionLabel><h2 id="why-title">Why Work <span>With Us?</span></h2></div><p>Good construction begins with the right principles.<br />These are the values that guide our work.</p></div><div className="values-grid">{values.map(([title, description], i) => <article className="value-item reveal" key={title}><span className="value-number">0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
}
