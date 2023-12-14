import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter] = useState(0);

    const Inc = () => {
        setCounter((prev) => prev + 1);
    }

    const Dcr = () => {
        if(counter > 0){
            setCounter((prev) => prev - 1)
        }
    }

  return (
    <div>
        <button onClick={Inc}>+</button>
        {counter}
        <button onClick={Dcr}>-</button>
    </div>
  )
}

export default Counter