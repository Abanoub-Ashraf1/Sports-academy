import React from "react";
import "./Services.css";

/* ============================================================
   SERVICES SECTION COMPONENT
   Service card icons use SVG inline — replace or customize freely.
   ============================================================ */

const services = [
  {
    id: 1,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Injury Assessment",
    description:
      "Comprehensive biomechanical and clinical evaluation to accurately diagnose sports injuries and create targeted treatment pathways.",
    tag: "Diagnostic",
  },
  {
    id: 2,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Rehabilitation Programs",
    description:
      "Structured, evidence-based recovery programs designed to restore full function following surgical or non-surgical injuries.",
    tag: "Recovery",
  },
  {
    id: 3,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sports Recovery",
    description:
      "Advanced recovery modalities including electrotherapy, manual therapy, and hydrotherapy to accelerate your return to play.",
    tag: "Performance",
  },
  {
    id: 4,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Performance Improvement",
    description:
      "Scientifically designed training regimens to elevate speed, agility, power, and endurance for competitive athletes.",
    tag: "Training",
  },
  {
    id: 5,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    title: "Strength & Mobility",
    description:
      "Functional strength training and flexibility protocols to rebuild resilience, prevent re-injury, and improve athletic longevity.",
    tag: "Functional",
  },
  {
    id: 6,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Personal Consultation",
    description:
      "One-on-one expert consultations to review your goals, history, and design a fully personalized care and training plan.",
    tag: "Consultation",
  },
];

export default function Services() {
  return (
    <section id="services" className="services section-padding animate-section">
      <div className="services-bg-grid" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">
            World-Class <span>Services</span>
          </h2>
          <p className="section-subtitle">
            From injury diagnosis to elite performance training — comprehensive
            care designed for athletes who refuse to settle.
          </p>
          <div className="accent-line" />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <div className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="service-card-inner">
        <div className="service-tag-label">{service.tag}</div>
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>
        <div className="service-arrow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <span>Learn more</span>
        </div>
      </div>
      <div className="service-card-glow" />
    </div>
  );
}
