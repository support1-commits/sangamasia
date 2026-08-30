"use client";

import { useEffect, useState } from "react";
import { useSiteLanguage } from "../lib/siteLanguage";

const cookieCopy = {
  en: { title: "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.", button: "Ok" },
  hi: { title: "हम cookies का उपयोग करते हैं ताकि आप हमारी वेबसाइट का सर्वोत्तम अनुभव कर सकें। यदि आप इस साइट का उपयोग जारी रखते हैं, तो हम मानेंगे कि आप इससे संतुष्ट हैं।", button: "ठीक है" },
  bn: { title: "আমরা কুকিজ ব্যবহার করি যাতে আপনি আমাদের ওয়েবসাইটের সর্বোত্তম অভিজ্ঞতা পান। আপনি যদি এই সাইটটি ব্যবহার চালিয়ে যান, তবে আমরা ধরে নেব যে আপনি এতে সন্তুষ্ট।", button: "ঠিক আছে" },
};

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const locale = useSiteLanguage();
  const copy = cookieCopy[locale] || cookieCopy.en;

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
        <p>{copy.title}</p>
        <button type="button" className="cookie-banner__button" onClick={handleAccept}>{copy.button}</button>
      </div>
    </div>
  );
}
