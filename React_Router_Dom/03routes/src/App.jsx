import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
// import NotFound from './pages/NotFound'
import User from './pages/User'
import Filter from './pages/Filter'
import Contact from './pages/Contact'
import Channel from './pages/Channel'
import Other from './pages/Other'
import Company from './pages/Company'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/user/:name"
            element={<User />}
          />
          <Route
            path="/filter"
            element={<Filter />}
          />

          {/* Here we perform nested routes
            through it we can make tabs or pages inside another page
          */}
          <Route
            path="/contact/"
            element={<Contact />}
          >
            <Route
              path="channel"
              element={<Channel />}
            />
            <Route
              path="company"
              element={<Company />}
            />
            <Route
              path="other"
              element={<Other />}
            />
          </Route>
          {/* <Route
            path="*"
            element={<NotFound />}
          /> */}
          <Route
            path="*"
            element={<Navigate to={'/'} />}
            // this is the way of redirecting pages from one another
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
