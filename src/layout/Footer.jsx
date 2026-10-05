import { Link } from "react-router-dom";
import { SOLUTIONS } from "../content/solutions.js";
import { commonFooter } from "../content/site.js";
import { Newsletter } from "./Newsletter.jsx";
export function Footer() {
  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Solutions", "/solutions"],
    ["Locations", "/locations"],
    ["Pricing", "/pricing"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <img
              className="brand-logo"
              src="/logo-mark.png"
              alt="Datenfarmen Centers LLP logo"
            />
            <span className="brand-text">
              <strong>DATENFARMEN</strong>
              <em>CENTERS LLP</em>
            </span>
          </Link>
          <p>{commonFooter.tagline}</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-link-list">
            {quickLinks.map(([label, path]) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Our Solutions</h4>
          <div className="footer-link-list">
            {SOLUTIONS.map((s) => (
              <Link key={s.path} to={s.path}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>{commonFooter.address}</p>
          <a href="mailto:info@datenfarmen.com">{commonFooter.email}</a>
          <Newsletter />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Datenfarmen Centers LLP. All Rights Reserved.</span>
        <span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
