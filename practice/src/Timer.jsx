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

// import { useState, useEffect } from 'react'

// function App() {
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds(prev => prev + 1)
//     }, 1000)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

//   return (
//     <>
//       <h1>Timer: {seconds} seconds</h1>
//     </>
//   )
// }

// export default App

// import { useState, useEffect } from 'react'

// function App() {
//   const [seconds, setSeconds] = useState(0)
//   const [isRunning, setIsRunning] = useState(true)

//   useEffect(() => {
//     // isRunning false hai → timer mat chalao
//     if (!isRunning) return

//     const timer = setInterval(() => {
//       setSeconds(prev => prev + 1)
//     }, 1000)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [isRunning]) // isRunning badla → effect chale

//   return (
//     <>
//       <h1>Timer: {seconds} seconds</h1>
//       <button onClick={() => setIsRunning(true)}>
//         ▶ Start
//       </button>
//       <button onClick={() => setIsRunning(false)}>
//         ⏸ Pause
//       </button>
//       <button onClick={() => {
//         setIsRunning(false)
//         setSeconds(0)
//       }}>
//         🔄 Reset
//       </button>
//     </>
//   )
// }

// export default App

// App.jsx mein yeh karo:
// Ek button se Timer component 
// dikhao aur chhupao!



// Timer.jsx — alag file banao
import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log("Timer SHURU! ▶️")
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      console.log("Timer BAND! ⏹️") // ← yahan dekho!
      clearInterval(timer)
    }
  }, [])

  return <h1>Timer: {seconds} seconds</h1>
}

export default Timer 
