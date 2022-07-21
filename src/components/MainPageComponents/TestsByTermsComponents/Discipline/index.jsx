import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Exams from '../../Exams';

function Discipline({ tests, disciplineName }) {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography sx={{ fontSize: '16px' }}>{disciplineName}</Typography>
			</AccordionSummary>
			{tests.map(
				(category) =>
					category.tests.length !== 0 && (
						<AccordionDetails key={category.id}>
							<Exams category={category} term={true} />
						</AccordionDetails>
					)
			)}
		</Accordion>
	);
}

export default Discipline;
