"use client";
import { useEffect, useRef, useState } from "react";

const festivalDays = [
  { label: "Day 1", date: "Dec 21", items: [
    { time: "9:00", text: "Inaugural ceremony & welcome address" },
    { time: "11:00", text: "Documentary screenings — Rice Heritage" },
    { time: "2:00", text: "Farmer storytelling circle" },
    { time: "5:00", text: "Folk music performance" },
  ]},
  { label: "Day 2", date: "Dec 22", items: [
    { time: "9:30", text: "Heritage documentation panel" },
    { time: "12:00", text: "Short film competition screenings" },
    { time: "3:00", text: "Museum curator roundtable" },
    { time: "6:00", text: "Evening cultural showcase" },
  ]},
  { label: "Day 3", date: "Dec 23", items: [
    { time: "10:00", text: "Closing documentary premiere" },
    { time: "1:00", text: "Awards & recognition ceremony" },
    { time: "3:30", text: "Closing remarks & next steps" },
    { time: "5:00", text: "Farewell harvest feast" },
  ]},
];

const cards = [
  { icon: "🖼️", badge: "Ongoing", cat: "Exhibition", title: "Pop-Up & Travelling Exhibitions", when: "Year-round", desc: "SANGAM produces travelling and pop-up exhibitions showcasing Agri Museum posters, artefacts, and photographic documentation.", location: "Pan-South Asia" },
  { icon: "🎙️", badge: "Ongoing", cat: "Talks Series", title: "SANGAM Expert Lecture Series", when: "Throughout the Year", desc: "Curated talks by historians, farmers, curators, and researchers on agricultural heritage topics.", location: "Online + In-Person" },
  { icon: "🏛️", badge: "Annual", cat: "Conference", title: "CIMA Annual Conference", when: "Annual · Rotating Cities", desc: "The flagship academic and practitioner conference on agricultural heritage and museum studies.", location: "Rotating Venues" },
];

export default function Programmes() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="programmes" id="programmes" ref={ref}>
      <div className="container">
        <div className={`programmes__header reveal${vis ? " visible" : ""}`}>
          <div className="event-badge on-light">Programmes & Events</div>
          <h2 className="display-lg">Heritage in<br /><em>Action</em></h2>
        </div>

        {/* Festival schedule block */}
        <div className={`festival-block reveal reveal-delay-1${vis ? " visible" : ""}`}>
          <div className="festival-block__top">
            <div className="festival-block__top-left">
              <div className="event-badge gold">Upcoming · Featured</div>
              <div className="festival-block__title">SANGAM Agriculture Heritage Film Festival</div>
              <div className="festival-block__meta">Kisan Diwas · National Farmers' Day · Multiple Venues, India</div>
            </div>
            <div className="festival-block__date-box">
              <div className="festival-block__date-day">21</div>
              <div className="festival-block__date-month">Dec 2026</div>
            </div>
          </div>
          <div className="festival-block__days">
            {festivalDays.map((day, i) => (
              <div className="festival-day" key={i}>
                <div className="festival-day__label">{day.label}</div>
                <div className="festival-day__date">{day.date}, 2026</div>
                <div className="festival-day__items">
                  {day.items.map((item, j) => (
                    <div className="festival-day__item" key={j}>
                      <span className="festival-day__item-time">{item.time}</span>
                      <span className="festival-day__item-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="programmes__grid">
          {cards.map((c, i) => (
            <article key={i} className={`prog-card reveal reveal-delay-${Math.min(i + 2, 4)}${vis ? " visible" : ""}`}>
              <div className="prog-card__top">
                <span className="prog-card__icon-box">{c.icon}</span>
                <span className="prog-card__badge">{c.badge}</span>
              </div>
              <div className="prog-card__cat">{c.cat}</div>
              <h3 className="prog-card__title">{c.title}</h3>
              <div className="prog-card__when">{c.when}</div>
              <p className="prog-card__desc">{c.desc}</p>
              <div className="prog-card__footer">
                <span className="prog-card__location">📍 {c.location}</span>
                <a href="#" className="prog-card__link">Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
