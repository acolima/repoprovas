import { LoadingButton } from "@mui/lab"
import { Box, MenuItem, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import useAuth from "../../../hooks/useAuth"

import * as api from '../../../services/api'

function NewTest({ setButtonValue }) {
  const { auth } = useAuth()
  const [categories, setCategories] = useState([])
  const [disciplines, setDisciplines] = useState([])
  const [instructors, setInstructors] = useState([])
  const [loading, setLoading] = useState(false)

  const [testData, setTestData] = useState({
    name: '',
    pdfUrl: '',
    category: '',
    discipline: '',
    instructor: ''
  })

  function handleInput(e) {
    setTestData({...testData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    setTestData({...testData, instructor: ''})

    api.getCategories(auth)
      .then(response => setCategories(response.data))

    api.getDisciplines(auth)
      .then(response => setDisciplines(response.data))
    
    // eslint-disable-next-line
  }, [auth, testData.discipline])

  function handleSelectedDiscipline(id) {
    api.getInstructorsByDiscipline(auth, id)
      .then(response => setInstructors(response.data))
  }

  function handleNewTest(e){
    e.preventDefault()

    setLoading(true)

    api.createTest(auth, testData)
      .then(() => {
        Swal.fire({icon: 'success', text: 'Prova adicionada com sucesso'})
        setButtonValue('disciplina')
      })
      .catch(() => {
        Swal.fire({icon: 'error', text: 'Não foi possível adicionar a prova'})
        setLoading(false)
      })
  }

  return(
    <Box component='form' onSubmit={handleNewTest} sx={styles.form}>
      <TextField
        label='Título da prova'
        name='name'
        onChange={handleInput}
        value={testData.name}
        required
      />

      <TextField
        label='PDF da prova'
        name='pdfUrl'
        onChange={handleInput}
        value={testData.pdfUrl}
        required
      />

      <TextField
        label='Categoria'
        name='category'
        select
        onChange={handleInput}
        value={testData.category}
        required
      >
        {categories.map(category => 
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        )}
      </TextField>

      <TextField
        label='Disciplina'
        name='discipline'
        select
        onChange={handleInput}
        value={testData.discipline}
        required
      >
        {disciplines.map(discipline => 
          <MenuItem 
            key={discipline.id} 
            value={discipline.name}
            onClick={() => handleSelectedDiscipline(discipline.id)}
          >
            {discipline.name}
          </MenuItem>
        )}
      </TextField>
      
      <TextField
        select
        label='Pessoa instrutora'
        name='instructor'
        onChange={handleInput}
        value={testData.instructor}
        required
      >
        {instructors.map(instructor => 
          <MenuItem key={instructor.id} value={instructor.name}>
            {instructor.name}
          </MenuItem>
        )}
      </TextField>

      <LoadingButton
        type='submit'
        variant='contained'
        loading={loading}
      > Enviar </LoadingButton>
    </Box>
  )
}

export default NewTest

const styles = {
  form: {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '25px'
  }
}