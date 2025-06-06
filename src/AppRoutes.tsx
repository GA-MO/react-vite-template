import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/layout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}
