import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/logo.png'
import logoGithub from '../../assets/logo-github.png'
import { 
  Box, 
  Button, 
  Container, 
  Divider, 
  IconButton, 
  InputAdornment, 
  OutlinedInput, 
  Typography 
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import styles from '../../components/FormComponents'
import * as api from '../../services/api'

function SignUp() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  function handleInput(e) {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    setDisabled(true)
    setLoading(true)

    if(userData.password.length < 6){
      Swal.fire({icon: 'error', text: 'A senha deve ter pelo menos 6 caracteres'})
      setDisabled(false)
      setLoading(false)
      return 
    }
    
    if(userData.password !== passwordConfirmation){
      Swal.fire({icon: 'error', text: 'Senhas não coincidem'})
      setDisabled(false)
      setLoading(false)
      return 
    }

    api.createUser(userData)
    .then(() => navigate('/'))
    .catch(error => {
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
      setLoading(false)
    })
  }

  function handleLoginGithub(){
    Swal.fire({
      title: 'Em breve',
      showConfirmButton: false,
      timer: 2000,
      width: 400,
      imageUrl: logoGithub,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Logo Github',
    })
  }

  return (
    <Container sx={styles.container}>
      <Box sx={styles.boxLogo}>
        <img src={logo} alt='RepoProvas logo'/>
      </Box>

      <Box component='form' onSubmit={handleSubmit} sx={styles.boxForm}>
        <Typography sx={styles.title}>Cadastro</Typography>

        <Button
          type='button'
          variant='contained'
          onClick={handleLoginGithub}
          sx={styles.buttonGithubLogin}
        >
          Entrar com o Github
        </Button>

        <Box>
          <Divider sx={styles.divider}>ou</Divider>
        </Box>        
        
        <OutlinedInput
          placeholder='Email'
          name='email'
          type='email' 
          onChange={handleInput}
          value={userData.email}
          disabled={disabled}
          required
          sx={styles.input}
        />

        <OutlinedInput 
          placeholder='Senha'
          name='password'
          type={showPassword ? 'text' : 'password'}
          onChange={handleInput}
          value={userData.password}
          disabled={disabled}
          sx={styles.input}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        <OutlinedInput 
          placeholder='Confirme sua senha'
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={passwordConfirmation}
          disabled={disabled}
          sx={styles.input}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        
        <Box sx={styles.buttonsBox}>
          <Typography sx={styles.linkButton} onClick={() => navigate('/')}>
            Já possuo cadastro
          </Typography>
          <LoadingButton
            type='submit'
            disabled={disabled}
            variant='contained'
            loading={loading}
          >
            Cadastrar
          </LoadingButton>
        </Box>

      </Box>
    </Container>
  )  
}

export default SignUp