import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../../../../hooks/useAuth'
import * as api from '../../../../services/api'
import Instructor from '../Instructor'

function TestsByInstructor() {
  const [instructors, setInstructors] = useState([])
  const { auth } = useAuth()
  const navigate = useNavigate()

	useEffect(() => {
		api.getTestsByInstructor(auth)
		.then((response) => setInstructors(response.data))
    .catch(() => {
      Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
      navigate('/')
    })
  }, [auth, navigate])

  return (
    <>
      {instructors.map((instructor) =>
        <Instructor 
          key={instructor.instructorId}
          instructor={instructor}
        />
      )}
    </>
  )
}

export default TestsByInstructor