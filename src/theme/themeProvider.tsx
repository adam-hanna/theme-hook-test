import React, { createContext, useContext, ReactNode } from 'react';
import { theme, Theme } from './theme';

const themeContext = createContext<Theme>(theme);

type ThemeProviderProps = {
  children: ReactNode
  theme: Theme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (<themeContext.Provider value={theme}>{children}</themeContext.Provider>)
}

export const useTheme = (): Theme => {
  const theme = useContext(themeContext)

  if (process.env.NODE_ENV !== 'production') {
    if (theme === null) {
      console.error(
        'The `useTheme` hook MUST be contained within a `ThemeProvider`'
      )
    }
  }

  return theme
}
