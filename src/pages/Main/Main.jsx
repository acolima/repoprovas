import { Box, Container } from '@mui/material'
import Header from '../../components/HomePageComponents/Header'
import Buttons from '../../components/HomePageComponents/Buttons'
import TestsByTerm from '../../components/HomePageComponents/TestsByTermsComponents/TestsByTerm'
import TestsByInstructor from '../../components/HomePageComponents/TestsByInstructorComponents/TestsByInstructor'
import { useEffect, useState } from 'react'

function Main() {
  const [buttonValue, setButtonValue] = useState('disciplina')
  const [instructors, setInstructors] = useState('Todos')
  const [searchFor, setSearchFor] = useState('Todos')

  useEffect(() => {
    if(buttonValue === 'instrutor'){
      if(searchFor === 'Todos') setInstructors('Todos')
      else setInstructors(searchFor)
    }
  }, [buttonValue, searchFor])

  return (
    <Container sx={styles.pageContainer}>
      <Header 
        display={buttonValue}
        setSearchFor={setSearchFor}  
      />

      <Box sx={styles.buttons}>
        <Buttons value={buttonValue} setValue={setButtonValue}/>
        {buttonValue === 'disciplina' && <TestsByTerm/>}
        {buttonValue === 'instrutor' && <TestsByInstructor instructors={instructors} />}
      </Box>
    </Container>
  )
}

export default Main

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBottom: '40px',
  },
  buttons: {
    width: '80%', 
    boxSizing: 'border-box', 
    marginTop: '20px'
  }
}