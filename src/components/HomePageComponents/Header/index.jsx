import logo from '../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth'
import * as api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Box, Container, Menu, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import styles from "./styles"

function Header() {
  const { auth, removeLocalAuth } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  function handleClick(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    api.logout(auth)
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

        <LogoutRoundedIcon onClick={handleClick} sx={styles.logoutIcon}/>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>

      <TextField label='Pesquise por disciplina' sx={styles.textfield}/>
    </Container>
  )
}

export default Header
