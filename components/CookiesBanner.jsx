"use client";

import { useEffect, useState } from "react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("sangam_cookie_consent");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem("sangam_cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie policy consent">
      <div className="cookie-banner__inner">
        <p>
          We use cookies to ensure that we give you the best experience on our website. If you
          continue to use this site we will assume that you are happy with it.
        </p>
        <button type="button" className="cookie-banner__button" onClick={handleAccept}>
          Ok
        </button>
      </div>
    </div>
  );
}
