import { useState } from 'react'

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  function validate() {
    let newErrors = {}
    if (name === "") {
      newErrors.name = "Naam zaroori hai!"
    }
    if (email === "") {
      newErrors.email = "Email zaroori hai!"
    } else if (!email.includes("@")) {
      newErrors.email = "Sahi email likho!"
    }
    if (password.length < 6) {
      newErrors.password = "Password 6 se zyada hona chahiye!"
    }
    return newErrors
  }

  function handleSubmit() {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      alert(`Welcome ${name}!`)
    }
  }

  return (
    <>
      <h1>Register Form</h1>
      <input
        type="text"
        placeholder="Naam likho"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name &&
        <p style={{color:"red"}}>{errors.name}</p>}
      <br/>
      <input
        type="email"
        placeholder="Email likho"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email &&
        <p style={{color:"red"}}>{errors.email}</p>}
      <br/>
      <input
        type="password"
        placeholder="Password likho"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password &&
        <p style={{color:"red"}}>{errors.password}</p>}
      <br/><br/>
      <button onClick={handleSubmit}>
        Register!
      </button>
    </>
  )
}

export default Form



