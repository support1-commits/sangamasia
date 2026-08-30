"use client";

import { useEffect, useState } from "react";

export const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "ur", label: "اردو" },
  { code: "ml", label: "മലയാളം" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ne", label: "नेपाली" },
];

export const getStoredLanguage = () => {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("sangam-language");
  return LANGUAGE_OPTIONS.some((option) => option.code === saved) ? saved : "en";
};

export const setStoredLanguage = (code) => {
  if (typeof window === "undefined") return;
  const normalized = LANGUAGE_OPTIONS.some((option) => option.code === code) ? code : "en";
  localStorage.setItem("sangam-language", normalized);
  document.documentElement.lang = normalized;
  document.body.dataset.locale = normalized;
  window.dispatchEvent(new CustomEvent("sangam-language-change", { detail: { code: normalized } }));
};

export const useSiteLanguage = () => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const updateLocale = () => setLocale(getStoredLanguage());
    updateLocale();
    window.addEventListener("sangam-language-change", updateLocale);
    return () => window.removeEventListener("sangam-language-change", updateLocale);
  }, []);

  return locale;
};

export const getLanguageMeta = (code) =>
  LANGUAGE_OPTIONS.find((option) => option.code === code) ?? LANGUAGE_OPTIONS[0];
