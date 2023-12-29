import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to={'/'}>Go to home Page</Link>
    </div>
  )
}

export default NotFound
