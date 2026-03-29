import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { useLanguage } from "../../contexts/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;

      const parallaxEl = heroRef.current?.querySelector(".hero-image-wrap");
      if (parallaxEl) {
        parallaxEl.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Grid lines decoration */}
      <div className="hero-grid" />

      <div className="container hero-container">
        {/* ---- Left Content ---- */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            {t("hero.badge")}
          </div>

          <h1 className="hero-headline">
            <span className="hero-line hero-line-1">{t("hero.line1")}</span>
            <span className="hero-line hero-line-2">{t("hero.line2")}</span>
            <span className="hero-line hero-line-3 accent-text">
              {t("hero.line3")}
            </span>
          </h1>

          <p className="hero-description">{t("hero.description")}</p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">
                500<span className="stat-plus">+</span>
              </span>
              <span className="stat-label">{t("hero.stats_athletes")}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">
                98<span className="stat-plus">%</span>
              </span>
              <span className="stat-label">{t("hero.stats_recovery")}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">
                2<span className="stat-plus">+</span>
              </span>
              <span className="stat-label">{t("hero.stats_years")}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>{t("cta.book_session")}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn-outline">
              <span>{t("cta.view_services")}</span>
            </a>
          </div>
        </div>

        {/* ---- Right Image ---- */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <div className="hero-image-wrap">
              <img
                src="/images/hero.png"
                alt="Sports Rehabilitation Specialist"
                className="hero-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                onLoad={(e) => {
                  e.currentTarget.classList.add("loaded");
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Floating accent badges */}
            <div className="float-badge float-badge-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--accent)"
                stroke="none"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <strong>{t("hero.badges")[0].title}</strong>
                <span>{t("hero.badges")[0].subtitle}</span>
              </div>
            </div>

            <div className="float-badge float-badge-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-bright)"
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <div>
                <strong>{t("hero.badges")[1].title}</strong>
                <span>{t("hero.badges")[1].subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>{t("hero.scroll")}</span>
      </div>
    </section>
  );
}
