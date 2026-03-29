import React, { useState } from "react";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageProvider";

const contactInfo = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.23 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    labelKey: "contact.phone",
    value: "+20 10 21106104",
    href: "tel:+201021106104",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    labelKey: "contact.email",
    value: "mohamedkorany.901@gmail.com",
    href: "mailto:mohamedkorany.901@gmail.com",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    labelKey: "contact.location",
    value: "Fayoum, Egypt",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const { t } = useLanguage();

  return (
    <section id="contact" className="contact section-padding animate-section">
      <div className="contact-bg" />

      <div className="container contact-container">
        {/* ---- Left Side ---- */}
        <div className="contact-info-side">
          <div className="section-tag">{t("contact.tag")}</div>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            {t("contact.title")}
          </h2>
          <p className="contact-desc">{t("contact.desc")}</p>

          <div className="contact-items">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.href} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <span className="contact-item-label">{t(item.labelKey)}</span>
                  <span className="contact-item-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/+201021106104"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("contact.whatsapp")}
          </a>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ---- Form Side ---- */}
        <div className="contact-form-side">
          <div className="form-card">
            {!submitted ? (
              <>
                <div className="form-header">
                  <h3 className="form-title">
                    {t("contact.form.request_title")}
                  </h3>
                  <p className="form-subtitle">
                    {t("contact.form.request_sub")}
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        {t("contact.form.full_name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder={t("contact.form.full_name")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        {t("contact.form.phone_number")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+20 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t("contact.form.email_address")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t("contact.form.service_needed")}
                    </label>
                    <select
                      name="service"
                      className="form-input form-select"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">
                        {t("contact.form.select_service")}
                      </option>
                      <option value="assessment">
                        {t("contact.form.options.assessment")}
                      </option>
                      <option value="rehab">
                        {t("contact.form.options.rehab")}
                      </option>
                      <option value="recovery">
                        {t("contact.form.options.recovery")}
                      </option>
                      <option value="performance">
                        {t("contact.form.options.performance")}
                      </option>
                      <option value="strength">
                        {t("contact.form.options.strength")}
                      </option>
                      <option value="consultation">
                        {t("contact.form.options.consultation")}
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t("contact.form.message_placeholder")}
                    </label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder={t("contact.form.message_placeholder")}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary form-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="btn-loading">
                        <span className="spinner" />
                        {t("contact.form.sending")}
                      </span>
                    ) : (
                      <>
                        <span>{t("cta.send_request")}</span>
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
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success">
                <div className="success-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>{t("contact.form.request_received")}</h3>
                <p>{t("contact.form.thank_you")}</p>
                <button
                  className="btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  {t("cta.send_another")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
