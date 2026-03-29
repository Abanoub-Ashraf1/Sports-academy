import React, { createContext, useContext, useState, useMemo } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (path, vars = {}) => {
    const parts = path.split(".");
    let cur = translations[lang] || translations.en;
    for (const p of parts) {
      if (!cur) return path;
      cur = cur[p];
    }
    if (typeof cur === "string") {
      return cur
        .replace(/\{year\}/g, new Date().getFullYear())
        .replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
    }
    return cur;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
