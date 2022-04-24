import { Container } from '@mui/material'
import PageContainer from '../../components/HomePageComponents/PageContainer'
import Header from '../../components/HomePageComponents/Header'

function Main(){
  return(
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: '100%', // ou vh?
        paddingBottom: '40px'
      }}
    >
      <Header/>
      <PageContainer/>
    </Container>
  )
}

export default Main