import './About.css';

export default function About() {
  return (
    <section id="about">
      <p className="section-label">01 · About</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <span>Computer Science graduate</span> passionate about
            building software that solves real problems. I thrive across the
            full stack — from pixel-perfect frontends to distributed back-end
            services.
          </p>
          <p>
            During my degree I focused on <span>algorithms, systems
            programming, and machine learning</span>. Outside of work I enjoy
            contributing to open-source, competitive programming, and tinkering
            with side projects.
          </p>
          <p>
            I'm currently looking for a <span>software engineering role</span>{' '}
            where I can grow alongside a strong team and ship impactful products.
          </p>
        </div>
        <div className="about-avatar">🧑‍💻</div>
      </div>
    </section>
  );
}
