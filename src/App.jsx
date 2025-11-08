
// Local
import Router from '@components/router';
import Background from '@components/background';

// Styles
import './App.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';

const THEME_STORAGE_KEY = 'teerzo-theme';

export default function App() {

  const getPreferredTheme = useCallback(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }, []);

  const [theme, setTheme] = useState(() => getPreferredTheme());

  useEffect(() => {
    console.log('version', '0.5.0');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleThemeChange = useCallback((nextTheme) => {
    setTheme(nextTheme === 'light' ? 'light' : 'dark');
  }, []);

  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  return (
    <div className="App">
      <Background theme={theme} darkmode={isDarkMode} />
      <Router theme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
}