import { Icon } from "@iconify/react";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
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
              <PageLink
                key={pageLink.href}
                pageLink={pageLink}
                className="nav-link"
              />
            ))}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((socialLink) => (
              <SocialLink
                key={socialLink.href}
                socialLink={socialLink}
                className="nav-icon"
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
