"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Conference", href: "#conference" },
  { label: "Programmes", href: "#programmes" },
  { label: "Museum", href: "#museum" },
  { label: "Heritage", href: "#heritage" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__brand">
          <div className="navbar__logo-wrap">
            <Image
              src="/sangam-logo.png"
              alt="SANGAM"
              width={52}
              height={52}
              className="navbar__logo-img"
              priority
            />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">SANGAM</span>
            <span className="navbar__brand-tagline">Agricultural Heritage Network</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" className="navbar__cta">
              Become a Member
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#join" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
          Become a Member
        </a>
      </div>
    </nav>
  );
}
