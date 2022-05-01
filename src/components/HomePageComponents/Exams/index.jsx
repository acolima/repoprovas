import { Box, Container, Link, Typography } from '@mui/material'
import { useState } from 'react'
import styles from './styles'
import Views from './ViewsLabel'

function Exams({ category, instructor, term }) {
	const tests = category.tests

  return (
		<Container>
			<Typography sx={styles.categoryTitle}>{category.name}</Typography>

      <Container sx={styles.container}>
				{tests.length !== 0 &&
					tests.map((test) => (
						<Exam 
              key={test.id}
              test={test}
              instructor={instructor}
              term={term}
            />
					))}
			</Container>
		</Container>
	)
}

export default Exams

function Exam({ test, instructor, term}){
  const [update, setUpdate] = useState(false)

  function handleViewCount() {
    setUpdate(!update)
  }
  
  return (
    <Box sx={styles.linkBox} onClick={handleViewCount}>
      <Link
        href={test.pdfUrl}
        underline='hover'
        target='_blank'
        rel='noopener'
        sx={styles.text}
      >
        {instructor && (
          <p>{test.name} ({test.teachersDisciplines.disciplines.name})</p>
        )}
        {term && (
          <p>{test.name} ({test.teachersDisciplines.teachers.name})</p>
        )}
      </Link>

      <Views count={test.views} id={test.id} update={update} setUpdate={setUpdate}/>
    </Box>
  )
}