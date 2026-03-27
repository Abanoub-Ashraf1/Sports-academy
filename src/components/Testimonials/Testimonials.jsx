import React, { useState } from "react";
import "./Testimonials.css";

/* ============================================================
   TESTIMONIALS SECTION COMPONENT
   Profile image paths: /images/testimonial-1.jpg, etc.
   ============================================================ */

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Professional Footballer",
    avatar: "/images/testimonial-1.jpg",
    initials: "AH",
    rating: 5,
    text: "After my ACL surgery, I thought my season was over. NSA got me back on the field in record time. Their rehabilitation protocol was second to none — precise, progressive, and personalized.",
  },
  {
    id: 2,
    name: "Sara El-Sayed",
    role: "National Sprinter",
    avatar: "/images/testimonial-2.jpg",
    initials: "SE",
    rating: 5,
    text: "The performance training at NSA took my sprint times to a new level. The combination of strength work and biomechanical analysis was exactly what I needed to qualify for nationals.",
  },
  {
    id: 3,
    name: "Karim Mostafa",
    role: "Basketball Player",
    avatar: "/images/testimonial-3.jpg",
    initials: "KM",
    rating: 5,
    text: "I had a chronic knee issue that three other clinics couldn't fix. Within 8 weeks at NSA, I was pain-free. The attention to detail and genuine care from the team is unmatched.",
  },
  {
    id: 4,
    name: "Laila Ibrahim",
    role: "Competitive Swimmer",
    avatar: "/images/testimonial-4.jpg",
    initials: "LI",
    rating: 5,
    text: "The shoulder mobility program they designed for me was transformative. My stroke efficiency improved dramatically, and I finally have the power and range I've been working toward.",
  },
  {
    id: 5,
    name: "Omar Fathy",
    role: "Amateur Martial Artist",
    avatar: "/images/testimonial-5.jpg",
    initials: "OF",
    rating: 5,
    text: "I came in with a hamstring tear that had been bothering me for months. NSA diagnosed it properly, built a targeted plan, and I returned to training stronger than before the injury.",
  },
  {
    id: 6,
    name: "Nour Ashraf",
    role: "Cross-Country Runner",
    avatar: "/images/testimonial-6.jpg",
    initials: "NA",
    rating: 5,
    text: "The holistic approach at NSA is what sets them apart. It's not just about the injury — they look at your movement patterns, training habits, and goals to build a complete care plan.",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section
      id="testimonials"
      className="testimonials section-padding animate-section"
    >
      <div className="testimonials-bg" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Client Stories</div>
          <h2 className="section-title">
            What Athletes <span>Say</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from real athletes who trusted NSA to rebuild,
            strengthen, and elevate their performance.
          </p>
          <div className="accent-line" />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
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
