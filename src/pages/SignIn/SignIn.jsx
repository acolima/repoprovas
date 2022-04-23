import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/logo.png'
import logoGithub from '../../assets/logo-github.png'
import { 
  Button, 
  Buttons, 
  Container,  
  Form, 
  GithubButton,
  HorizontalSeparator, 
  Input, 
  Logo,
  StyledLink,
  Title
} from '../../components/FormComponents'
import useAuth from '../../hooks/useAuth'
import * as api from '../../services/api'

function SignIn() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  const [disabled, setDisabled] = useState(false)
  const { setLocalAuth } = useAuth()
  const navigate = useNavigate()

  function handleInput(e) {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    api.login(userData)
    .then((response) => {
      navigate('/home')
      setLocalAuth(response.data.token)
    })
    .catch((error) => {
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
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
    <Container>
      <Logo src={logo} alt='RepoProvas logo'/>
      
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <GithubButton
          type='button'
          onClick={handleLoginGithub}
        >Entrar com o Github</GithubButton>
        <HorizontalSeparator><span>ou</span></HorizontalSeparator>
        <Input
          type='email' 
          placeholder='Email'
          name='email'
          onChange={handleInput}
          value={userData.email}
          disabled={disabled}
          required
        />
        <Input 
          type='password'
          placeholder='Senha'
          name='password'
          onChange={handleInput}
          value={userData.password}
          disabled={disabled}
          required
        />
        <Buttons>
          <StyledLink to={'/sign-up'}>Não possuo cadastro</StyledLink>
          <Button
            type='submit'
            disabled={disabled}
          >
            {disabled ? 
              <ThreeDots color="#FFF" height={30} width={30} /> :
              'Entrar'
            }
          </Button>
        </Buttons>
      </Form>
    </Container>
  )  
}

export default SignIn