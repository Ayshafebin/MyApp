import React, { useState } from 'react'

const Input = () => {

    const [value,setValue] = useState();

    const handlevalue = (e) => {
        setValue(e.target.value)
        console.log(value);
    }
    
  return (
    <div>
        <input onChange={handlevalue} />
    </div>
  )
}

export default Input