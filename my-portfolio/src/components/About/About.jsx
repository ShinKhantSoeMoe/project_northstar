import './About.css';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <span>Computer Science graduate</span> from Newcastle University, 
            with a predicted first-class degree and a strong focus on <span>game engineering </span> 
            and full-stack <span>software development</span>.
            I have hands-on experience building complex game systems, 
            conducting HCI research, and deploying cloud-native applications end-to-end.
          </p>
          <p>
            Alongside my studies, I co-founded Newcastle University's <span>Game Development Society</span>, 
            where I led workshops and events for 50+ members over two years.
             I thrive in collaborative environments and am drawn to roles where 
             technical depth and creative problem-solving intersect.
          </p>
        </div>
      </div>
    </section>
  );
}
