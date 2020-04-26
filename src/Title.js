import React from 'react'

const Title = () => {
  console.log("TITLE IS RENDERED")

  return (
    <h1>Hi bossROD!</h1>
  )
}

export default React.memo(Title)