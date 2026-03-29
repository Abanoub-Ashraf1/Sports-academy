import React from "react";
import "./Footer.css";
import { useLanguage } from "../../contexts/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
