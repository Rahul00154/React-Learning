import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
  //it returns an object that match the dynamic parameter in routes

  const { id } = useParams()

  return (
    <div>
      <h1>Book {id}</h1>
    </div>
  )
}

export default Book
