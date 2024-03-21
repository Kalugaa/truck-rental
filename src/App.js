import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home/index'));
const Campers = lazy(() => import('./pages/Campers/index'));
// const CamperDetails = lazy(() => import('pages/CamperDetails/CamperDetails'));
// const Features = lazy(() => import('./Features/Features'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Favorites = lazy(() => import('pages/Favorites/Favorites'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Campers />} />
          <Route path="catalog/:catalogId" element={<p>CAMPERS DETAILS</p>}>
            <Route path="features" element={<p>FEATUES</p>} />
            <Route path="reviews" element={<p>REVIEW</p>} />
          </Route>
          <Route path="favorites" element={<p>FAVORITES</p>} />
          <Route path="*" element={<p>HOME</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App