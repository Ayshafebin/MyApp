import React from 'react'

const Test = () => {
  return (
    React.createElement('div',{className:'testclss',id:'testid'},React.createElement('h1',null,'Component without jsx'))
  )
}

export default Test