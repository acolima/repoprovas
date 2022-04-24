import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tests from '../Tests'

function Instructor({instructor}) {
  const categories = instructor.categories

  return(
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography sx={{ fontSize: '18px'}}>
          {instructor.instructorName}
        </Typography>
      </AccordionSummary>

      {categories?.map(category =>
        <AccordionDetails key={category.id}>
          {category.tests.length !== 0 &&
            <Tests
              category={category}
            />
          }
        </AccordionDetails>
      )}
    </Accordion>
  )
}

export default Instructor