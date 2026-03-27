import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} National Sports Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
