import React from 'react'
import {useQuery } from 'react-query'
import Axios from "axios"

const Home = () => {
  const { data, isLoading, error,refetch } = useQuery(['cat'], () => {
    return Axios.get("https://catfact.ninja/fact").then(res => res.data)
  });
  if (error) {
    return <h1>Sorry, There was an error</h1>
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>This is Home
      <p>{data?.fact}</p>
      <button onClick={refetch}>Update Data </button>
    </div>
  )
}

export default Home