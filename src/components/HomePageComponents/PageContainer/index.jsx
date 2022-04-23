import { Container } from '@mui/material'
import Buttons from '../Buttons'
import TestsByTerm from '../TermsComponents/testsByTerm'
import {useState} from 'react'

function PageContainer() {
  const [buttonValue, setButtonValue] = useState(0)

  return (
    <Container sx={{ width: '80%', boxSizing: 'border-box', marginTop: '20px' }}>
      <Buttons value={buttonValue} setValue={setButtonValue}/>
      {buttonValue === 0 && <TestsByTerm/>}
      {/* {buttonValue === 1 && <TestsByInstructor />} */}
    </Container>
  )
}

export default PageContainer