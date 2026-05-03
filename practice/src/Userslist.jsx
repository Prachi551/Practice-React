// // import { useState, useEffect } from 'react'

// // function App() {
// //   const [users, setUsers] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     // API se data lao
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(response => response.json())
// //       .then(data => {
// //         setUsers(data)      // data save karo
// //         setLoading(false)   // loading band karo
// //       })
// //   }, []) // sirf ek baar fetch karo

// //   // Jab tak data na aaye
// //   if (loading) {
// //     return <h1>Loading... ⏳</h1>
// //   }

// //   // Data aa gaya — dikhao!
// //   return (
// //     <>
// //       <h1>Users List</h1>
// //       {users.map(user => (
// //         <div key={user.id}>
// //           <h3>{user.name}</h3>
// //           <p>Email: {user.email}</p>
// //           <p>City: {user.address.city}</p>
// //           <hr/>
// //         </div>
// //       ))}
// //     </>
// //   )
// // }

// // export default App

// import { useState, useEffect } from 'react'

// function App() {
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) {
//     return <h1>Loading... ⏳</h1>
//   }

//   return (
//     <>
//       <h1>Users List</h1>
//       {users.map(user => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>City: {user.address.city}</p>
//           <hr/>
//         </div>
//       ))}
//     </>
//   )
// }

// export default App