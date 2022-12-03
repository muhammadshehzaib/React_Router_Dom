import React,{useContext} from 'react'
import {UserNameContext} from "../App"

export const Home = () => {
const {username} = useContext(UserNameContext)
  return (
    <h1>This is {username} </h1>
  )
}

