// // // // // import React from 'react'
// // // // // import Work from './work.jsx'
// // // // // import Parent from './parent.jsx'
// // // // // import Child from './Child.jsx'
// // // // // import Hooks from './Hooks.jsx'
// // // // // const App = () => {
// // // // //   return (
// // // // //     <>
// // // // //     <Work/>
// // // // //     <Hooks/>
// // // // //     <parent/>
// // // // //     <Child/>

// // // // //     <h1>PHYSICS</h1> 
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default App
// // // // import React from 'react'
// // // // import Parent from './PropsPassing.jsx/Parent.jsx'


// // // // const App = () => {
// // // //   return (
// // // //     <>
// // // //     <Parent/>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App
// // // import React from 'react'

// // // const App = () => {
// // //   return (
// // //     <div>App</div>
// // //   )
// // // }

// // // export default App


// // import React from 'react'

// // const App = () => {
// //   const name="prachi"
// //   const age =19
// //   const course ="btech"
// //   return (
// //     <>
// //     <div>App</div>
// //     <h1>My name is {name}</h1>
// //     <h1>My age is {age}</h1>
// //     <h1>My course is {course}</h1>
// //     </>
// //   )
// // }

// // export default App

// import React from 'react'
// import Studentcard from './Studentcard.jsx' 

// const App = () => {
//   return (
//     <>
//     <div>App</div>
//       <Studentcard/>
//       <Studentcard/>
//       <Studentcard/>  
//       </>
//   )
// }

// export default App

import React from 'react'
import IfElseComp from './ifelse.jsx'
import Hooks from './Hooks.jsx' 
import Timer from './Timer.jsx' 


function App() {
  const students = [
    { name: "Prachi", age: 19, course: "BTech" },
    { name: "Gargi", age: 20, course: "BCA" },
    { name: "Rahul", age: 21, course: "MCA" },
  ]

  return (
    <>
      <h1>Student List</h1>
     
      <IfElseComp />  
      <Hooks />   
      <Timer/>
    </>
  )
}

export default App