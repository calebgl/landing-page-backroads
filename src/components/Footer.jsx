import PageLink from "./PageLink";
import { pageLinks } from "../data";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => (
          <PageLink
            key={pageLink.href}
            pageLink={pageLink}
            className="footer-link"
          />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{year}</span>. all rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
