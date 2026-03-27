import React, { useEffect, useRef } from "react";
import "./Hero.css";

/* ============================================================
   HERO SECTION COMPONENT
   Background image path: /images/hero.jpg
   Replace the src in the <img> tag below to update the hero image.
   ============================================================ */

export default function Hero() {
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
            Elite Sports Rehabilitation
          </div>

          <h1 className="hero-headline">
            <span className="hero-line hero-line-1">Recover.</span>
            <span className="hero-line hero-line-2">Perform.</span>
            <span className="hero-line hero-line-3 accent-text">Dominate.</span>
          </h1>

          <p className="hero-description">
            Professional sports injury rehabilitation, recovery programs, and
            performance enhancement tailored to every athlete. Your comeback
            starts here.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">
                500<span className="stat-plus">+</span>
              </span>
              <span className="stat-label">Athletes Treated</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">
                98<span className="stat-plus">%</span>
              </span>
              <span className="stat-label">Recovery Rate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">
                2<span className="stat-plus">+</span>
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Book a Session</span>
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
              <span>View Services</span>
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
                <strong>Elite Certified</strong>
                <span>Sports Specialist</span>
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
                <strong>Next-Level</strong>
                <span>Recovery Plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
