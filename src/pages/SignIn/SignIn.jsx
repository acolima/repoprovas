import { FormEvent, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/logo.png'
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
} from '../../components/formComponents'
import * as api from '../../services/api'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    api.login({email, password})
    .then((response) => {
      navigate('/home')
      console.log(response)
    })
    .catch((error) => {
      Swal.fire({icon: 'error', text: error.response.data})
    })
  }
  return (
    <Container>
      <Logo src={logo} />
      
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <GithubButton>Entrar com o Github</GithubButton>
        <HorizontalSeparator><span>ou</span></HorizontalSeparator>
        <Input
          type='email' 
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={disabled}
          required
        />
        <Input 
          type='password'
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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