import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAuth0 } from "@auth0/auth0-react";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log('current User', user);
  return (
    <>
      {isAuthenticated && (<h3>Hello {user.name}</h3>) }
      {
        isAuthenticated ? (<button onClick={(e) => logout()}>logOut</button>) :
      (<button onClick={(e) => loginWithRedirect()}>Login with Redirect</button>)
      }
      </>
  )
}

export default App
