import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello!</p>
          <h1 className="hero-name">Shin Khant Soe Moe</h1>
          <p className="hero-title">
           <span>Software</span> &amp; <span> Game Developer</span>
          </p>
          <p className="hero-bio">
            Computer Science graduate from Newcastle University, with a strong focus on game engineering and full-stack software development.
          </p>
          <div className="hero-cta hero-cta-desktop">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img src="/photo.png" alt="Profile photo" className="hero-photo" />
        </div>
      </div>
      <div className="hero-cta hero-cta-mobile">
        <a href="#projects" className="btn btn-primary">View My Projects</a>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>
    </section>
  );
}
