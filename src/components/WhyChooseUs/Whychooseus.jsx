import React from "react";
import "./WhyChooseUs.css";
import { useLanguage } from "../../contexts/LanguageProvider";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const trust = t("why.trust");
  const features = t("why.features");

  return (
    <section id="why-us" className="why-us section-padding animate-section">
      <div className="why-us-bg" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t("why.tag")}</div>
          <h2 className="section-title">{t("why.title")}</h2>
          <p className="section-subtitle">{t("why.subtitle")}</p>
          <div className="accent-line" />
        </div>

        {/* Stats Bar */}
        <div className="trust-stats">
          {trust.map((stat, i) => (
            <div className="trust-stat" key={i}>
              <span className="trust-stat-value">{stat.value}</span>
              <span className="trust-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-number">{feature.number}</div>
      <div className="feature-content">
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-desc">{feature.description ?? ""}</p>
      </div>
    </div>
  );
}
