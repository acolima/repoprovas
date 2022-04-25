import { Container } from '@mui/material'
import PageContainer from '../../components/HomePageComponents/PageContainer'
import Header from '../../components/HomePageComponents/Header'

function Main() {
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