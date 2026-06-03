import './Skills.css';
import { SKILLS } from '../../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div className="skill-card" key={s.category}>
            <div className="skill-card-icon">{s.icon}</div>
            <h3>{s.category}</h3>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
