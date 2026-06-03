import { useState } from 'react';
import './Contact.css';

const SOCIALS = [
  { icon: '🐙', label: 'github.com/ShinKhantSoeMoe', href: 'https://github.com/ShinKhantSoeMoe' },
  { icon: '💼', label: 'linkedin.com/in/shin-khant-soe-moe-11a1192a3', href: 'https://www.linkedin.com/in/shin-khant-soe-moe-11a1192a3/' },
  { icon: '✉️', label: 'shinkhantsoemoe05@email.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/mzdqbeyv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="social-links">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-icon">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Hi! I'd like to talk about..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            {sent ? '✓ Sent!' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
