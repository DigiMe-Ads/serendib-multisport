import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import ScrollManager from './components/layout/ScrollManager'
import PageTransition from './components/layout/PageTransition'
import Home from './pages/Home'
import SprintColombo from './pages/SprintColombo'
import KayaExpo from './pages/KayaExpo'
import ActiveColombo from './pages/ActiveColombo'
import Partners from './pages/Partners'
import NotFound from './pages/NotFound'

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/sprint-colombo', element: <SprintColombo /> },
  { path: '/kaya-expo', element: <KayaExpo /> },
  { path: '/active-colombo', element: <ActiveColombo /> },
  { path: '/partners', element: <Partners /> },
  { path: '*', element: <NotFound /> },
]

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={<PageTransition>{element}</PageTransition>} />
          ))}
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
