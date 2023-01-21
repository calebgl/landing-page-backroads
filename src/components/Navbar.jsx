import { Icon } from "@iconify/react";
import { pageLinks, socialLinks } from "../data";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="nav-header">
            <a href="#home" className="nav-logo">
              <Icon icon="carbon:logo-react" />
            </a>
            <button type="button" className="nav-toggle" id="nav-toggle">
              <Icon icon="mdi:dots-vertical" />
            </button>
          </div>
          <ul id="nav-links" className="nav-links">
            {pageLinks.map((pageLink) => (
              <li key={pageLink.href}>
                <a href={pageLink.href} className="nav-link">
                  {pageLink.text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.icon}>
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon"
                >
                  <Icon icon={socialLink.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
