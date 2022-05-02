import { useState } from 'react'
import { Box, Container } from '@mui/material'
import Buttons from '../../components/MainPageComponents/Buttons'
import Header from '../../components/MainPageComponents/Header'
import NewTest from '../../components/MainPageComponents/AddTest'
import TestsByTerm from '../../components/MainPageComponents/TestsByTermsComponents/TestsByTerm'
import TestsByInstructor from '../../components/MainPageComponents/TestsByInstructorComponents/TestsByInstructor'

function Main() {
  const [buttonValue, setButtonValue] = useState('disciplina')
  const [terms, setTerms] = useState([])
  const [instructors, setInstructors] = useState([])
  const [searchText, setSearchText] = useState('Todos')
  const [textFieldLabel, setTextFieldLabel] = useState('Todos')

  return (
    <Container sx={styles.pageContainer}>
      <Header 
        display={buttonValue}
        terms={terms}
        instructors={instructors}
        searchText={searchText}
        setSearchText={setSearchText}
        textFieldLabel={textFieldLabel}
        setTextFieldLabel={setTextFieldLabel}
      />

      <Box sx={styles.buttons}>
        <Buttons 
          value={buttonValue} 
          setValue={setButtonValue} 
          setSearchText={setSearchText} 
          setTextFieldLabel={setTextFieldLabel}
        />

        {buttonValue === 'disciplina' && 
          <TestsByTerm
            terms={terms}
            setTerms={setTerms}
            searchText={searchText}
            buttonValue={buttonValue}
          />
        }

        {buttonValue === 'instrutor' && 
          <TestsByInstructor 
            instructors={instructors}
            setInstructors={setInstructors}
            searchText={searchText}
            buttonValue={buttonValue}
          />
        }
        
        {buttonValue === 'adicionar' && <NewTest setButtonValue={setButtonValue}/>}
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