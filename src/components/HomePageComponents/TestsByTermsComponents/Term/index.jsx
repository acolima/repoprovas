import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Discipline from '../Discipline'

function Term({ disciplines, termName }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontSize: '18px' }}>
          {termName}º Semestre
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
				{disciplines.map((discipline) => (
					<Discipline
						key={discipline.disciplineId}
						tests={discipline.tests}
						disciplineName={discipline.disciplineName}
					/>
				))}
      </AccordionDetails>
    </Accordion>
  )
}

export default Term