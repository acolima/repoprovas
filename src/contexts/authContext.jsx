import { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
  const [auth, setAuth] = useState()

  function setLocalAuth(token){
    setAuth(token)
    localStorage.setItem('@repoprovas/auth', token)
  }

  console.log(auth)

  return (
    <AuthContext.Provider value={{ auth, setLocalAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext