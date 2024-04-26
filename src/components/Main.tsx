import { useThemeContext } from '@/context/ThemeContext'
import { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext()

  return (
    <main id="main" data-bs-theme={theme}>
      {children}
    </main>
  )
}

export default Main
