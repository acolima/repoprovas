import { Container, Link, Typography } from '@mui/material'

function Tests({category}) {
  const tests = category.tests
  
  return (
    <Container>
      <Typography sx={{ fontSize: '16px' }}>
        {category.name}
      </Typography>
      <Container>
        {tests.length !== 0 &&
          tests.map(test =>
            <Link 
              key={test.id}
              href={test.pdfUrl}
              underline='hover'
              target='_blank'
              rel='noopener'
              color='#878787'
              variant="subtitle1"
            >
              {test.name} ({test.teachersDisciplines.disciplines.name})<br></br>
            </Link>
          )
        } 
      </Container>
    </Container>
  )
}

export default Tests