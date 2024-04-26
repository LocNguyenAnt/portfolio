/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react'

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ThemeContextType {
  theme: ETheme
  setTheme: (e: ETheme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: ETheme.LIGHT,
  setTheme: (e: string) => e,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)
  const themeLocal = localStorage.getItem('theme')

  useEffect(() => {
    if (themeLocal === null) {
      localStorage.setItem('theme', ETheme.DARK)
    } else {
      setTheme(themeLocal as ETheme)
    }
  }, [])

  const value = {
    theme,
    setTheme: (value: ETheme) => {
      console.log(value)

      setTheme(value)
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  return useContext(ThemeContext)
}
