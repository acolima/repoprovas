import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../../../../hooks/useAuth'
import * as api from '../../../../services/api'
import Instructor from '../Instructor'
import Loader from '../../Loader/Loader'

function TestsByInstructor({ instructors }) {
  const [categories, setCategories] = useState([])
  const [instructorsArray, setInstructorsArray] = useState([])
  const { auth } = useAuth()
  const navigate = useNavigate()

	useEffect(() => {
    if(instructors !== 'Todos'){ 
      api.getInstructorTest(instructors.id, auth)
        .then(response => setCategories(response.data))
        .catch(() => Swal.fire({ icon: 'error', text: 'Faça o login novamente' }))
    }
    else{
      api.getTestsByInstructor(auth)
        .then((response) => setInstructorsArray(response.data))
        .catch(() => {
          Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
          navigate('/')
        })
    }
  }, [auth, navigate, instructors])

  if(instructorsArray.length === 0)
    return <Loader/>

  if(instructors !== 'Todos')
    return (
      <Instructor 
        key={instructors.id}
        name={instructors.name}
        categories={categories}
      />
    )

  return (
    <>
      {instructorsArray.map((instructor) =>
        <Instructor 
          key={instructor.instructorId}
          name={instructor.instructorName}
          categories={instructor.categories}
        />
      )}
    </>
  )
}

export default TestsByInstructor