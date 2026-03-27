import React from "react";
import "./About.css";

const highlights = [
  { icon: "🏅", label: "Certified Physiotherapist" },
  { icon: "⚡", label: "Sports Performance Coach" },
  { icon: "🩺", label: "Injury Assessment Expert" },
  { icon: "🔬", label: "Evidence-Based Methods" },
];

export default function About() {
  return (
    <section id="about" className="about section-padding animate-section">
      <div className="about-bg-accent" />
      <div className="container about-container">
        {/* ---- Image Side ---- */}
        <div className="about-image-side">
          <div className="about-image-frame">
            <img
              src="/images/about.jpeg"
              alt="Sports Rehabilitation Specialist"
              className="about-img"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            {/* Experience badge */}
            <div className="about-exp-badge">
              <span className="exp-number">2+</span>
              <span className="exp-label">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Decorative lines */}
          <div className="about-deco-line about-deco-line-1" />
          <div className="about-deco-line about-deco-line-2" />
        </div>

        {/* ---- Content Side ---- */}
        <div className="about-content">
          <div className="section-tag">About NSA</div>

          <h2 className="section-title" style={{ textAlign: "left" }}>
            Your Trusted <span>Rehabilitation</span> & Performance Hub
          </h2>

          <p className="about-text">
            National Sports Academy is a premier sports injury rehabilitation
            and performance center committed to helping athletes at every level
            recover faster, move better, and perform at their peak.
          </p>
          <p className="about-text">
            Led by certified physiotherapists and sports scientists, our team
            combines cutting-edge diagnostic tools with personalized recovery
            protocols. Whether you're recovering from a serious injury or
            optimizing your athletic performance, we design science-backed
            programs that get results.
          </p>

          <div className="about-highlights">
            {highlights.map((item, i) => (
              <div className="highlight-item" key={i}>
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-label">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="#contact" className="btn-primary">
              <span>Start Your Recovery</span>
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
              <span>Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
