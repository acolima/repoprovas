import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Discipline from "../Discipline";

function Term({term, handleChangeTerm, expandedTerm}) {
  const [expandedDiscipline, setExpandedDiscipline] = useState(false)

  const handleChange = (term) => (event, isExpanded) => {
    setExpandedDiscipline(isExpanded ? term : false);
  }

  return(
    <Accordion expanded={expandedTerm === term} onChange={handleChangeTerm(term)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          1º Semestre
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Discipline 
          discipline='discipline1' 
          handleChange={handleChange} 
          expandedDiscipline={expandedDiscipline}
        />
        <Discipline 
          discipline='discipline1' 
          handleChange={handleChange} 
          expandedDiscipline={expandedDiscipline}
        />
        <Discipline 
          discipline='discipline1' 
          handleChange={handleChange} 
          expandedDiscipline={expandedDiscipline}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default Term