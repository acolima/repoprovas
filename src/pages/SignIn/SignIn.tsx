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

function SignIn() {
  return (
    <Container>
      <Logo src={logo} />
      
      <Form>
        <Title>Login</Title>
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
        <Buttons>
          <StyledLink to={'/sign-up'}>Não possuo cadastro</StyledLink>
          <Button>Entrar</Button>
        </Buttons>
      </Form>
    </Container>
  )  
}

export default SignIn