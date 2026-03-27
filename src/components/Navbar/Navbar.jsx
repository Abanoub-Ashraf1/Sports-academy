import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* ---- Logo ---- */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={() => handleNavClick("#hero")}
          >
            <img
              src="/images/academy_logo.jpeg"
              alt="National Sports Academy"
              className="logo-img"
            />
            <div className="logo-text">
              <span className="logo-main">NSA</span>
              <span className="logo-sub">National Sports Academy</span>
            </div>
          </a>

          {/* ---- Desktop Links ---- */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ---- CTA Button ---- */}
          <a
            href="#contact"
            className="navbar-cta btn-primary"
            onClick={() => handleNavClick("#contact")}
          >
            <span>Book Now</span>
          </a>

          {/* ---- Hamburger ---- */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ---- Mobile Menu ---- */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-link ${activeLink === link.href ? "active" : ""}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary mobile-cta"
              onClick={() => handleNavClick("#contact")}
            >
              <span>Book a Session</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
