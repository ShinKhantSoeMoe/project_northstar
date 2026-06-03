import './Experience.css';
import { EXPERIENCE } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {EXPERIENCE.map((e) => (
          <div className="timeline-item" key={e.role}>
            <div className="timeline-header">
              <div>
                <p className="timeline-role">{e.role}</p>
                <p className="timeline-company">{e.company}</p>
                {e.link && (
                  <a href={e.link.url} target="_blank" rel="noreferrer" className="timeline-link">
                    {e.link.label} ↗
                  </a>
                )}
              </div>
              <p className="timeline-date">{e.date}</p>
            </div>
            <ul className="timeline-bullets">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
