import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const BookLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book1</Link>
          </li>
          <li>
            <Link to="/books/2">Book2</Link>
          </li>
          <li>
            <Link to="/books/new">NewBook</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default BookLayout
