import React, { useContext } from 'react'
import MyContext from './MyContext'

const UseContext = () => {

    const pssdvlue = useContext(MyContext)

  return (
    <div><h1>{pssdvlue}</h1></div>
  )
}

export default UseContext