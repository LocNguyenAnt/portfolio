import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/ErrorPage'
import Layouts from '@/components/layouts'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/about',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router
