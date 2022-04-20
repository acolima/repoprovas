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

function SignUp() {
  return (
    <Container>
      <Logo src={logo} />
      
      <Form>
        <Title>Cadastro</Title>
        <GithubButton>Entrar com o Github</GithubButton>
        <HorizontalSeparator><span>ou</span></HorizontalSeparator>
        <Input
          type='text' 
          placeholder='Email'
        />
        <Input 
          type='password'
          placeholder='Senha'
        />
        <Input 
          type='password'
          placeholder='Confirme sua senha'
        />
        <Buttons>
          <StyledLink to={'/sign-in'}>Já possuo cadastro</StyledLink>
          <Button>Cadastrar</Button>
        </Buttons>
      </Form>
    </Container>
  )  
}

export default SignUp