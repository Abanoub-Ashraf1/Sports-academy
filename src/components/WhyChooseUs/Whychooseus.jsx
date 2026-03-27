import React from "react";
import "./WhyChooseUs.css";

/* ============================================================
   WHY CHOOSE US SECTION COMPONENT
   ============================================================ */

const features = [
  {
    number: "01",
    title: "Athlete-Centered Care",
    description:
      "Every program is built around your sport, position, and goals. We treat athletes as individuals, not diagnoses.",
  },
  {
    number: "02",
    title: "Evidence-Based Treatment",
    description:
      "Our protocols are rooted in the latest sports science research, ensuring the most effective and proven recovery outcomes.",
  },
  {
    number: "03",
    title: "State-of-the-Art Facility",
    description:
      "Equipped with modern rehabilitation technology, movement labs, and recovery suites built for elite performance.",
  },
  {
    number: "04",
    title: "Tailored Recovery Plans",
    description:
      "No cookie-cutter programs here. Each plan is custom-built after thorough assessment of your injury and performance history.",
  },
  {
    number: "05",
    title: "Holistic Approach",
    description:
      "We address the whole athlete — physical, mental, and nutritional elements of recovery and performance are all considered.",
  },
  {
    number: "06",
    title: "Ongoing Athlete Support",
    description:
      "Our commitment extends beyond sessions. Continuous monitoring, adjustments, and check-ins ensure lasting results.",
  },
];

const trustStats = [
  { value: "500+", label: "Athletes Recovered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years of Experience" },
  { value: "15+", label: "Sports Specializations" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us section-padding animate-section">
      <div className="why-us-bg" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why NSA</div>
          <h2 className="section-title">
            The NSA <span>Difference</span>
          </h2>
          <p className="section-subtitle">
            We go beyond standard rehabilitation — delivering a complete
            athletic care experience built on expertise, precision, and genuine
            athlete dedication.
          </p>
          <div className="accent-line" />
        </div>

        {/* Stats Bar */}
        <div className="trust-stats">
          {trustStats.map((stat, i) => (
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
        <p className="feature-desc">{feature.description}</p>
      </div>
    </div>
  );
}
