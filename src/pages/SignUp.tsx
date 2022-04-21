import { FormEvent, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../assets/logo.png'
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
} from '../components/formComponents'

import * as api from '../services/api'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [disabled, setDisabled] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setDisabled(true)

    if(password.length < 6){
      Swal.fire({icon: 'error', text: 'A senha deve ter pelo menos 6 caracteres'})
      setDisabled(false)
      return 
    }
    
    if(password !== passwordConfirmation){
      Swal.fire({icon: 'error', text: 'Senhas não coincidem'})
      setDisabled(false)
      return 
    }

    api.createUser(email, password)
    .then(() => navigate('/'))
    .catch(error => {
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
    })
  }

  return (
    <Container>
      <Logo src={logo} />
      
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
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
        <Input 
          type='password'
          placeholder='Confirme sua senha'
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={passwordConfirmation}
          disabled={disabled}
          required
        />
        <Buttons>
          <StyledLink to={'/'}>Já possuo cadastro</StyledLink>
          <Button 
            type='submit'
            disabled={disabled}
          >
            {disabled ? 
              <ThreeDots color="#FFF" height={30} width={30} /> :
              'Cadastrar'
            }
          </Button>
        </Buttons>
      </Form>
    </Container>
  )  
}

export default SignUp