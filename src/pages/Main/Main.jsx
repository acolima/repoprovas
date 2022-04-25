import { Container } from '@mui/material'
import PageContainer from '../../components/HomePageComponents/PageContainer'
import Header from '../../components/HomePageComponents/Header'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import * as api from '../../services/api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Main() {
  const { auth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    api.tokenValidation(auth)
    .then(response => console.log(response))
    .catch(() => {
      Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
      navigate('/')
    } )
  }, [auth])


  return (
    <Container sx={styles.container}>
      <Header />
      <PageContainer />
    </Container>
  )
}

export default Main

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBottom: '40px',
  }
}