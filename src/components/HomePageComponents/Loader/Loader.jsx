import { TailSpin } from "react-loader-spinner"
import { Container } from "@mui/material"

function Loader(){
  return (
    <Container sx={styles.container}>
      <TailSpin color="#1976D2" height="90" width="90" />
    </Container>
  )
}

export default Loader

const styles = {
  container: {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}