import React, { createContext, useContext, useState, useLayoutEffect } from 'react';
import './ThemeProvider.css';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === Theme.light ? Theme.dark : Theme.light;
    });
  };

  useLayoutEffect(() => {
    if (theme === Theme.light) {
      document.documentElement.setAttribute('theme', 'light');
    } else {
      document.documentElement.setAttribute('theme', 'dark');
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
