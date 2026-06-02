import './Navbar.css';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">&lt;YourName /&gt;</a>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
