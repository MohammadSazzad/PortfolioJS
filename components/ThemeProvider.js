'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => null,
  mounted: false,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    const isDark =
      t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', isDark);
    setResolvedTheme(isDark ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback(
    (t) => {
      setThemeState(t);
      localStorage.setItem('theme', t);
      applyTheme(t);
    },
    [applyTheme],
  );

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setThemeState(saved);
    applyTheme(saved);
    setMounted(true);
  }, [applyTheme]);

  // Listen for OS preference changes when in system mode
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') applyTheme('system');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
