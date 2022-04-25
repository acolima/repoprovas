import Term from '../Term'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as api from '../../../../services/api'
import useAuth from '../../../../hooks/useAuth'
import Swal from 'sweetalert2'
import Loader from '../../Loader/Loader'

function TestsByTerm() {
  const [terms, setTerms] = useState([])
  const { auth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		api.getTestsByTerm(auth)
			.then((response) => setTerms(response.data))
			.catch(() => {
				Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
				navigate('/')
			})
	}, [auth, navigate])

  if(terms.length === 0)
    return <Loader/>

  return (
		<>
			{terms.map((term) => (
				<Term
					key={term.termId}
					disciplines={term.disciplines}
					termName={term.termName}
				/>
			))}
    </>
  )
}

export default TestsByTerm