import { useState } from 'react';
import './Contact.css';

const SOCIALS = [
  { icon: '🐙', label: 'github.com/yourhandle', href: 'https://github.com' },
  { icon: '💼', label: 'linkedin.com/in/yourhandle', href: 'https://linkedin.com' },
  { icon: '✉️', label: 'you@email.com', href: 'mailto:you@email.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <p className="section-label">05 · Contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>
            I'm actively looking for new opportunities. Whether you have a role,
            a project, or just want to connect — my inbox is open.
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
