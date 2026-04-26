// import { useState, useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = `Counter: ${count}`
//   }, [count])

//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         + Increase
//       </button>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <h1>Timer: {seconds} seconds</h1>
    </>
  )
}

export default App

