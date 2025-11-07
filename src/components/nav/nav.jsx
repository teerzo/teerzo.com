import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./nav.scss";
import { useLocation } from "react-router-dom";

import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
// import jungleImage from '../../images/jungle.png';
import profileImage from "../../images/profile.png";

import arcRaidersImage from "../../images/arcraiders.jpg";
import duneImage from "../../images/dune.jpg";
import swgImage from "../../images/swglegends.png";

const NAV_LINK_IMAGES = [
  { id: "teerzo", src: profileImage, alt: "Teerzo" },
  { id: "arc", src: arcRaidersImage, alt: "Arc Raiders" },
  { id: "dune", src: duneImage, alt: "Dune Awakening" },
  { id: "swg", src: swgImage, alt: "SWG Legends" },
];

const THEME_STORAGE_KEY = "teerzo-theme";

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

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
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

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
              <div className="nav-image-link-container">
                <div className="label-container">
                  <span> {item.alt} </span>
                </div>
                <a
                  key={item.id}
                  className="nav-image-link"
                  href="https://teerzo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
