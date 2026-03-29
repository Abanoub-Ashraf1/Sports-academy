import React, { useState } from "react";
import "./Testimonials.css";
import { useLanguage } from "../../contexts/LanguageProvider";

/* ============================================================
   TESTIMONIALS SECTION COMPONENT
   Profile image paths: /images/testimonial-1.jpg, etc.
   ============================================================ */

// Use translations for section header and a subset of testimonials

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(null);
  const { t } = useLanguage();
  const translatedTestimonials = t("testimonials.items");

  return (
    <section
      id="testimonials"
      className="testimonials section-padding animate-section"
    >
      <div className="testimonials-bg" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t("testimonials.tag")}</div>
          <h2 className="section-title">{t("testimonials.title")}</h2>
          <p className="section-subtitle">{t("testimonials.subtitle")}</p>
          <div className="accent-line" />
        </div>

        <div className="testimonials-grid">
          {translatedTestimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              testimonial={{
                ...item,
                avatar: `/images/testimonial-${(i % 6) + 1}.jpg`,
                initials: item.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join(""),
                rating: 5,
              }}
              isActive={activeIdx === i}
              onHover={() => setActiveIdx(i)}
              onLeave={() => setActiveIdx(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--accent-bright)" : "none"}
          stroke={i < rating ? "var(--accent-bright)" : "var(--text-muted)"}
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive, onHover, onLeave }) {
  return (
    <div
      className={`testimonial-card ${isActive ? "active" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="testimonial-quote-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002-.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002-.004z" />
        </svg>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="testimonial-text">{testimonial.text}</p>

      <div className="testimonial-author">
        {/* Profile avatar - replace image src with actual photo */}
        <div className="testimonial-avatar">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/academy_logo.jpeg";
            }}
          />
          <div className="avatar-initials">{testimonial.initials}</div>
        </div>
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}
