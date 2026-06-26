"use client";
import { useEffect, useRef, useState } from "react";

const socials = [
  { icon: "IG", name: "Instagram", handle: "@sangam_heritage" },
  { icon: "X", name: "Twitter / X", handle: "@sangam_network" },
  { icon: "FB", name: "Facebook", handle: "SANGAM Heritage" },
  { icon: "YT", name: "YouTube", handle: "SANGAM Talks" },
  { icon: "in", name: "LinkedIn", handle: "SANGAM Network" },
];

export default function Contact() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })); }
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <div className={`reveal${vis ? " visible" : ""}`}>
            <div className="event-badge on-light">Contact & Connect</div>
            <h2 className="display-lg contact__headline">Reach Out,<br /><em>Say Hello</em></h2>
            <p className="body-md contact__desc">
              Whether you want to partner, contribute, visit a member museum, or simply learn more
              about SANGAM's work — we'd love to hear from you.
            </p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon">📧</div>
                <div><span className="contact__info-label">Email</span><a href="mailto:info@sangam-heritage.org" className="contact__info-value">info@sangam-heritage.org</a></div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">🌐</div>
                <div><span className="contact__info-label">Website</span><span className="contact__info-value">sangam-heritage.org</span></div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div><span className="contact__info-label">Network</span><span className="contact__info-value">South Asia · 8 Countries</span></div>
              </div>
            </div>

            <div className="contact__social-label">Follow SANGAM</div>
            <div className="contact__socials">
              {socials.map((s, i) => (
                <a key={i} href="#" className="social-row">
                  <div className="social-row__icon">{s.icon}</div>
                  <div><div className="social-row__name">{s.name}</div><div className="social-row__handle">{s.handle}</div></div>
                </a>
              ))}
            </div>
          </div>

          <div className={`contact__form-box reveal reveal-delay-2${vis ? " visible" : ""}`}>
            {sent ? (
              <div className="form-success">
                <span className="form-success__icon">🌾</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. The SANGAM team will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Send a Message</h3>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="form-control" required>
                      <option value="">Select a subject</option>
                      <option value="membership">Membership enquiry</option>
                      <option value="partnership">Partnership proposal</option>
                      <option value="fellowship">Fellowship / Internship</option>
                      <option value="exhibition">Exhibition request</option>
                      <option value="media">Media enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control form-textarea" placeholder="Tell us about yourself and how you'd like to engage with SANGAM..." rows={5} required />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8L14 8M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
