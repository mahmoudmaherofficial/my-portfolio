import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded bg-bg-secondary text-text w-8 h-8 flex items-center justify-center border border-border hover:scale-105 transition">
      {lang === "en" ? "ع" : "EN"}
    </button>
  );
}
