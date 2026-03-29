import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Gallery.css";
import { useLanguage } from "../../contexts/LanguageProvider";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery-1.png",
    title: "Training Sessions",
    category: "Training",
  },
  {
    id: 2,
    src: "/images/gallery-2.png",
    title: "Rehabilitation Programs",
    category: "Rehab",
  },
  {
    id: 3,
    src: "/images/gallery-3.png",
    title: "Academy Facility",
    category: "Facility",
  },
  {
    id: 4,
    src: "/images/gallery-4.png",
    title: "Athletic Performance",
    category: "Performance",
  },
  {
    id: 5,
    src: "/images/gallery-5.png",
    title: "Expert Coaching",
    category: "Coaching",
  },
  {
    id: 6,
    src: "/images/gallery-6.png",
    title: "Recovery Sessions",
    category: "Recovery",
  },
  {
    id: 7,
    src: "/images/gallery-7.png",
    title: "Champion Moments",
    category: "Achievements",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const autoPlayRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex((index + galleryItems.length) % galleryItems.length);
      setTimeout(() => setIsTransitioning(false), 480);
    },
    [isTransitioning],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto play
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 4500);
    return () => clearInterval(autoPlayRef.current);
  }, [next]);

  const pauseAutoPlay = () => clearInterval(autoPlayRef.current);
  const resumeAutoPlay = () => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4500);
  };

  // Touch/swipe support
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  // Side items indices
  const prevIndex =
    (activeIndex - 1 + galleryItems.length) % galleryItems.length;
  const nextIndex = (activeIndex + 1) % galleryItems.length;

  return (
    <section id="gallery" className="gallery section-padding animate-section">
      <div className="gallery-bg" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t("gallery.tag")}</div>
          <h2 className="section-title">{t("gallery.title")}</h2>
          <p className="section-subtitle">{t("gallery.subtitle")}</p>
          <div className="accent-line" />
        </div>
      </div>

      {/* ---- Slider ---- */}
      <div
        className="slider-stage"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous card */}
        <div
          className="slider-card slider-card-side slider-card-prev"
          onClick={prev}
        >
          <GalleryCard item={galleryItems[prevIndex]} dim />
        </div>

        {/* Active card */}
        <div
          className={`slider-card slider-card-active ${isTransitioning ? "transitioning" : ""}`}
        >
          <GalleryCard item={galleryItems[activeIndex]} active />
        </div>

        {/* Next card */}
        <div
          className="slider-card slider-card-side slider-card-next"
          onClick={next}
        >
          <GalleryCard item={galleryItems[nextIndex]} dim />
        </div>

        {/* Navigation arrows */}
        <button
          className="slider-arrow slider-arrow-prev"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="slider-arrow slider-arrow-next"
          onClick={next}
          aria-label="Next"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ---- Dots ---- */}
      <div className="slider-dots">
        {galleryItems.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ---- Counter ---- */}
      <div className="slider-counter">
        <span className="counter-current">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="counter-sep">/</span>
        <span className="counter-total">
          {String(galleryItems.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

function GalleryCard({ item, active, dim }) {
  const [visible, setVisible] = useState(Boolean(active));
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (active) setVisible(true);
  }, [active]);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref, visible]);

  const placeholder =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  return (
    <div
      ref={ref}
      className={`gallery-card ${active ? "active" : ""} ${dim ? "dim" : ""}`}
    >
      <img
        src={visible ? item.src : placeholder}
        alt={item.title}
        className={`gallery-card-img ${loaded ? "loaded" : "loading"}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/hero.png";
        }}
      />

      {/* Overlay info */}
      <div className="gallery-card-overlay">
        <span className="gallery-card-category">{item.category}</span>
        <h3 className="gallery-card-title">{item.title}</h3>
      </div>
    </div>
  );
}
