import './Projects.css';
import { PROJECTS } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">03 · Projects</p>
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-header">
              <span className="project-icon">{p.icon}</span>
              <div className="project-links">
                <a href={p.demo} target="_blank" rel="noreferrer">Demo ↗</a>
                <a href={p.repo} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="skill-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
