import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">// Hello, world!</p>
          <h1 className="hero-name">Shin Khant Soe Moe</h1>
          <p className="hero-title">
            CS Graduate &amp; <span>Full-Stack Developer</span>
          </p>
          <p className="hero-bio">
            I build clean, performant software — from thoughtful UIs to scalable
            back-end systems. Currently open to full-time roles.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img src="/photo.png" alt="Profile photo" className="hero-photo" />
        </div>
      </div>
      <div className="hero-scroll">
        <span className="scroll-line" />
        scroll to explore
      </div>
    </section>
  );
}
