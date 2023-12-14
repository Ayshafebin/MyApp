import React, { useReducer } from 'react'


const Reducer = (state,action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return 0;

    }
}
const UseReducer = () => {

    const [value,dispatch] = useReducer(Reducer, 0);

  return (
    <div>
        <button onClick={() => dispatch('Increment')}>I</button><br />
        <h3>{value}</h3>
        <button onClick={() => dispatch('Decrement')}>D</button><br />
        <button onClick={() => dispatch('Reset')}>R</button><br />
    </div>
  )
}

export default UseReducer