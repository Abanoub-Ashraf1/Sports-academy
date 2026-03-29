import React from "react";
import "./About.css";
import { useLanguage } from "../../contexts/LanguageProvider";

const icons = ["🏅", "⚡", "🩺", "🔬"];

export default function About() {
  const { t } = useLanguage();
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
                {t("about.exp_label")
                  .split("\\n")
                  .map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx === 0 && <br />}
                    </React.Fragment>
                  ))}
              </span>
            </div>
          </div>

          {/* Decorative lines */}
          <div className="about-deco-line about-deco-line-1" />
          <div className="about-deco-line about-deco-line-2" />
        </div>

        {/* ---- Content Side ---- */}
        <div className="about-content">
          <div className="section-tag">{t("about.tag")}</div>

          <h2 className="section-title" style={{ textAlign: "left" }}>
            {t("about.title")}
          </h2>

          <p className="about-text">{t("about.p1")}</p>
          <p className="about-text">{t("about.p2")}</p>

          <div className="about-highlights">
            {t("about.highlights").map((label, i) => (
              <div className="highlight-item" key={i}>
                <span className="highlight-icon">{icons[i]}</span>
                <span className="highlight-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="#contact" className="btn-primary">
              <span>{t("cta.start_recovery")}</span>
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
              <span>{t("cta.our_services")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
