import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, SignIn, SignUp } from './pages/index'

function PageRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes