import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useLanguage } from "../../contexts/LanguageProvider";

// navLabels will be read from translations inside component

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
              alt={t("logo.sub")}
              className="logo-img"
            />
            <div className="logo-text">
              <span className="logo-main">NSA</span>
              <span className="logo-sub">{t("logo.sub")}</span>
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
            <span>{t("cta.book_now")}</span>
          </a>

          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label="Toggle language"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>

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
              <span>{t("cta.book_session")}</span>
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
