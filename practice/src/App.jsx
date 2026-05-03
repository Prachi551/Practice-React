// // // // // // // // // import React from 'react'
// // // // // // // // // import Work from './work.jsx'
// // // // // // // // // import Parent from './parent.jsx'
// // // // // // // // // import Child from './Child.jsx'
// // // // // // // // // import Hooks from './Hooks.jsx'
// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //     <Work/>
// // // // // // // // //     <Hooks/>
// // // // // // // // //     <parent/>
// // // // // // // // //     <Child/>

// // // // // // // // //     <h1>PHYSICS</h1> 
// // // // // // // // //     </>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App
// // // // // // // // import React from 'react'
// // // // // // // // import Parent from './PropsPassing.jsx/Parent.jsx'


// // // // // // // // const App = () => {
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //     <Parent/>
// // // // // // // //     </>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default App
// // // // // // // import React from 'react'

// // // // // // // const App = () => {
// // // // // // //   return (
// // // // // // //     <div>App</div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default App


// // // // // // import React from 'react'

// // // // // // const App = () => {
// // // // // //   const name="prachi"
// // // // // //   const age =19
// // // // // //   const course ="btech"
// // // // // //   return (
// // // // // //     <>
// // // // // //     <div>App</div>
// // // // // //     <h1>My name is {name}</h1>
// // // // // //     <h1>My age is {age}</h1>
// // // // // //     <h1>My course is {course}</h1>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // // export default App

// // // // // import React from 'react'
// // // // // import Studentcard from './Studentcard.jsx' 

// // // // // const App = () => {
// // // // //   return (
// // // // //     <>
// // // // //     <div>App</div>
// // // // //       <Studentcard/>
// // // // //       <Studentcard/>
// // // // //       <Studentcard/>  
// // // // //       </>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import React from 'react'
// // // // // import IfElseComp from './ifelse.jsx'
// // // // // import Hooks from './Hooks.jsx' 
// // // // // import Timer from './Timer.jsx' 


// // // // // function App() {
// // // // //   const students = [
// // // // //     { name: "Prachi", age: 19, course: "BTech" },
// // // // //     { name: "Gargi", age: 20, course: "BCA" },
// // // // //     { name: "Rahul", age: 21, course: "MCA" },
// // // // //   ]

// // // // //   return (
// // // // //     <>
// // // // //       <h1>Student List</h1>
     
// // // // //       <IfElseComp />  
// // // // //       <Hooks />   
// // // // //       <Timer/>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // import { useState } from 'react'
// // // // import Timer from './Timer'

// // // // function App() {
// // // //   const [show, setShow] = useState(true)

// // // //   return (
// // // //     <>
// // // //       <button onClick={() => setShow(!show)}>
// // // //         {show ? "Timer Hatao" : "Timer Dikhao"}
// // // //       </button>

// // // //       {show && <Timer />}
// // // //     </>
// // // //   )
// // // // }

// // // // export default App



// // // // import { useState, useEffect } from 'react'

// // // // function App() {
// // // //   return (
// // // //     <>
// // // //       <h1>Lecture 29 Ready!</h1>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App 
// // // import React from 'react'
// // // import Userslist from './Userslist.jsx' 
// // // import button from './button.jsx'

// // // const App = () => {
// // //   return (
// // //     <>
// // //     <div>App</div>
// // //       <Userslist/> 
// // //       <button/>
// // //     </>
// // //   )
// // // }

// // // export default App
// // // import React from 'react'
// // // import button from './Button.jsx' 

// // // const App = () => {
// // //   return (
// // //     <>
// // //     <div>App</div>
// // //         <button/>
// // //         </>
// // //   )
// // // }

// // // export default App



// // import { useState, useEffect } from 'react'

// // function App() {
// //   const [users, setUsers] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(response => response.json())
// //       .then(data => {
// //         setUsers(data)
// //         setLoading(false)
// //       })
// //       .catch(error => {
// //         console.log("Error:", error)
// //         setLoading(false)
// //       })
// //   }, [])

// //   if (loading) {
// //     return <h1>Loading... ⏳</h1>
// //   }

// //   return (
// //     <>
// //       <h1>Users List</h1>
// //       {users.map(user => (
// //         <div key={user.id}>
// //           <h3>{user.name}</h3>
// //           <p>Email: {user.email}</p>
// //           <hr/>
// //         </div>
// //       ))}
// //     </>
// //   )
// // }

// // export default App


// import { useRef } from 'react'

// function App() {
//   const inputRef = useRef(null)

//   function handleFocus() {
//     inputRef.current.focus()
//   }

//   function handleClear() {
//     inputRef.current.value = ""
//   }

//   return (
//     <>
//       <h2>useRef Example</h2>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Kuch likho..."
//       />
//       <br/><br/>
//       <button onClick={handleFocus}>
//         🎯 Focus Karo
//       </button>
//       <button onClick={handleClear}>
//         🗑️ Clear Karo
//       </button>
//     </>
//   )
// }

// export default App

import React from 'react'
import Form from './form.jsx'   

const App = () => {
  return (
    <>
    <div>App</div>
    <Form/> 
    </>
  )
}

export default App