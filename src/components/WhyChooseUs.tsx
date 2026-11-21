const values = [
  ['Industry Experience', 'Practical industry exposure that informs our approach to every requirement.'],
  ['Professional Approach', 'Clear communication and a considered way of working, from the outset.'],
  ['Commitment to Quality', 'A focus on workmanship and care in the details that matter.'],
  ['Reliable Execution', 'An emphasis on planning, coordination and responsible project delivery.'],
  ['Client-Focused Work', 'Your needs, expectations and vision at the centre of the conversation.'],
  ['Attention to Detail', 'A careful approach to the small decisions that shape the bigger picture.'],
]

export function WhyChooseUs() {
  return (
    <section id="values" className="section editorial-section" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className="reveal">Why work with us?</h2>
        <dl className="values-list">
          {values.map(([title, description]) => (
            <div key={title} className="reveal">
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
