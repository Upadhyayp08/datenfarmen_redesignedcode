import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { SafeIcon } from "../components/SafeIcon.jsx";
import { NAV } from "../content/nav.js";
import { SOLUTIONS } from "../content/solutions.js";
export function Header({ mobile, setMobile }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const loc = useLocation();
  const solutionsRef = useRef(null);

  useEffect(() => {
    setMobile(false);
    setMobileSolutionsOpen(false);
    setSolutionsOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSolutionsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Datenfarmen Centers home">
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
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV.map(([label, path]) => (
            <div
              key={path}
              className={label === "Solutions" ? "nav-parent" : ""}
              ref={label === "Solutions" ? solutionsRef : undefined}
              onMouseEnter={
                label === "Solutions" ? () => setSolutionsOpen(true) : undefined
              }
              onMouseLeave={
                label === "Solutions"
                  ? () => setSolutionsOpen(false)
                  : undefined
              }
            >
              {label === "Solutions" ? (
                <button
                  className={
                    "nav-link " +
                    (loc.pathname.startsWith("/solutions") ||
                    SOLUTIONS.some((s) => loc.pathname === s.path)
                      ? "active"
                      : "")
                  }
                  onClick={() => setSolutionsOpen((v) => !v)}
                  aria-expanded={solutionsOpen}
                >
                  Solutions <ChevronDown size={15} />
                </button>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    "nav-link " + (isActive ? "active" : "")
                  }
                >
                  {label}
                </NavLink>
              )}
              {label === "Solutions" && (
                <div
                  className={"mega-menu " + (solutionsOpen ? "open" : "")}
                  aria-hidden={!solutionsOpen}
                >
                  {SOLUTIONS.map((s) => {
                    return (
                      <Link key={s.path} to={s.path} className="mega-item">
                        <span className="icon-chip">
                          <SafeIcon icon={s.icon} size={16} />
                        </span>
                        <span>
                          <strong>{s.name}</strong>
                          <small>{s.desc}</small>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            className="button small secondary consultation-breathe"
            to="/contact"
          >
            Get a Consultation
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-label="Open navigation"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobile && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {NAV.filter(([l]) => l !== "Solutions").map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className="mobile-link"
                onClick={() => setMobile(false)}
              >
                {label}
              </NavLink>
            ))}
            <button
              type="button"
              className={`mobile-solutions-toggle ${
                mobileSolutionsOpen ? "open" : ""
              }`}
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              aria-expanded={mobileSolutionsOpen}
            >
              <span>Solutions</span>
              <ChevronDown size={18} />
            </button>
            <div
              className={`mobile-solutions-list ${
                mobileSolutionsOpen ? "open" : ""
              }`}
            >
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="mobile-link nested"
                  onClick={() => setMobile(false)}
                >
                  <span className="mobile-solution-icon">
                    <SafeIcon icon={s.icon} size={16} />
                  </span>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
