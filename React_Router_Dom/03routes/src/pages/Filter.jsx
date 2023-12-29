import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
  //it helps us to manage the information that's included in URL after the '?' symbol(query Parameters).
  // it is used to read and change the query parameters
  // the useSearchParams hook allows us to extract the query parameters and also allows us to modify these query parameters in a URL.

  const [searchParams, setSearchParams] = useSearchParams()
  console.warn(searchParams.get('age'))
  return (
    <div>
      <h3>City is : {searchParams.get('city')}</h3>
      <h4>Age is : {searchParams.get('age')}</h4>
      <input
        type="text"
        onChange={(e) => setSearchParams({ age: e.target.value })}
        placeholder="set age in query param"
      />
      <div className="city">
        <input
          type="text"
          onChange={(e) => setSearchParams({ city: e.target.value })}
          placeholder="set city in query param "
        />
      </div>
      <button onClick={() => setSearchParams({ age: 40 })}>
        set age is Query params
      </button>
    </div>
  )
}

export default Filter
