import { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
  const localAuth = JSON.parse(localStorage.getItem('auth'))
  const [auth, setAuth] = useState(localAuth)

  function setLocalAuth(authData){
    setAuth(authData)
    localStorage.setItem('auth', JSON.stringify(authData))
  }

  return (
    <AuthContext.Provider value={{ auth, setLocalAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext