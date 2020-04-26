import React from 'react'

const Button = ({ increment }) => {
  console.log("BUTTON IS RENDERED")

  return (
    <button onClick={increment}>Increment</button>
  )
}

export default React.memo(Button)