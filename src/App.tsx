import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { ThemeProvider } from './context/ThemeContext'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguagesStore from '@/constant/languages'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: LanguagesStore,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
