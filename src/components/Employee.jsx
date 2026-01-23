import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'

const Employee = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const toggleAuthMode = () => setIsRegistering((prev) => !prev)

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />
  }

  return (
    <div className="auth-container">
      {isRegistering ? (
        <Signup onSwitch={toggleAuthMode} onSignup={handleLogin} />
      ) : (
        <Login onSwitch={toggleAuthMode} onLogin={handleLogin} />
      )}
    </div>
  )
}

export default Employee