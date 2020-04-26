import React, { useState, useMemo } from 'react';

const App = () => {
  // const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // const increment = useCallback(() => {
  //   setCount(prevCount => prevCount + 1)
  // }, [setCount])

  const increment1 = () => {
    setCount1(count1 + 1)
  }
  
  const increment2 = () => {
    setCount2(count2 + 1)
  }

  const isEven = useMemo(() => {
    let i = 0;
    while(i<2000000000) i++
    return (count1 % 2) === 0
  }, [count1])

  return (
    <div>
      <h1>Count 1 is: { isEven ? 'EVEN' : 'ODD' }</h1>
      <h1>Count 1: {count1}</h1>
      <button onClick={increment1}>Increment 1</button>
      <h1>Count 2: {count2}</h1>
      <button onClick={increment2}>Increment 2</button>
    </div>
  )
}

export default App