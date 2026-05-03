// import React from 'react'
// import { useState } from 'react'
// const Hooks = () => {
//     const [count,setCount]= useState(100) 
//   return (
//     <>
//  <div> The count is {count}</div>
//  <button onClick ={()=>{setCount(count-1)}}>Update count </button>
//     </>
//   )
// }

// // export default Hooks
// import React from 'react'
// import {useState} from 'react'

// function Counter() {
//   const [count, setCount] = useState(0) // ✅ Simple!

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Click
//       </button>
//     </>
//   )
// }

// export default Counter  


// import { useState } from 'react'

// function App() {

//   // useState — count ki starting value 0 hai
//   const [count, setCount] = useState(0)

//   // Increase function
//   function increase() {
//     setCount(count + 1)
//   }

//   // Decrease function
//   function decrease() {
//     setCount(count - 1)
//   }

//   // Reset function
//   function reset() {
//     setCount(0)
//   }

//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <button onClick={increase}>+ Increase</button>
//       <button onClick={decrease}>- Decrease</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   )
// }

// export default App