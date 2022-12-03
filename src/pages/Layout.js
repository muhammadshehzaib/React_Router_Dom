import React,{useContext} from 'react'
import {UserNameContext} from "../App"

const Layout = () => {
  const {username} = useContext(UserNameContext)

  return (
    <h1>This is layout Page {username} </h1>
  )
}

export default Layout