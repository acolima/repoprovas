import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Exams from '../../Exams';

function Instructor({ categories, name }) {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography sx={{ fontSize: '18px' }}>{name}</Typography>
			</AccordionSummary>

			{categories?.map(
				(category) =>
					category.tests.length !== 0 && (
						<AccordionDetails key={category.id}>
							<Exams category={category} instructor={true} />
						</AccordionDetails>
					)
			)}
		</Accordion>
	);
}

export default Instructor;
