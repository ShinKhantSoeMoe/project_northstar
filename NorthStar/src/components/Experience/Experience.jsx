import './Experience.css';
import { EXPERIENCE } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label">04 · Experience</p>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="timeline">
        {EXPERIENCE.map((e) => (
          <div className="timeline-item" key={e.role}>
            <p className="timeline-date">{e.date}</p>
            <p className="timeline-role">{e.role}</p>
            <p className="timeline-company">{e.company}</p>
            <p className="timeline-desc">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
