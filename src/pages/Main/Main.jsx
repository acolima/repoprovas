import { Box, Container } from '@mui/material'
import Header from '../../components/HomePageComponents/Header'
import Buttons from '../../components/HomePageComponents/Buttons'
import TestsByTerm from '../../components/HomePageComponents/TestsByTermsComponents/TestsByTerm'
import TestsByInstructor from '../../components/HomePageComponents/TestsByInstructorComponents/TestsByInstructor'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import * as api from '../../services/api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Main() {
  const [buttonValue, setButtonValue] = useState('disciplina')
  const { auth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    api.tokenValidation(auth)
    .catch(() => {
      Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
      navigate('/')
    } )
  }, [auth, navigate])

  return (
    <Container sx={styles.pageContainer}>
      <Header display={buttonValue}/>

      <Box sx={styles.buttons}>
        <Buttons value={buttonValue} setValue={setButtonValue}/>
        {buttonValue === 'disciplina' && <TestsByTerm/>}
        {buttonValue === 'instrutor' && <TestsByInstructor />}
      </Box>
    </Container>
  )
}

export default Main

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBottom: '40px',
  },
  buttons: {
    width: '80%', 
    boxSizing: 'border-box', 
    marginTop: '20px'
  }
}