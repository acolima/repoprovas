import { Container, Link, Typography } from '@mui/material'

function Exams({ category, instructor, term }) {
	const tests = category.tests;
	
  return (
		<Container>
			<Typography sx={{ fontSize: '16px' }}>{category.name}</Typography>
			<Container>
				{tests.length !== 0 &&
					tests.map((test) => (
						<Link
							key={test.id}
							href={test.pdfUrl}
							underline='hover'
							target='_blank'
							rel='noopener'
							color='#878787'
							variant='subtitle1'
						>
							{instructor && (
								<p>{test.name} ({test.teachersDisciplines.disciplines.name})</p>
							)}
							{term && (
                <p>{test.name} ({test.teachersDisciplines.teachers.name})</p>
							)}
						</Link>
					))}
			</Container>
		</Container>
	)
}

export default Exams