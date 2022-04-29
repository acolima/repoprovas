import logo from '../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth'
import * as api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Box, Container, TextField, Typography } from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import styles from "./styles"

function Header({ display }) {
  const { auth, removeLocalAuth } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    api.tokenValidation(auth)
    .then(() => {
      removeLocalAuth()
      navigate('/')
    })
    .catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  return(
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Box>
          <img src={logo} alt='RepoProvas logo' width='218'/>
        </Box>

        <LogoutRoundedIcon onClick={handleLogout} sx={styles.logoutIcon}/>

      </Box>

      {display === 'adicionar' ? 
        <Typography sx={styles.title}>Adicione uma prova</Typography>
      :
        <TextField 
          label={`Pesquise por ${display}`} 
          sx={styles.textfield}
          disabled
        />
      }
    </Container>
  )
}

export default Header