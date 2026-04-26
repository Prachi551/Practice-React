import React from 'react'
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        Toggle Login
      </button>

      {isLogin ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
    </div>
  );
}
export default App  