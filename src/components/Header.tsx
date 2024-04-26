import { ETheme, useThemeContext } from '@/context/ThemeContext'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  const { theme, setTheme } = useThemeContext()

  const ChangeTheme = () => {
    switch (theme) {
      case ETheme.LIGHT: {
        localStorage.setItem('theme', ETheme.DARK)
        setTheme(ETheme.DARK)
        break
      }
      case ETheme.DARK: {
        localStorage.setItem('theme', ETheme.LIGHT)
        setTheme(ETheme.LIGHT)
        break
      }
      default: {
        localStorage.setItem('theme', ETheme.DARK)
        setTheme(ETheme.DARK)
        break
      }
    }
  }

  return (
    <header
      className="d-flex gap-2 align-items-center p-2"
      data-bs-theme={theme}
    >
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={ChangeTheme}>Change {theme} theme</button>
      <LanguageSelector />
    </header>
  )
}

export default Header
