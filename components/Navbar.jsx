"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Conference", href: "#conference" },
  { label: "Programmes", href: "#programmes" },
  { label: "Museums", href: "#museums" },
  { label: "Heritage", href: "#heritage" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__strip">
        <div className="navbar__strip-inner">
          <div className="navbar__strip-item">📅 Film Festival: <strong>Dec 21–23, 2026</strong></div>
          <div className="navbar__strip-item">🌍 <strong>8 Nations</strong> · South Asian Network</div>
        </div>
      </div>

      <div className="navbar__inner">
        <a href="#" className="navbar__brand">
          <div className="navbar__logo-box">
            <Image src="/sangam-logo.png" alt="SANGAM" width={40} height={40} priority />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">SANGAM</span>
            <span className="navbar__brand-sub">Heritage Network</span>
          </div>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.label}><a href={l.href} className="navbar__link">{l.label}</a></li>
          ))}
        </ul>

        <a href="#join" className="navbar__cta">Register Now</a>

        <button className={`navbar__burger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__drawer${open ? " open" : ""}`}>
        <div className="navbar_body">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="navbar__drawer-link" onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#join" className="navbar__drawer-cta" onClick={() => setOpen(false)}>Register Now</a>
        </div>
      </div>
    </nav>
  );
}
