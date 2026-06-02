import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        Designed &amp; Built by <span>Your Name</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
