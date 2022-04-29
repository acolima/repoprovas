import logo from '../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth'
import * as api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Box, Container, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import styles from "./styles"

function Header({ display, setSearchFor }) {
  const [searchList, setSearchList] = useState([])
  const [searchText, setSearchText] = useState('')
  const { auth, removeLocalAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(display === 'instrutor'){
      api.getInstructors(auth)
        .then(response => setSearchList(response.data))
    }
  }, [display, auth])

  function handleLogout() {
    api.tokenValidation(auth)
    .then(() => {
      removeLocalAuth()
      navigate('/')
    })
    .catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  function handleChange(e) {
    setSearchText(e.target.value)
  }

  return(
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Box>
          <img src={logo} alt='RepoProvas logo' width='218'/>
        </Box>

        <LogoutRoundedIcon onClick={handleLogout} sx={styles.logoutIcon}/>

      </Box>

      <TextField 
        select 
        label={`Pesquise por ${display}`} 
        sx={styles.textfield}
        value={searchText}
        onChange={handleChange}
      >
        <MenuItem value='Todos' onClick={() => setSearchFor('Todos')}>Todos</MenuItem>
        {searchList.map(instrutor => 
          <MenuItem 
            key={instrutor.id} 
            value={instrutor.name}
            onClick={() => setSearchFor(instrutor)}
          >{instrutor.name}</MenuItem>
        )}
      </TextField>
    </Container>
  )
}

export default Header
