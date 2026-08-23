"use client";
import { useEffect, useRef } from "react";
import { Globe, Mail, MapPin, ArrowRight } from "lucide-react";

const advisors = [
  {
    name: "Vijay Pratap Singh Aditya",
    role: "Co-Founder — CEO, The Heritage Foundation / EKgaon Technologies, New Delhi",
    email: "vijay.aditya@gmail.com",
  },
  {
    name: "Surajit Sarkar",
    role: "Co-Founder — Associate Professor, Centre for Community Knowledge, Ambedkar University Delhi; President, Oral History Association of India; Vice-President, AIMA",
    email: "surajit.sarkar@gmail.com",
  },
  {
    name: "Nerupama Modwel",
    role: "Co-Founder — Principal Director, ICH Division, INTACH",
    email: "intangibleheritage1@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact contact-page" ref={ref}>
      <div className="container">
        <div className="contact__inner reveal visible">
          <div className="contact__content">
            <div className="tag-badge on-light">Contact</div>
            <h2 className="display-lg contact__headline">Reach out to<br /><em>SANGAM</em></h2>
            <p className="body-md contact__desc">
              We would love to hear from you. Whether you are a museum wanting to join the network,
              a researcher with a question, a filmmaker interested in the Film Festival, a student
              looking for an internship or simply someone who cares about agricultural heritage.
            </p>

            <div className="contact__section" style={{ marginTop: "1rem" }}>
              <div className="contact__section-title">Reach out to us</div>
            </div>

            <div className="contact__info-list" style={{ marginTop: "1.2rem" }}>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box terracotta"><Mail size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">General enquiries</span>
                  <a href="mailto:info@sangam.heritage.org" className="contact__info-value">info@sangam.heritage.org</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box"><Globe size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">Website</span>
                  <a href="https://sangam.asia" target="_blank" rel="noopener noreferrer" className="contact__info-value">sangam.asia</a>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon icon-box gold"><MapPin size={17} strokeWidth={2} /></div>
                <div>
                  <span className="contact__info-label">Postal address</span>
                  <span className="contact__info-value" style={{ display: "block", fontWeight: 600 }}>
                    SANGAM — South Asian Network of Grassroots Agricultural Museums<br />
                    Hosted by The Heritage Foundation<br />
                    New Delhi — 110049, India
                  </span>
                </div>
              </div>
            </div>

            <div className="contact__section">
              <div className="contact__section-title">Advisory Team</div>
              <div className="contact__socials contact__socials--stacked">
                {advisors.map((a, i) => (
                  <a key={i} href={`mailto:${a.email}`} className="social-row social-row--contact">
                    <div className="social-row__icon"><Mail size={16} strokeWidth={2} /></div>
                    <div>
                      <div className="social-row__name">{a.name}</div>
                      <div className="social-row__handle">{a.role}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact__panel contact__panel--minimal">
            <div className="contact__mini-card">
              <div className="contact__mini-card-label">Network focus</div>
              <h3>Preserving living agricultural heritage across South Asia.</h3>
              <p>
                From museum collections and oral histories to field documentation and public conversations,
                SANGAM brings together communities, institutions, and practitioners working with food,
                memory, and land.
              </p>
            </div>

            <div className="contact__mini-card contact__mini-card--soft">
              <div className="contact__mini-card-label">How we collaborate</div>
              <ul className="contact__list">
                <li>Museum and heritage institutions</li>
                <li>Researchers and oral historians</li>
                <li>Students and emerging practitioners</li>
                <li>Filmmakers and cultural collaborators</li>
              </ul>
              <a href="mailto:info@sangam.heritage.org" className="contact__cta-link">
                Send an enquiry <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
