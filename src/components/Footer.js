import React from "react";
import socialLinks from "../constants/socialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <ul
        className="d-flex justify-content-between mt-2"
        style={{
          width: "15rem",
          listStyleType: "none",
          boxSizing: "border-box"
        }}
      >
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              rel="noreferrer"
              target="_blank"
              style={{ fontSize: "1.5rem", color: "#102a42" }}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
