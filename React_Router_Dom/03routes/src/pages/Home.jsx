import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link to={'/about'}>Go to about Page</Link>
    </div>
  )
}

export default Home
