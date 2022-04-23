import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Discipline({discipline, handleChange, expandedDiscipline}) {

  return (
    <Accordion expanded={expandedDiscipline === discipline} onChange={handleChange(discipline)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          CSS
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Discipline