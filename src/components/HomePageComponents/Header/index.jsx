import logo from '../../../assets/logo.png'
import logout from '../../../assets/logout.png'
import {
  Container,
  Logo,
  LogoutButton,
  HorizontalSeparator,
  Nav,
  SearchBar
} from './styles'
import useAuth from '../../../hooks/useAuth'
import * as api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Header() {
  const { auth, removeLocalAuth } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    api.logout(auth)
    .then(() => {
      removeLocalAuth()
      navigate('/')
    })
    .catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  return(
    <Container>
      <Nav>
        <Logo src={logo} alt ='RepoProvas logo'/>
        <LogoutButton onClick={handleLogout}>
          <img src={logout} alt='Logout icon'/>
        </LogoutButton>
      </Nav>
      <SearchBar
        placeholder='Pesquise por disciplina'
      />
      <HorizontalSeparator/>
    </Container>
  )
}

export default Header
