import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>This is contact page</h1>
      <h3>Here we have some other business</h3>
      <Link to={'company'}>Company</Link>
      <Link to={'channel'}>Channel</Link>
      <Link to={'other'}>Other</Link>
      <Outlet />
    </div>
  )
}

export default Contact
