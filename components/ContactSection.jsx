"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
  { platform: "Instagram", handle: "@sangam_heritage", icon: "📷", color: "#E1306C" },
  { platform: "Twitter / X", handle: "@sangam_network", icon: "𝕏", color: "#1DA1F2" },
  { platform: "Facebook", handle: "SANGAM Agricultural Heritage", icon: "f", color: "#4267B2" },
  { platform: "YouTube", handle: "SANGAM Talks", icon: "▶", color: "#FF0000" },
  { platform: "LinkedIn", handle: "SANGAM Network", icon: "in", color: "#0A66C2" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__inner">
        {/* Left – info & social */}
        <div className={`contact__info ${visible ? "contact__info--in" : ""}`}>
          <div className="section-badge">
            <span className="section-badge__dot section-badge__dot--amber" />
            Contact & Connect
          </div>

          <h2 className="contact__heading">
            Reach Out,<br />
            <em>Join the Conversation</em>
          </h2>

          <p className="contact__body">
            Whether you want to partner, contribute, visit a member museum, or simply learn more
            about SANGAM's work — we'd love to hear from you.
          </p>

          <div className="contact__details">
            <div className="contact__detail-row">
              <span className="contact__detail-icon">📧</span>
              <div>
                <span className="contact__detail-label">Email</span>
                <a href="mailto:info@sangam-heritage.org" className="contact__detail-value">
                  info@sangam-heritage.org
                </a>
              </div>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-icon">🌐</span>
              <div>
                <span className="contact__detail-label">Website</span>
                <span className="contact__detail-value">sangam-heritage.org</span>
              </div>
            </div>
            <div className="contact__detail-row">
              <span className="contact__detail-icon">📍</span>
              <div>
                <span className="contact__detail-label">Network</span>
                <span className="contact__detail-value">South Asia · 8 Countries</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="contact__social-heading">Follow SANGAM</div>
          <div className="contact__socials">
            {socialLinks.map((s, i) => (
              <a key={i} href="#" className="social-link" style={{ "--sc": s.color }}>
                <span className="social-link__icon">{s.icon}</span>
                <div className="social-link__text">
                  <span className="social-link__platform">{s.platform}</span>
                  <span className="social-link__handle">{s.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right – contact form */}
        <div className={`contact__form-wrap ${visible ? "contact__form-wrap--in" : ""}`}>
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">🌾</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. The SANGAM team will be in touch with you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="form-row form-row--2">
                <div className="form-field">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Subject</label>
                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership enquiry</option>
                  <option value="partnership">Partnership proposal</option>
                  <option value="fellowship">Fellowship / Internship</option>
                  <option value="exhibition">Exhibition request</option>
                  <option value="media">Media enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell us about yourself and how you'd like to engage with SANGAM..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8L14 8M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
