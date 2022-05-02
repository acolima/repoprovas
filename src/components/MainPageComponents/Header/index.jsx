import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth'
import * as api from '../../../services/api'
import Swal from 'sweetalert2'
import { 
  Box, 
  Container, 
  MenuItem, 
  TextField, 
  Typography 
} from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import styles from "./styles"

function Header({ display, terms, instructors, setSearchText, textFieldLabel, setTextFieldLabel }) {

  const { auth, removeLocalAuth } = useAuth()
  const navigate = useNavigate()
  let searchBar = []

  function handleLogout() {
    api.tokenValidation(auth)
    .then(() => {
      removeLocalAuth()
      navigate('/')
    })
    .catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }
  
  function getDisciplinesName(){
    const disciplinesName = []

    terms.map(term => 
      term.disciplines.map(t => 
        disciplinesName.push({id: t.disciplineId, name: t.disciplineName})
      )
    )

    return disciplinesName
  }

  function getInstructorsName(){
    return instructors.map(instructor => {
      return ({id: instructor.instructorId, name: instructor.instructorName})  
    })
  }

  if(display === 'disciplina'){
    const disciplinesName = getDisciplinesName()
    searchBar = [...disciplinesName]
  } else {
    const instructorsName = getInstructorsName()
    searchBar = [...instructorsName]
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
          select
          label={`Pesquise por ${display}`} 
          sx={styles.textfield}
          value={textFieldLabel}
          onChange={(e) => setTextFieldLabel(e.target.value)}
        >
          <MenuItem value={'Todos'} onClick={() => setSearchText('Todos')}>Todos</MenuItem>
          {searchBar.map(item => (
            <MenuItem 
              key={item.id} 
              value={item.name}
              onClick={() => setSearchText(item.name)}  
            >
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      }
    </Container>
  )
}

export default Header