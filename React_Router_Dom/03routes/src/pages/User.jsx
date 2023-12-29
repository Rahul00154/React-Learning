import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  // it is used to create dynamic routes and display content based on URL parameters.
  const param = useParams()
  const { name } = param
  return <h1> User name is: {name}</h1>
}

export default User
