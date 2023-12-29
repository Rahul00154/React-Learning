import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <li>
        <Link to={'/user/rahul'}>Rahul</Link>
      </li>
      <li>
        <Link to={'/user/abhishek'}>Abhishek</Link>
      </li>
    </div>
  )
}

export default About
