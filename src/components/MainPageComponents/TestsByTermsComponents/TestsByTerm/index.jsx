import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Term from '../Term'
import * as api from '../../../../services/api'
import useAuth from '../../../../hooks/useAuth'
import Swal from 'sweetalert2'
import Loader from '../../Loader/Loader'

function TestsByTerm({ terms, setTerms, searchText, buttonValue }) {
  const { auth } = useAuth()
	const navigate = useNavigate()

  let filteredTerms = []
  let termName = 0

	useEffect(() => {
		api.getTestsByTerm(auth)
			.then((response) => setTerms(response.data))
			.catch(() => {
				Swal.fire({ icon: 'error', text: 'Faça o login novamente' })
				navigate('/')
			})
	}, [auth, navigate, setTerms, buttonValue])

  if(searchText !== 'Todos'){
    const termsList = terms.map(term => 
      term.disciplines.filter(t => t.disciplineName === searchText)  
    )

    for(const [i, t] of termsList.entries()) {
      if(t.length !== 0)
        termName = (terms[i].termName)
    }

    filteredTerms = termsList.filter(t => t.length !== 0)
  }

  if(terms.length === 0)
    return <Loader/>

  if(searchText !== 'Todos'){
    return (
      <Term 
        termName={termName}
        disciplines={filteredTerms[0]}
      />
    )
  }

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