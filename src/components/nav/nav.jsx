import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./nav.scss";
import { useLocation } from "react-router-dom";

import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
// import jungleImage from '../../images/jungle.png';
import teerzoImage from "../../images/teerzo-banner.png";
import arcRaidersImage from "../../images/arcraiders-banner.png";
import duneImage from "../../images/duneawakening-banner.png";
import swgImage from "../../images/legends-banner.png";

const NAV_LINK_IMAGES = [
  { id: "teerzo", src: teerzoImage, alt: "Teerzo", link: "https://teerzo.com" },
  { id: "arc", src: arcRaidersImage, alt: "Arc Raiders", link: "https://arcraiders.teerzo.com" },
  { id: "dune", src: duneImage, alt: "Dune Awakening", link: "https://dune.teerzo.com" },
  { id: "swg", src: swgImage, alt: "SWG Legends", link: "https://swg.teerzo.com" },
];

export default function Nav({ theme = "dark", onThemeChange, ...props }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
        }
      };

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    document.body.style.overflow = "";

    return undefined;
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleOverlayClick = useCallback((event) => {
    if (event.target === event.currentTarget) {
      setMenuOpen(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (onThemeChange) {
      onThemeChange(nextTheme);
    }
  }, [theme, onThemeChange]);

  const ThemeIcon = useMemo(() => (theme === "dark" ? FaSun : FaMoon), [theme]);

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <button
            className="menu-trigger"
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
          >
            <ThemeIcon />
          </button>
        </div>
      </nav>

      <div
        id="primary-navigation"
        className={`nav-overlay${menuOpen ? " open" : ""}`}
        role="presentation"
        aria-hidden={!menuOpen}
        onClick={handleOverlayClick}
      >
        <div className="nav-drawer" role="menu">
          <div className="nav-drawer-header">
            <span className="nav-drawer-title">Menu</span>
            <button
              className="nav-drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <FaTimes />
            </button>
          </div>

          <div className="nav-drawer-links">
            {NAV_LINK_IMAGES.map((item) => (
              <a
                key={item.id}
                className="nav-image-link"
                href={item.link}
                // target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <div className="nav-image-link-container" style={{ backgroundImage: `url(${item.src})` }}>
                  <div className="label-container">
                    <span> {item.alt} </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="nav-overlay-clicker"> 
            
        </div>
      </div>
    </>
  );
}
