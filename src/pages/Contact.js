import React, { useState, useContext } from 'react'
import { UserNameContext } from "../App"

const Contact = () => {
  const { setUsername } = useContext(UserNameContext)
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={setUsername(inputValue)}>Change Name</button>
      <h1>{inputValue}</h1>
    </div>
  )
}

export default Contact