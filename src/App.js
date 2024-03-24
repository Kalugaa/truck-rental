import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'

const Home = lazy(() => import('./pages/Home/index'));
const Campers = lazy(() => import('./pages/Campers/index'));
const Favorites = lazy(() => import('./pages/Favorites/index'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Campers />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App